import styles from './index.less';
import store from '@/store'
import { observer } from "mobx-react-lite"
import { useEffect } from 'react';

function IndexPage() {
  let {article} = store;
  
  useEffect(() => {
    setTimeout(()=>{
      article.getArticleRecommend();    
    }, 3000);
  }, [])

  return (
    <div>
      <div>{JSON.stringify(article.articleRecommend)}</div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}

export default observer(IndexPage)