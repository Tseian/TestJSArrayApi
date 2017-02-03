/**
 * Created by tseian on 10/10/2017.
 * 练习使用函数
 * MQ-TECH
 */

/**
 * 定义函数的方式 主要分为两种
 * 1、表达式方式
 * 2、函数定义表达式
 */

// 表达式方式定义函数的方式  1
var fun1 = function () {

};

// 表达式定义函数的方式  2
var fun2 = function f(n) {
    return n * f(n - 1)
};

// 函数定义表达式 定义
function fun3() {

}


/**
 * 嵌套函数
 * 一句话解释：函数里面的函数就是嵌套函数
 * tip:在函数声明语句不是真正的语句，但是不能出现在循环，条件判断，try／catch／finally以及with语句中
 */

//fun5就是一个嵌套函数

function fun4(a) {
    a += 1;
    function fun5() {
        console.log('我使用a，让a加一之后等于' + a);
        console.log(this);
    }

    fun5();
}

// fun4(1);

/**
 *函数调用方式
 * 1、作为函数调用  一般的使用
 * 2、作为方法调用
 * 3、作为构造函数调用
 * 4、通过他们的call的apply方法间接调用
 */

// 作为方法调用   函数作为对象的属性
var obj = {
    a: 'a',
    b: function () {
        console.log('调用了b');
        console.log('不再嵌套函数里面this === obj是' + (this === obj).toString());
        var that = this;

        function fun7() {
            console.log('在嵌套函数里面this === obj是' + (this === obj).toString());
            console.log('在嵌套函数里面that === obj是' + (that === obj).toString());
        }

        fun7();
    }
};
var fun6 = function () {
    console.log('我被obj调用了');
};

// obj.fun6 = fun6;
// obj.fun6();
// obj['fun6']();
//
// obj.b();
// obj['b']();

// 作为构造函数调用


//没有形参的构造函数调用可以省略圆括号   以后会讲的详细一点
var array = new Array;//等价于 var array =new Array()
// console.log(array);

// apply 和call方法调用函数会在以后重点讲解

/**
 * 函数的形参和实参
 * 重点说明实参和形参不一致的时候的情况
 * 如果实参少于形参则没有实际值传入的形参会等于undefined
 * 一般会在调用的时候传入一个null值给多拆来的形参
 * 多出来的实参则会省略，同时可以通过arguments这个变量来获取多出来的参数
 * arguments 是一个累数组对象
 */

var getPropertyNames = function (obj, /*optional*/ array) {

    if (arguments.length > 2) {

        console.log('arguments=');
        console.log(arguments);

        console.log('arguments.callee==');
        console.log(arguments.callee);

    }

    array = array || [];
    for (var p in obj) {
        array.push(p);
    }
    return array;
};

// var array1 = getPropertyNames(obj);
//
//
// array1 = getPropertyNames(obj, array1, 1, 2);
// console.log('array1==');
// console.log(array1);


/**
 * 将函数作为值
 * 函数不仅是一种语法，也是值，可以赋值给变量
 */


var add = function (x, y) {
    return x + y;
};

var multiply = function (x, y) {
    return x * y;
};

var operate = function (fun, arg1, arg2) {
    return fun(arg1, arg2);
};

// console.log(operate(add, 1, 2));
//
// console.log(operate(multiply, 1, 2));


var operators = {
    add: function (x, y) {
        return x + y;
    },
    subtract: function (x, y) {
        return x - y;
    }
};

var operate2 = function (fun, arg1, arg2) {
    if (typeof operators[fun] === 'function') {
        return operators[fun](arg1, arg2);
    } else {
        throw 'unknown operator';
    }
};

// console.log(operate2('add', 1, 2));


/**
 * 函数属性
 * 因为函数也是一个对象，所以可以拥有属性
 */
fun8.counter = 0;
function fun8(x, y) {
    a:'a';
    sum:0;
    fun8.sum = x + y;

    var f = function () {
        var value = 0;
    };


    return fun8.sum;

}
// console.log(fun8.counter);
// console.log(fun8(1, 2));
// console.log(fun8);


/**
 * 因为函数内部的变量不是全局变量，所以可以作为命名空间
 * 这种函数作为命名空间函数
 *
 *
 * js采用的是此法作用域
 * 也就是说函数执行依赖于变量作用域
 *
 */


/**
 * 嵌套函数的词法作用域的规则
 */



var scope = 'global';
function checkScope() {
    var scope = 'local';

    function f() {
        return scope;
    }

    return f();
}
// console.log(checkScope());  //输出为local

function checkScope1() {
    var scope = 'local';

    function f() {
        return scope;
    }

    return f;
}

// console.log(checkScope1()());
//虽然f实在外面调用，但是作用域链依然是存在 创建函数的时候就已经确定了作用域链 所以不管在什么地方调用f函数输出为local
// f是一个闭包，所以闭包的强大的点过就在这里了，捕捉函数的局部变量  一直保存这个变量

/**
 * tip: 调用函数的时候其实 都会创建一个对象用来保存局部变量，所以一般人会认为当 函数返回了结果的时候，该对象会被删除，
 * 系统会回收内存，所以与之相关的作用域链也不会存在了，但是当函数有闭包，而且该闭包是该函数的返回值，那么这个时候在外部调用该闭包时候，依然有一个应用指向该函数对象，
 * 该函数对象也就不会被回收内存，创建函数时候的作用域依然存在，所以这些局部变轻就被保存下来了。问题也来了，这难道不会消耗内存？
 */

/**
 * 函数的属性，方法，构造函数
 * 函数是对象
 */

/**
 * 函数的length属性
 * 这个length的值和arguments的length属性的值相等
 */

var check = function (args) {
    console.log(this.length);  //等于0
    console.log(args.length);  //实际传入的参数 个数
    console.log(args.callee.length);//期望传入的参数个数
};

function trainingLength(x, y, z) {
    a:'a';
    check(arguments)
}

// trainingLength(1, 2, 3, 4);
//
// console.log(trainingLength.length);  //--》3 等于期望传入参数的个数


/**
 * 以某一对象的方法来调用某一函数
 */

var fun10 = function (x, y) {
    console.log(this);
    console.log(x + y);
};

var obj = {
    description: "I'm obj"
};
// fun10.call(obj, 1, 2);  //相当于  obj.m =fun10;obj.m(1,2);

// fun10.apply(obj, [1, 2]);  //这是apply的调用方式，参数放在数组里面

//tostring 返回函数源码

/**
 * 函数的构造函数
 * Function()
 */
var trainingFunc = new Function('x', 'y', 'return x+y');  //x和y是新的函数的形参，x+y则是函数提

// console.log(trainingFunc(1, 2));  //输出3

/**
 * tip:Function()创建的函数总会在顶层作用域执行，不使用此法作用域，
 * 所以不会使用局部作用域和顶层作用域名称相同的变量值
 */
var scopeFun = 'global';
var trainingFun1 = function () {
    var scopeFun = 'local';
    return new Function('return scopeFun');
};
// console.log(trainingFun1()());   //使用顶层作用域的变量值，所以输出global

/**
 * 高阶函数
 * 将函数作为参数而且调用结果返回 新函数的韩素
 */


