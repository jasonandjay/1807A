/**
 * ts类型
 * 基础类型：number,boolean,string,undefine,any,never,void
 * 复杂类型：T,Array,Function,Enum,Truple
 *  */ 
let a = '';

let b: Array<number | string> = [];

let c: [number, string, Array<string>] = [100, '', ['']]; 

enum direction{
    'top' = 'n123',
    'bottom' = 'n456',
    'left' = 'n789',
    'right' = 'n1000'
}

const isEqual:(a:string,b:string)=>boolean = (a, b)=>{
    return a===b;
}

const isEqualCommon:<T>(a:T,b:T)=>boolean = (a, b)=>{
    return a===b;
}
// 当T为number时
isEqualCommon(1, 2);
isEqualCommon('abc', '123');
// isEqualCommon(['abc'], '123');

// 接口interface
interface IResponse<T = {}>{
    readonly code: number,
    data?: T,
    readonly msg: string,
    [key: string]: any  //索引类型
} 

// Partial把一个类型内部当所有属性转成可选
let d: Partial<IResponse> = {
    a: '',
}

// 类型别名
type gaomengmeng = string;
type noop = ()=>void;

let e:gaomengmeng = '';
let f:noop = function(){};

// 类型操作，联合类型(或)和交叉类型(且)
let g: string|number = '';

interface IError {
    error: string
}

let h: IResponse&IError = {
    code: 100,
    msg: '',
    error: ''
}

// 类型推断 as
let j = ({} as IResponse).code