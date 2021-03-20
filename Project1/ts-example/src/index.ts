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
