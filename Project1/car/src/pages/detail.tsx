import React, { useEffect } from 'react'
import { useDispatch, useLocation, useSelector } from 'umi'
import { IRootState } from '@/models';
import { DetailModelState } from '@/models/detail';

const DetailPage: React.FC = props => {
    // 获取query string
    let { search } = useLocation();
    let queryArr = search.slice(1).split('&'),
        queryObj: { [key: string]: string } = {};
    queryArr.forEach(item => {
        let temp = item.split('=');
        queryObj[temp[0]] = temp[1];
    })

    const { info, years, curYearListCars } = useSelector<IRootState, DetailModelState>(state => state.detail);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'detail/getInfoAndList',
            payload: { SerialID: queryObj.SerialID }
        })
    }, [])

    return <div>
        <p>{info.AliasName}</p>
        <div>{
            ['全部'].concat(years).map(item => {
                return <span key={item}>{item}</span>
            })}</div>
            <div>{curYearListCars.map(item=>{
                return <div>
                    <p>{item.type}</p>
                    <ul>{
                        item.list.map(value=>{
                            return <li>
                                <p>{`${value.market_attribute.year}款 ${value.car_name}`}</p>
                            </li>
                        })}</ul>
                    </div>
            })}</div>
    </div>
}

export default DetailPage;