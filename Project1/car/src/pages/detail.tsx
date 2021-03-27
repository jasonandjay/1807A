import React, { useEffect } from 'react'
import {useDispatch, useLocation, useSelector} from 'umi'
import { IRootState } from '@/models';
import { DetailModelState } from '@/models/detail';

const DetailPage: React.FC = props=>{
    // 获取query string
    let {search} = useLocation();
    let queryArr = search.slice(1).split('&'),
        queryObj:{[key:string]: string} = {};
    queryArr.forEach(item=>{
        let temp = item.split('=');
        queryObj[temp[0]] = temp[1];
    })

    const { info } = useSelector<IRootState, DetailModelState>(state => state.detail);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'detail/getInfoAndList',
            payload: {SerialID: queryObj.SerialID}
        })
    }, [])

    return <div>
        <p>{info.AliasName}</p>
    </div>
}

export default DetailPage;