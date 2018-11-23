function run(gen){
	return new Promise((resolve, reject) => {
		if(typeof gen === 'function'){
			gen = gen();
		}
		if(!gen || typeof gen.next !== 'function') {
			resolve();
		}

		function fulfilled(data) {
			let ret = gen.next(data);
			next(ret);
		}

		fulfilled();

		function next(ret) {
			if(ret.done) return resolve(ret.value);
			let value = ret.value;
			value = toPromise(value);
			value.then((res) => {
				fulfilled(res);
			});
		}
	});
}
// {
// 	'a': ajax(url),
// 	'b': ajax(url)
// }
function objectToPromise(obj){
	let promises = [];
	// let rets = {};
	for(let [key, promise] of Object.entries(obj)){
		if(isPromise(promise)) {
			promises.push(promise);
			// promise.then((res) => {
			// 	rets[key] = res;
			// });
		}
	}
	return Promise.all(promises);
}

function arrayToPromise(obj){

}

function toPromise(obj){
	if (isPromise(obj)) {
		return obj;
	}
	if (isArray(obj)) {
		return arrayToPromise(obj);
	}

	if (isObject(obj)) {
		return objectToPromise(obj);
	}

}

function isPromise(obj){
	return obj && typeof obj.then === 'function';
}

function isArray(obj){
	return obj && Array.isArray(obj);
}

function isObject(obj) {
	return obj && typeof obj === 'object';
}

// run(function(){}).then(()=>{

// });