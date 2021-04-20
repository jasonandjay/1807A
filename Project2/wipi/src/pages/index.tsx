import styles from './index.less';
import { observer } from "mobx-react-lite"
import { useEffect } from 'react';
import useStore from '@/context/useStore'

function IndexPage() {
  let {article} = useStore();
  
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