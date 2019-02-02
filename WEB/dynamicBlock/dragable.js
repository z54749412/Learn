/*
 * @Description: file content
 * @Author: Ntfs
 * @Date: 2019-01-23 10:35:20
 * @LastEditors: Ntfs
 * @LastEditTime: 2019-02-01 16:07:55
 */

export default class Drag {
  constructor (obj) {
    this.obj = null
    this.disX = 0
    this.disY = 0
    this.settings = {
      toDown: function (ev) {},
      toUp: function (ev) {},
      toMove: function () {}
    }
  }
  init = function (opt) {
    debugger
    var This = this
    if (opt.id) {
      this.obj = document.getElementById(opt.id)
    } else if (opt.el) {
      this.obj = opt.el
    }
    extend(this.settings, opt)
    this.obj.onmousedown = function (e) {
      var ev = e || window.event
      This.fnDown(ev)
      This.settings.toDown(ev)
      document.onmousemove = function (e) {
        var ev = e || window.event
        This.fnMove(ev)
        This.settings.toMove(ev, {
          X: ev.clientX - This.disX,
          Y: ev.clientY - This.disY
        })
      }
      document.onmouseup = function (e) {
        var ev = e || window.event
        This.fnUp(ev)
        This.settings.toUp(ev, {
          X: ev.clientX - This.disX,
          Y: ev.clientY - This.disY
        })
      }
      return false
    }
  }
  fnDown = function (ev) {
    this.disX = ev.clientX - this.obj.offsetLeft
    this.disY = ev.clientY - this.obj.offsetTop
  }
  fnMove = function (ev) {
    this.obj.style.left = ev.clientX - this.disX + 'px'
    this.obj.style.top = ev.clientY - this.disY + 'px'
  }
  fnUp = function () {
    document.onmousemove = null
    document.onmouseup = null
  }
}
function extend (obj1, obj2) {
  for (var attr in obj2) {
    obj1[attr] = obj2[attr]
  }
}
// export default function Drag () {
//   this.obj = null
//   this.disX = 0
//   this.disY = 0
//   this.settings = {
//     toDown: function (ev) {},
//     toUp: function (ev) {},
//     toMove: function () {}
//   }
// }

// Drag.prototype.init = function (opt) {
//   var This = this
//   if (opt.id) {
//     this.obj = document.getElementById(opt.id)
//   } else if (opt.el) {
//     this.obj = opt.el
//   }
//   extend(this.settings, opt)
//   this.obj.onmousedown = function (e) {
//     var ev = e || window.event
//     This.fnDown(ev)
//     This.settings.toDown(ev)
//     document.onmousemove = function (e) {
//       var ev = e || window.event
//       This.fnMove(ev)
//       This.settings.toMove(ev, {
//         X: ev.clientX - This.disX,
//         Y: ev.clientY - This.disY
//       })
//     }
//     document.onmouseup = function (e) {
//       var ev = e || window.event
//       This.fnUp(ev)
//       This.settings.toUp(ev, {
//         X: ev.clientX - This.disX,
//         Y: ev.clientY - This.disY
//       })
//     }
//     return false
//   }
// }

// Drag.prototype.fnDown = function (ev) {
//   this.disX = ev.clientX - this.obj.offsetLeft
//   this.disY = ev.clientY - this.obj.offsetTop
// }
// Drag.prototype.fnMove = function (ev) {
//   this.obj.style.left = ev.clientX - this.disX + 'px'
//   this.obj.style.top = ev.clientY - this.disY + 'px'
// }
// Drag.prototype.fnUp = function () {
//   document.onmousemove = null
//   document.onmouseup = null
// }

// function extend (obj1, obj2) {
//   for (var attr in obj2) {
//     obj1[attr] = obj2[attr]
//   }
// }
