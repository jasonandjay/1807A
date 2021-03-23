import React, { useEffect, useState } from 'react';
// import...from启用css module
import styles from './index.less';
// import './index.less';

import { request } from 'umi';
import {IBrandItem} from '@/utils/interface'

const IndexPage: React.FC = () => {
  let [lsit, setList] = useState<IBrandItem []>([]);

  useEffect(() => {
    request('/v2-car-getMasterBrandList.html').then(res => {
      console.log('res...', res);
      if (res.code === 1){
        setList(res.data);
      }
    })
  }, [])

  return <div>{
    lsit.map(item=>{
      return <li key={item.MasterID} className="li">
        <img className={styles.avatar} src={item.CoverPhoto} alt=""/>
        <span>{item.Name}</span>
      </li>
    })
  }</div>
};

export default IndexPage;
