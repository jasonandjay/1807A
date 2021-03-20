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
