export interface IBrandItem{
    CoverPhoto: string,
    MasterID: string,
    Name: string,
    Spelling: string,
    newTags: string [],
    tagurl: string
}
export interface IMakeItem{
    GroupId: string,
    GroupName: string,
    GroupList: IGroupItem[]
}
export interface IGroupItem{
    SerialID: string,
    AliasName: string,
    CoverPhoto: string,
    Picture: string,
    DealerPrice: string,
    Spelling: string,
    FullSpelling: string,
    Level: string,
    orderCount: number,
    tags: string [],
    tagurl: string,
    // [key:string]: string|number|string[]
}