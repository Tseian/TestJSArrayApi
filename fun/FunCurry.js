/**
 * Created by tseian on 08/02/2017.
 */

var curryIt = function (uncurried) {
    var parameters = Array.prototype.slice.call(arguments, 1);//将参数中第一个参数去掉
    return function () {
        return uncurried.apply(null, parameters.concat(Array.prototype.slice.call(arguments, 0)));
        //uncurried.apply(null, parameters.concat(Array.prototype.slice.call(arguments, 0))); 相当于greeter( "Hello", ", ", ".","heidi")
        //apply的数组里面的每一个参数对应相应位置的形参
    };
};

var greeter = function (greeting, separator, emphasis, name) {
    console.log(greeting + separator + name + emphasis);
};

var greetHello = curryIt(greeter, "Hello", ", ", ".");
greetHello("Heidi"); //"Hello, Heidi."
greetHello("Eddie"); //"Hello, Eddie."

var curryIt1 = function (uncurried) {
    var params = Array.prototype.slice.call(arguments, 1);
    return function () {
        return uncurried.apply(this, params.concat(
            Array.prototype.slice.call(arguments, 0)
        ));
    }
};
greetHello = curryIt(greeter, "Hello", ", ", ".");

greetHello("mama");

/**
 * apply 只是第二个参数为数组  而call参数则是任意的
 */

function schonfinkelize(fn) {
    var slice = Array.prototype.slice,
        stored_args = slice.call(arguments, 1);
    return function () {
        var new_args = slice.call(arguments),
            args = stored_args.concat(new_args);
        return fn.apply(null, args);
    };
}

function add(x, y) {
    return x + y;
}
console.log('schonfinkelize(add, 2, 2, 2)');
console.log(schonfinkelize(add, 1)(1));

//返回一个新的函数，将这个新的函数的参数传作为外部函数的的参数（函数），并调用该参数（函数），新函数再将调用结果返回
function getR(f) {
    return function () {
        return f.apply(this, arguments);
    }
}

function f(a, b) {
    return a + b;
}
console.log('getR(1, f)==');
console.log(getR(f)(1, 1));

var map = function (a, f) {
    var result = [];
    for (var i = 0, len = a.length; i < len; a++) {
        result[i] = f.call(null, a[i]);
    }
    return result;
};

console.log(map([1, 2, 3], function (a) {
    return ++a;
}));


