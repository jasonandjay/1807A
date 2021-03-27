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

export interface ICarItem{
    car_id: string,
    car_name: string,
    trans_type: string,
    gear_num: string,
    exhaust: string,
    exhaust_str: string,
    horse_power: string,
    add_press_type: string,
    inhale_type: string,
    max_power: string,
    max_power_str: string,
    peak_power: string,
    peak_power_str: string,
    link: string,
    jtexts: string,
    link_from: string,
    market_attribute: {
        year: string,
        dealer_price: string,
        dealer_price_max: string,
        dealer_price_min: string,
        official_refer_price: string,
        sale_status: string,
        buy_car_detail_url: string
    }
}

export interface IDetialInfo{
    AliasName: string,
    BrandName: string,
    pic_group_count: number,
    market_attribute: {
        dealer_price: string,
        official_refer_price: string,
        [key:string]: any
    },
    list: ICarItem [],
    [key:string]: any
}