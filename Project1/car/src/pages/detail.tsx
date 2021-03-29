import React, { useEffect, useState } from 'react'
import { useDispatch, useLocation, useSelector } from 'umi'
import { IRootState } from '@/models';
import { DetailModelState } from '@/models/detail';
import CommonDialog from '@/components/commonDialog'
import { ICarItem, IListCarItem } from '@/utils/interface';
import styles from './detail.less'


const DetailPage: React.FC = () => {
    // 获取query string
    let { search } = useLocation();
    let queryArr = search.slice(1).split('&'),
        queryObj: { [key: string]: string } = {};
    queryArr.forEach(item => {
        let temp = item.split('=');
        queryObj[temp[0]] = temp[1];
    })

    const { info, years, curYearListCars, curYear, yearListCars } = useSelector<IRootState, DetailModelState>(state => state.detail);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'detail/getInfoAndList',
            payload: { SerialID: queryObj.SerialID }
        })
    }, [])

    function changeYear(year: string) {
        if (year !== curYear) {
            dispatch({
                type: 'detail/changeYearAndList',
                payload: { year }
            })
        }
    }

    const [showCarType, setShowCarType] = useState(false)
    const [showCarColor, setShowCarColor] = useState(false)
    const colors = [
        {
            "ColorId": "28245",
            "Name": "朱鹭白",
            "Value": "#ffffff",
            "OrderId": "1",
            "Type": "0"
        },
        {
            "ColorId": "28249",
            "Name": "探索蓝",
            "Value": "#2a3381",
            "OrderId": "1",
            "Type": "0"
        },
        {
            "ColorId": "28243",
            "Name": "风尚红",
            "Value": "#562833",
            "OrderId": "0",
            "Type": "0"
        },
        {
            "ColorId": "28246",
            "Name": "传奇黑",
            "Value": "#000000",
            "OrderId": "0",
            "Type": "0"
        },
        {
            "ColorId": "28247",
            "Name": "古铜棕",
            "Value": "#3c2717",
            "OrderId": "0",
            "Type": "0"
        }
    ]


    return <div>
        <p>{info.AliasName}</p>
        <div>{
            ['全部'].concat(years).map(item => {
                return <span onClick={() => changeYear(item)} key={item}>{item}</span>
            })}</div>
        <div>{curYearListCars.map(item => {
            return <div key={item.type}>
                <p>{item.type}</p>
                <ul>{
                    item.list.map(value => {
                        return <li key={value.car_id}>
                            <p>{`${value.market_attribute.year}款 ${value.car_name}`}</p>
                        </li>
                    })}</ul>
            </div>
        })}</div>

        <button onClick={() => setShowCarType(true)}>选择车型</button>

        <button onClick={() => setShowCarColor(true)}>选择颜色</button>
        {showCarType ? <CommonDialog
            allTitle='全部车款'
            years={years}
            yearsList={curYearListCars}
            renderItem={(item: IListCarItem) => {
                return <div>
                    <p>{item.type}</p>
                    <ul>{item.list.map(value => {
                        return <li onClick={() => { console.log('click item...', value); setShowCarType(false) }}>
                            <p>
                                <span>{`${value.market_attribute.year}款 ${value.car_name}`}</span>
                                <span>{value.market_attribute.dealer_price_min || '暂无'}</span>
                            </p>
                            <p>
                                <span>{`${value.horse_power}马力${value.gear_num}档${value.trans_type}`}</span>
                                <span>{`指导价 ${value.market_attribute.official_refer_price}`}</span>
                            </p>
                        </li>
                    })}</ul>
                </div>
            }}
            callback={console.log}
        /> : null}

        {showCarColor ? <CommonDialog
            allTitle='全部颜色'
            years={years}
            yearsList={colors}
            renderItem={(item: {Name: string, Value:string}) => {
                return <div className={styles.color}>
                    <span className={styles.colorIcon} style={{backgroundColor:item.Value}}></span>
                    <span>{item.Name}</span>
                </div>
            }}
            callback={console.log}
        /> : null}
    </div>
}

export default DetailPage;