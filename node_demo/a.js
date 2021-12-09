
let version=1.0;
const sayHi = name =>`你好，${name}`;


function add(a, b) {
	return a + b;
}

function sub(a, b) {
	return a - b;
}


exports.version = version;
exports.sayHi = sayHi;
exports.add = add;
exports.sub = sub;