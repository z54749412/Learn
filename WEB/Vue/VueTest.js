//定义Vue 构造函数
function VueTest(option) {
  //初始化操作
  this._init(option);
}
VueTest.prototype._init = function (option) {
  var vm = this;
  vm.$options = option;
  var data = option.data;
  if (data) {
    //对data 进行处理
    vm.initData(data);
  }
  //处理计算属性
  if (option.computed) {
    vm.initComputed(option.computed);
  }
  //处理监听
  if (option.watch) {
    vm.initWatch(option.watch);
  }
  //挂载
  if (vm.$options.el) {
    vm.$mount(vm.$options.el)
  }
}
// 处理data，
VueTest.prototype.initData = function (value) {
  this.data = value;
  var keys = Object.keys(value);
  //对data设置 getter/setter 实现属性访问和设置值的时候进行拦截操作处理
  new Observable(value);
  //对data的每个属性实现代理 也就是可以通过 vm.xx访问具体的属性
  keys.forEach(key => {
    this.proxy(key);
  })


}
VueTest.prototype.initComputed = function (value) {
  var keys = Object.keys(value);
  keys.forEach(key => {
    //计算属性 观察者对象
    new Watcher(this, key, value[key]);
    //把计算属性代理到 vm实例上
    this.proxy(key, { get: value[key], set: function () { console.log('计算属性不能设置值') } });
  });


}
VueTest.prototype.initWatch = function (value) {
  var keys = Object.keys(value);
  keys.forEach(key => {
    new Watcher(this, key, value[key]);
  });
}
VueTest.prototype.proxy = function (key, getSetter) {
  var vm = this;
  getSetter = getSetter || {
    get: function () {

      return vm.data[key];
    },
    set: function (newVal) {
      vm.data[key] = newVal;
    }
  }
  Object.defineProperty(vm, key, getSetter)

}
VueTest.prototype.$mount = function (el) {
  var vm = this;
  var elDom = document.querySelector(el);
  var templates = elDom.outerHTML;
  this.templates = templates;
  this.el = elDom;
  //fn 直接解析模板赋值替换{{}} 然后 整体替换到 真实dom中
  // 做法略显粗暴，主要是为了深入理解vue中响应式数据原理
  var fn = function () {
    var newTemp = this.parseHTML(this.templates);
    var div = document.createElement('div');
    div.innerHTML = newTemp;
    var newDom = div.childNodes[0];
    var parentNode = this.el.parentNode;
    var nextNode = elDom.nextSibling;
    parentNode.insertBefore(newDom, nextNode)
    parentNode.removeChild(this.el);
    this.el = newDom;
  }
  //实现一个 dom渲染变化的 观察者
  new Watcher(vm, fn, () => { });


}
//解析html模板
VueTest.prototype.parseHTML = function (templates) {
  var vm = this;
  var reg = /\{\{(.*?)\}\}/g;
  //替换模板中的 {{}}为具体表达式的值
  var newT = templates.replace(reg, function (str, str1) {
    //构造render 函数 使用with 改变作用域
    //使模板上所有依赖的数据属性访问的时候都能把 负责渲染dom 的观察者Watcher 添加到各自的属性 dep 中
    var renderStr = 'with(this){ return ' + str1 + '}';
    fn = new Function(renderStr);
    return fn.call(vm);

  });
  return newT;

}
/******************************** Observable 类**********************************************/
//把对象的每一项转换为可观测的对象
//每一个可观测属性都对应一个订阅者列表对象 Dep
//Dep内的 subs 存放依赖该属性的每个观察者Watcher
function Observable(obj) {
  return this.walk(obj);
}
Observable.prototype.walk = function (obj) {
  var keys = Object.keys(obj);
  keys.forEach(key => {
    this.defineReactive(obj, key, obj[key]);
  });
  return obj;
}
//重点  设置  getter/setter
Observable.prototype.defineReactive = function (obj, key, val) {
  var dep = new Dep();
  Object.defineProperty(obj, key, {
    get: function () {
      //依赖收集操作
      if (Dep.target) {
        dep.depend(Dep.target);
      }
      return val;
    },
    set: function (newVal) {

      val = newVal;
      //值改变之后，对所有对该属性有依赖关系的 Watcher 进行通知 （调用watcher.update）
      dep.notify();
    }
  })
}
/******************************** Dep 类**********************************************/
//存放观察者列表，订阅/发布消息
function Dep() {
  this.subs = [];
}
//当前活动的Watcher  一般情况下 都是为空的
//在依赖收集阶段 才会被设置为当前Watcher
Dep.target = null;
//一个存放Watcher 的列表
var targetStack = [];
function pushTarget(target) {
  if (Dep.target) { targetStack.push(Dep.target) }
  Dep.target = target;
}
function popTarget() {
  Dep.target = targetStack.pop();
}
//把当前Watcher 添加到 subs 中
Dep.prototype.depend = function () {
  if (Dep.target && !~this.subs.indexOf(Dep.target)) {
    this.subs.push(Dep.target);
  }
}
//发布，
Dep.prototype.notify = function () {
  this.subs.forEach(watcher => {
    watcher.update();
  })
}
/******************************** Watcher 类**********************************************/
//定义观察者类
//vm VueTest 实例
//expOrFn  1：一个字符串（比如 监听一个属性的变化）  2.一个函数 （比如渲染dom观察者的渲染更新函数）
function Watcher(vm, expOrFn, cb) {
  this.vm = vm;
  this.expression = expOrFn.toString();
  this.cb = cb;
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn
  } else {
    this.getter = this.parsePath(expOrFn);
  }
  this.value = this.get();
}
Watcher.prototype.parsePath = function (expOrFn) {
  var segments = expOrFn.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) return
      obj = obj[segments[i]]
    }
    return obj
  }
}
Watcher.prototype.get = function () {
  var vm = this.vm;
  pushTarget(this);
  var value = this.getter.call(vm, vm);
  popTarget();
  return value;
}
Watcher.prototype.update = function () {
  // console.log('需要更新！');
  var oldValue = this.value;
  var value = this.get();
  this.value = value;
  this.cb.call(this.vm, value, oldValue);
}