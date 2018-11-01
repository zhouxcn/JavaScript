/*
 * @Author: zhouxc 
 * @Date: 2018-11-01 16:38:28 
 * @Last Modified by: zhouxc
 * @Last Modified time: 2018-11-01 16:46:14
 * @Description: 
 * 1.判断字符串是否全部由字母组成
 * 2.判断字符串是否全部为大写或者小写
 * 3.判断字符串首字母是否为大写或者小写
 * @Tips:
 * 1.使用''.charCodeAt() => number;
 *   大写字母ASCII码表：A-Z对应65-90
 *   小写字母ASCII码表：a-z对应97-122
 * 2.使用String.fromCharCode(number) => string;
 *   获取数值对应的字符
 */

console.log('A'.charCodeAt());  // 65
console.log('Z'.charCodeAt());  // 90
console.log('a'.charCodeAt());  // 97
console.log('z'.charCodeAt());  // 122

console.log(String.fromCharCode(65));   // A
console.log(String.fromCharCode(90));   // Z
console.log(String.fromCharCode(97));   // a
console.log(String.fromCharCode(122));  // z