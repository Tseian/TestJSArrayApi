/**
 * Created by Tse Ian on 10/01/2017.
 * js 数组api分享
 * MQ-TECH
 */
var testArray = [2, 1, 5, 3, 4, {a: 'a', b: 'b', c: 'c'}];

/**
 * 稀疏数组
 * 当数组的元素个数小于数组的长度(length的值)的时候就是稀疏数组
 */
function traningSporadic() {
    testArray.length = 3;
    console.log('元素的个数是' + testArray.length);
    testArray.forEach(function (x) {
        console.log('第' + testArray.indexOf(x) + '个元素是' + x);
    });
}
traningSporadic();

/**
 * 遍历
 * 常规for循环
 * for/in 循环
 * forEach循环
 */
function trainingTraverse() {

    for (var i = 0; i < testArray.length; i++) {
        console.log(i in testArray)
    }

    /**
     * for/in 是不安顺序的
     * for 常规循环是按顺序大小进行遍历的
     * forEach 是按顺序进行遍历的
     * 所以想让自己的代码看上去更加简洁的话   用forEach而不是用 for/in
     */

    testArray.forEach(function (x) {  //x 代表按索引顺序获取的数组元素
        console.log('第' + testArray.indexOf(x) + '个元素是' + x);
    })

}
trainingTraverse();


/**
 * join 这个用太多了  不废话
 */

/**
 * 反转  将所有用的元素重新排序
 */
function trainingReverse() {
    console.log('before reverse');
    console.log(testArray.join(','));
    console.log('after reverse');
    console.log(testArray.reverse().join(','));
}

trainingReverse();


/**
 * 排序  默认按字母顺序表排序
 * 强大的一个方法  可以给sort一个参数  这个参数是一个函数
 * 可以按照自己的排序方式来确定整个数组的排序
 */
function trainingSort(type) {
    var array = [1, 3, 6, 4, 5, 2];
    console.log('before sort');
    console.log(array.join(','));
    console.log('after ' + type + ' sort');
    switch (type) {
        case 'default':
            console.log(array.sort().join(','));
            break;
        case 'aAfterB':  //让第一个参数排在前 返回小于0  让第一个参数排在后 则返回大于0  冒泡排序？
            console.log(array.sort(function (a, b) {
                return a - b;
            }).join(','));
            break;

        case 'complex':
            console.log(array.sort(function (a, b) {
                if (a % 2 == 1) {  //a整除2 还余下1的则排在后面
                    return 1;
                }
            }).join(','));
            break;


    }
}

trainingSort('default');
trainingSort('aAfterB');
trainingSort('complex');

/**
 * concat 创建并返回一个数组，其中元素包括调用concat的数组的元素和concat的每一个参数。
 * 如果参数是数组，创建的新数组也包含该参数的元素
 */
var trainingConcat = function () {
    console.log('after concat 6');
    console.log(testArray.concat(6).join(','));

    console.log('after contact  array');
    console.log(testArray.concat([7, 8, {d: 'd', e: 'e'}], [9, [10, 11]]).sort().join(','));

};

trainingConcat();

/**
 * slice 返回数组的一个片段或者是数组，返回第一个参数所指定的元素和所有到但不包含第二个参数制定的位置之间的所有元素。
 * 参数是 -1表示最后一个元素  -2 表示倒数第二个参数
 * 只有一个参数 则返回该参数位置到最后一个位置的所有元素
 */

var trainngSlice = function () {
    var a = [1, 2, 3, 4, 5];
    console.log('a.slice(0,2)');
    console.log(a.slice(0, 2).join(','));

    console.log('a.slice(2)');
    console.log(a.slice(2).join(','));

    //第一包括第一 到最后一个 不包括最后一个
    console.log('a.slice(1,-1)');
    console.log(a.slice(1, -1).join(','));

    //倒数第三个到倒数第二个 不包括倒数第二个
    console.log('a.slice(-3,-2)');
    console.log(a.slice(-3, -2).join(','));
};

trainngSlice();

/**
 * pop 和push
 * 这个就是将数组当stack来用,pop将数组的最后一个元素删除。同时把数组的长度减去1
 * push在数组的末尾添加一个元素，同时数组的长度加上1
 */
var trainingPopAndPush = function () {
    console.log('before');
    console.log(testArray.join(','));


    testArray.pop();
    console.log('after pop');
    console.log(testArray.join(',') + 'length=' + testArray.length);


    testArray.push('a');
    console.log('after pop and push');
    console.log(testArray.join(',') + 'length=' + testArray.length);
};

trainingPopAndPush();


/**
 * unshift 在数组头部添加一个元素
 * shift 在数组头部删除一个元素
 * 两个方法都会修改数组的长度
 */
var trainingShiftAndShift = function () {
    testArray.unshift(0);
    console.log(testArray.join());

    testArray.shift();
    console.log(testArray.join());
};

trainingShiftAndShift();

var trainingToStringAndToLocaleString = function () {
    var array = [1, 2, 3, 4, [5, 6, 7, 8]];
    console.log(array.toString());
    console.log(array.toLocaleString());
    // 相当于调用了join方法，但是没有传入参数
};

trainingToStringAndToLocaleString();

var trainingMap = function () {
    console.log(testArray.map(function (x) {
        return x + x;
    }).join())
};

trainingMap();

/**
 * filter 过滤元素
 * filter 的参数可以是一个函数，
 * 函数返回值是true则将该函数的参数(即是该数组的其中一个元素) 保存到新创建的数组中。
 */
var trainingFilter = function () {

    var array = [1, 2, 3, , , null, 33];
    console.log(array.join());
    //将数组中的undefine  null去除
    console.log(array.filter(function (x) {
        return x != undefined && x != null;
    }).join(','));

    //找到所有是数字的元素
    console.log(array.filter(function (x) {
        return typeof x == 'number';
    }).join(','));

};
// trainingFilter();


/**
 * every 针对数组的所有元素
 */
var trainingEvery = function () {
    console.log(testArray.every(function (x) {
        return typeof x == 'number'
    }));
};

trainingEvery();

/**
 * reduce 从左到右进行整合数组元素  也就是从最小 索引开始运算
 * 两个参数
 * 第一个参数是用来整合的函数，以下称为整合函数
 * 第二个参数是整合函数 第一次调用时 所需要使用的一个参数(第一个参数)，第二个参数为数组的第一个元素
 * 第二次调用整合函数的时候使用，第一个参数为第一次返回的结果，第二个参数为数组第二个元素。
 * 依次进行上面两个步骤，最终得到一个值。
 *
 * reduceRight 与reduce基本一样 但是执行整合函数的顺序是从又到左
 */
var trainingReduceAndReduceRight = function () {
    var array = testArray.filter(function (x) {
        return typeof x == 'number';
    });
    console.log('sum');
    //求和
    console.log(array.reduce(function (x, y) {
        return x + y;
    }, 0));

    console.log('product');
    //求所有元素相乘
    console.log(array.reduce(function (x, y) {
        return x * y;
    }, 1));
    console.log('max');
    //max
    console.log(array.reduce(function (x, y) {
        return (x > y) ? x : y;
    }));
    console.log('min');
    //min
    console.log(array.reduce(function (x, y) {
        return (x > y) ? y : x;
    }));
};

trainingReduceAndReduceRight();

/**
 * indexOf
 * 从左到右进行搜索，如果存在则返回 元素所在索引  否则返回-1
 * lastIndexOf
 * 与indexof 一样不过方向相反,从索引最大开始搜索，
 */
var trainingIndexOf = function () {
    console.log(testArray.indexOf(5))
};

trainingIndexOf();

var trainingLastIndexOf = function () {
    console.log(testArray.lastIndexOf(5))
};

trainingLastIndexOf();





