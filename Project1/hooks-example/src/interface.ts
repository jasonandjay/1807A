export interface IResponse {
    code: number,
    data: IItem[],
    msg: string
}
export interface IItem {
    id: string,
    name: string,
    num: number,
    price: number,
    checked: boolean
}
