"use strict";
/**
 * ts类型
 * 基础类型：number,boolean,string,undefine,any,never,void
 * 复杂类型：T,Array,Function,Enum,Truple
 *  */
var a = '';
var b = [];
var c = [100, '', ['']];
var direction;
(function (direction) {
    direction["top"] = "n123";
    direction["bottom"] = "n456";
    direction["left"] = "n789";
    direction["right"] = "n1000";
})(direction || (direction = {}));
var isEqual = function (a, b) {
    return a === b;
};
var isEqualCommon = function (a, b) {
    return a === b;
};
// 当T为number时
isEqualCommon(1, 2);
isEqualCommon('abc', '123');
// Partial把一个类型内部当所有属性转成可选
var d = {
    a: '',
};
var e = '';
var f = function () { };
// 类型操作，联合类型(或)和交叉类型(且)
var g = '';
var h = {
    code: 100,
    msg: '',
    error: ''
};
// 类型推断 as
var j = {}.code;
