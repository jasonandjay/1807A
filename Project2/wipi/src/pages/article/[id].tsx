import useStore from "@/context/useStore";
import { useEffect } from "react";
import { IRouteComponentProps } from "umi"
import {observer} from 'mobx-react-lite'
import Highlight from '@/components/highlight'

const ArticleDetail: React.FC<IRouteComponentProps<{id:string}>> = ({location, match})=>{
    const id = match.params.id;
    const {article} = useStore();

    useEffect(() => {
        article.getArticleDetail(id);
    }, [])
    // return <div>{JSON.stringify(article.articleDetail)}</div>  

    return <div>
        <Highlight str={article.articleDetail.html}/>
    </div>
}

export default observer(ArticleDetail);