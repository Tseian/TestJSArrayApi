/**
 * Created by tseian on 03/02/2017.
 */

/**
 第六章 对象
 除了字符串，数字，true，false，null，和undeined之外，javascript中的值都是对象。但是字符串，数字，布尔值的行为和不可变对象非常相似。
 属性名可以是包含空字符串在内的任意字符串，但不能存在两个同名的属性。
 每个属性都还有相关的特性，称之为属性特性。
 三种属性特性：
 1、可写 表明可以设置该属性的值
 2、可枚举 表明可以通过for／in循环返回该属性
 3、可配置  表明可以删除或者修改该属性

 除了这三个特性之外还有三个相关的对象特性
 1、对象的原型   指向另外一个对象，本对象的属性继承自他的原型对象
 2、对象的类    是一个标志对象类型的字符串
 3、对象的扩展标记   指明了是否可以向该对象添加新属性

 内置对象 ecmascript 规范定义的对象或类，例如数组，函数，日期，正则表达式都是内置对象
 宿主对象 是有js解释器所嵌入的宿主环境定义的
 自定义对象 是由运行中的js代码所创建的对象


 自有属性 是直接在对象中定义的属性
 继承属性 是在对象的原型对象中定义的属性

 */


/*
 6.1  创建对象
 可以通过对象直接量，关键字new和Object.create()函数来创建对象。
 对象最后一个属性名之后的都好可以忽略，但在emcscrpt3下的ie会报错。

 6.1.2、通过new创建对象
 new创建并初始化一个新对象
 6.1.3、原型
 所有通过对象直接亮创建的对象都具有同一个原型对象。
 Object.prototype没有原型对象，即原型对象没有原型对象。
 所有内置构造函数都具有一个继承自Object.prototype的原型


 6.1.4、Object.create()
 该方法第一个参数是这个对象的原型，第二个参数是可选的，用来对某个对对象的属性进行进一步描述。



 */

/**
 * 通过原型继承创建一个新对象
 * @param p
 * @returns {*}
 */
function inherit(p) {
    if (p == null) {
        throw TypeError();
    }
    //如果有create方法
    if (Object.create) {
        return Object.create(p);
    }
    //没有create方法
    var t = typeof p;
    if (t !== "object" && t !== "function")throw TypeError();
    function f() {
    }

    f.prototype = p;
    return new f();


}

/*
 6.2 属性的查询和设置
 通过方括号[] 和.来获取属性值
 只要方括号内运算结果为字符串就行了

 Object.keys(o);
 返回一个数组，这个数组有对象中可枚举的自由属性的名称组成。
 Object.getOwnPropertyNames(o)
 返回对象的所有自由属性的名称。而不仅仅是可枚举的属性。
 */



/*
 6.6 属性getter 和setter

 */
var o = {
    data: "",
    fun: function () {

    },

    //取出来
    get data() {
        return this.data;
    },
    //存入 设置
    set data(value) {
        this.data = value;
    }
};

/*
 6.7 属性的特性
 属性包含一些表示他们可写，可枚举，可配置的特性。
 调用Object.getOwnPropertyDescriptor();可以获得某一个对象特定的属性的描述
 */
console.log("获得对象o的fun的属性描述");
console.log(Object.getOwnPropertyDescriptor(o, 'fun'));

/*
 使用defineProperty给o对象创建一些属性
 */

Object.defineProperty(o, 'x', {
    value: 1,
    writable: true,  //可写
    enumerable: false,  //不可枚举
    configurable: true //可匹配值
});
o.x = 2;
console.log("给O的x属性赋值为2之后o.x等于" + o.x);

//将可写属性改为不可写
Object.defineProperty(o, 'x', {writable: false});
o.x = 3;
console.log('将可写属性改为不可写然后给其赋值为3之后o.x等于', o.x);

//给object定义一系列的属性
Object.defineProperties(o, {
    y: {value: 'y', writable: true, enumerable: true, configurable: true},
    z: {value: 'z', writable: true, enumerable: true, configurable: true}
});


/*
 继承o
 */
var sub = Object.create(o);
console.log('这是sub');
console.log(sub);

//获取sub的原型属性
console.log(Object.getPrototypeOf(sub) == o);

/*
 检测一个对象是否是另外一个对象的原型
 使用isPrototypeOf()
 */
//o是sub的原型
console.log(o.isPrototypeOf(sub));
//Object.prototype是o的原型
console.log(Object.prototype.isPrototypeOf(sub));


//获取对象的类属性信息
function classOf(o) {
    if (o === null) {
        return "null";
    }
    if (o === undefined) {
        return "undefined";
    }
    return Object.prototype.toString.call(o).slice(8, -1);
}

console.log(classOf(sub));
console.log(classOf(1));
console.log(classOf('d'));
console.log(classOf(false));


/**
 * 6.8.3 可扩展性
 * 对象的可扩展性用来表示是否可以给对象添加新属性
 */



