import styles from './index.less';
import { observer } from "mobx-react-lite"
import { useEffect } from 'react';
import useStore from '@/context/useStore'
import {timeAgo} from '@/utils/index'
 
function IndexPage() {
  let {article} = useStore();
  
  useEffect(() => {
    //  获取顶部推荐
    article.getArticleAllRecommend();
    //  获取文章列表
    article.getArticleList();
  }, [])

  console.log(article.articleList);
  return (
    <div>
      <div>{JSON.stringify(article.articleRecommend)}</div>
      <h1 className={styles.title}>Page index</h1>
      <ul>{
        article.articleList.map(item=>{
          return <li key={item.id}>
            <img src={item.cover} alt=""/>
            <div>
              <p>{item.title}</p>
              <p>{item.summary}</p>
              <p>
                <span>{item.tags.map(value=>value.label).join("、")}·</span>
                <span>{item.views}次阅读·</span>
                <span>{timeAgo(+ new Date(item.createAt))}前</span>
              </p>
            </div>
          </li>
        })
      }</ul>
    </div>
  );
}

export default observer(IndexPage)