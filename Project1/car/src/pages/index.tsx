import React, { useEffect, useRef, useState } from 'react';
// import...from启用css module
import styles from './index.less';
// import './index.less';
// 获取redux中的状态和方法
import { useSelector, useDispatch } from 'umi';
import LetterList from '@/components/letterList'

const IndexPage: React.FC = () => {
  const { brandList, makeList, letterList } = useSelector(state => state.home);
  const dispatch = useDispatch();
  // 储存当前选中的品牌
  let [curMasterID, setCurMasterID] = useState<string>('');
  // 存储当前滑动品牌字母
  let [curLetter, setCurLetter] = useState<string>('');
  // 滚动容器
  let container = useRef(null);

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
    if (curLetter) {
      let target = (container.current! as HTMLElement).querySelector(`#${curLetter}`);
      target?.scrollIntoView();
      // debugger
    }
  }, [curLetter])

  if (!brandList.length) {
    return null;
  }
  console.log(brandList);
  return <div className={styles.container} ref={container}>
    <div className={styles.brandContainer}>{
      brandList.map(value => {
        return <div id={value.letter} key={value.letter}>
          <p>{value.letter}</p>
          <ul>{value.list.map((item: any) => {
            return <li key={item.Spelling} id={item.Spelling[0]} className="li" onClick={e => brandListClick(e, item.MasterID)}>
              <img className={styles.avatar} src={item.CoverPhoto} alt="" />
              <span>{item.Name}</span>
            </li>
          })
          }</ul>
        </div>
      })
    }</div>
    <LetterList list={letterList} moveLetter={moveLetter}></LetterList>
    {curLetter ? <div className={styles.letter}>{curLetter}</div> : null}
  </div>
};

export default IndexPage;
