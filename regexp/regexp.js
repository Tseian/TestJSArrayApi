/**
 * Created by tseian on 11/02/2017.
 */
// var pattern = /s$/;
// console.log(pattern.exec("sdfsdasds"));

/*
 10.1.1 直接量字符创
 字母和数字字符  匹配自身
 \o null字符串
 \t 制表符
 \n 换行符
 \v 垂直制表符
 \f 换页符
 。。。。

 10.1.2 字符类
 [...] 方括号内任意字符
 [...] 不在方括号内任意字符
 .  除换行符和其他unicode行终止符之外的任意字符
 \w 任何ASCII字符组成的单词 等价于[0-9a-zA-Z]
 \W 任何非ASCII字符组成的单词 等价于[^0-9a-zA-Z]
 \s 任何unicode空白符的字符
 \S 任何非unicode空白符的字符
 \d 任何ascii数字等价于[0-9]
 \D 任何非ascii数字等价于[^0-9]

 10.1.3 重复匹配

 {n,m}重复前一项至少n次，但不能超过m次。
 {n,}匹配前一项n次，或者更多次
 {n} 匹配前一项n次
 ？ 匹配前一项0或者1次 {0，1}
 + 匹配前一项1或者多次 {1，}
 * 匹配前一项0或者多次 {0，}
 非贪婪匹配，以上都是贪婪匹配。
 非贪婪匹配则在待匹配的字符后跟随一个？就可以了。表示只要匹配了一次就可以了。
 /a+?b/ 匹配aaab会进行三次匹配，直到最后匹配ab匹配成功。

 |符号的作用   /ab|cd|ef/ 可以匹配 ab 也可以匹配 ef 和cd
 使用或这种方式当前面选项匹配到了结果就不会继续往下匹配，及时后面选项的匹配结更加合理。
 /a|ab/ 匹配ab，a和a匹配了就不会继续用ab匹配ab了。

 （）多种作用
 1、将一个单独的项组合成字表达式
 /java(script)？ 可以匹配java也可以匹配javascript
 2、在完整的模式中定义子模式
 当一个正则表达式成功地和目标字符串匹配，可以从目标中抽出和圆括号中的子模式相匹配的部分。
 (/[a-z]+(\d+)/) 这样定义可以抽出字符中的数字。
 而[a-z]+\d+/则做不到
 3、允许同一正则表达式的后部引用前面的字表达式
 (\2)表示引用第二个表达式



 */


/**
 * 匹配账号是否正确
 * 字母开头   接着7到11位字符串（可以有下划线）
 */
//
// var reg = new RegExp("^[a-zA-Z][a-zA-Z0-9_]{7,11}$");
// if (reg.test("aaa224323")) {
// console.log(reg.test("aaa224323"));
// } else {
//
// }

// var pattern = /box/ig;//全局搜索
// var str = 'This is a Box!,That is a Box too';
// // alert(str.match(pattern)); //匹配到两个 Box,Box
// console.log(str.match(pattern));//获取数组的长度
//


//将 <,>,&," 三种字符替换掉
// function escapHtml(str) {
//     return str.replace(/[<>&"]/g, function (match) {
//         switch (match) {
//             case "<":
//                 return "&lt";
//                 break;
//             case ">":
//                 return "&gt";
//                 break;
//             case "&":
//                 return "&lt";
//                 break;
//             case "\"":
//                 return "&quot;";
//         }
//     });
// }


// console.log(escapHtml("<html>'asdfasd<&&>'</html>"));


// 将字符串前后的空白字符串去掉
// function trimStr(str) {
//     return str.replace(/^\s+/, "").replace(/\s+&/);
// }
// console.log(trimStr(" this  is my home   "));

/**
 * 如何获取一个字符串中的数字字符，并按数组形式输出，如
 *  dgfhfgh254bhku289fgdhdy675gfh
 *  输出[254,289,675]
 */

/**
 * 字符串的正则相关的方法
 * 1、search() 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。
 * 2、replace() 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
 */


/**
 * 找到TseIan的位置
 */
// var str = "adddTseIan";
// console.log(str.search(/TseIan/));  //4

/**
 * replace() 将数字替换
 */
// var str1 = "aaaa3445www456";
//
// console.log(str1.replace(/\d+/g, "aaaa"));

/**
 * 正则表达式的一些方法
 * 1、test() 方法用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false
 * 2、exec() 方法用于检索字符串中的正则表达式的匹配。该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
 */

//
// var str2 = "fasfas222afasdu33asd8";
// var reg1 = /\d+/g;
// console.log(reg1.test(str2));
// var str3 ="dadfasdfas d33faf8asd";
// var reg2 =/\s+/g;

// var str4 = "abbccd234333Add3456d2dabk333";
// var reg3 = /[ab]/g;
// console.log(reg3.exec(str4));

// var myRe = /d(b+)d/g;
// var myArray = myRe.exec("cdbbbdbsbdbbbbbbbbdz");
//
// console.log(myArray);
/**
 * Autocomplete! Yay!(字符串自动补全)
 题目描述: The autocomplete function will take in an input string and
 a dictionary array and return the values from the dictionary that start with the input string.
 If there are more than 5 matches, restrict your output to the first 5 results.
 If there are no matches, return an empty array.
 （autocomplete 函数输入一个字符串和字典数组，返回开头是该字符串的值，返回值的个数最多限制为5个，无匹配则返回空数组）
 对于输入字符串的要求：Any input that is NOT a letter should be treated as if it is not there. For example,
 an input of “$%^” should be treated as “” and an input of “ab*&1cd” should be treated as “abcd”.
 */


var autocomplete0 = function (str, array) {
    var reg = new RegExp(/[^a-zA-Z]+/g);
    str = str.replace(reg, "");
    var reg2 = new RegExp('^' + str, "i");
    var tem = array.filter(function (val) {
        return reg2.test(val);
    });
    return tem.length > 5 ? tem.slice(0, 5) : tem;
};


function autocomplete1(input, dictionary) {
    return dictionary.filter(function (val) {
        return (new RegExp('^' + input.replace(/[^a-z]/gi, ''), 'i')).test(val);
    }).slice(0, 5);
}

console.log(autocomplete0('a###ir', ['airplane', 'airball', 'dddd']));
console.log(autocomplete1('a###ir', ['airplane', 'airball', 'dddd']));