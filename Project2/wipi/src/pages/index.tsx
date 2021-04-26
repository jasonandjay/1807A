import styles from './index.less';
import { observer } from "mobx-react-lite"
import { useEffect } from 'react';
import useStore from '@/context/useStore'
import { timeAgo } from '@/utils/index'
import DobuleColumn from '@/layouts/dobuleColumn'
import { useHistory } from 'umi'
import InfiniteScroll from 'react-infinite-scroller';

function IndexPage() {
  let { article } = useStore();
  const history = useHistory();

  useEffect(() => {
    //  获取顶部推荐
    article.getArticleAllRecommend();
    //  获取文章列表
    article.getArticleList();
  }, [])

  function loadFunc() {
    article.getArticleList();
  }

  console.log(article.articleList);
  const left = (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadFunc}
      hasMore={(article.page-1) * 12 < article.total}
      loader={<div className="loader" key={0}>Loading ...</div>}
    >{
        article.articleList.map(item => {
          return <li key={item.id} onClick={() => history.push(`/article/${item.id}`)}>
            <img src={item.cover} alt="" />
            <div>
              <p>{item.title}</p>
              <p>{item.summary}</p>
              <p>
                <span>{item.tags.map(value => value.label).join("、")}·</span>
                <span>{item.views}次阅读·</span>
                <span>{timeAgo(+ new Date(item.createAt))}前</span>
              </p>
            </div>
          </li>
        })
      }</InfiniteScroll>)

  return (
    <DobuleColumn
      left={left}
      right={<div />}
    />)
}

export default observer(IndexPage)