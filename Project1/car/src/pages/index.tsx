import React, { useEffect, useState } from 'react';
// import...from启用css module
import styles from './index.less';
// import './index.less';
// 获取redux中的状态和方法
import { useSelector, useDispatch } from 'umi';
import LetterList from '@/components/letterList'
import { IBrandItem } from '@/utils/interface';

const IndexPage: React.FC = () => {
  const { brandList, makeList, letterList } = useSelector(state => state.home);
  const dispatch = useDispatch();
  // 储存当前选中的品牌
  let [curMasterID, setCurMasterID] = useState<string>('');
  // 存储当前滑动品牌字母
  let [curLetter, setCurLetter] = useState<string>('');

  useEffect(() => {
    dispatch({
      type: 'home/getMasterBrand'
    })
  }, [])

  function brandListClick(e: React.MouseEvent<HTMLLIElement>, MasterID: string) {
    if (MasterID !== curMasterID) {
      setCurMasterID(MasterID);
    }
  }

  useEffect(() => {
    if (curMasterID) {
      dispatch({
        type: 'home/getMakeList',
        payload: { MasterID: curMasterID }
      })
    }
  }, [curMasterID])

  // 滑动品牌导航列表
  function moveLetter(letter: string) {
    setCurLetter(letter);
  }

  useEffect(() => {

  }, [curLetter])

  if (!brandList.length){
    return null;
  }
  console.log(brandList);
  return <div className={styles.container}>
    <div className={styles.brandContainer}>{
      brandList.map(value => {
        return <ul>
          <p>{Object.keys(value)[0]}</p>
          {
            Object.values(value)[0].map((item:any) => {
              return <p>{JSON.stringify(item)}</p>
            return <li id={item.Spelling[0]} key={item.MasterID} className="li" onClick={e => brandListClick(e, item.MasterID)}>
                <img className={styles.avatar} src={item.CoverPhoto} alt="" />
                <span>{item.Name}</span>
              </li>
            })
          }
        </ul>
      })
    }</div>
    <LetterList list={letterList} moveLetter={moveLetter}></LetterList>
    {curLetter ? <div className={styles.letter}>{curLetter}</div> : null}
  </div>
};

export default IndexPage;
