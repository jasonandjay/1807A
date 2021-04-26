import { getArticleAllRecommend, getArticleDetail, getArticleList, getArticleRecommend } from "@/services";
import { IArticleItem, IRecommendedItem, IArticleDetail } from "@/utils/interface";
import { makeAutoObservable } from "mobx"


class Article{
    constructor(){
        makeAutoObservable(this);
    }
    articleList: IArticleItem[] = []
    articleRecommend: IRecommendedItem[] = []
    articleDetail: IArticleDetail = {} as IArticleDetail
    page = 1;
    total = 0;
    isFetching = false;

    // 获取文章详情
    async getArticleDetail(id:string){
        let result = await getArticleDetail(id);
        if (result.statusCode === 200){
            this.articleDetail = result.data;
        }
    }

    //  获取侧边栏推荐
    async getArticleRecommend(){
        // let result = await fetch('https://api.blog.wipi.tech/api/article/recommend').then(res=>res.json())
        let result = await getArticleRecommend();
        if (result.statusCode === 200){
            this.articleRecommend = result.data
        }
    }
    // 获取顶部推荐
    async getArticleAllRecommend(){
        let result = await getArticleAllRecommend();
    }

    // 获取文章列表
    async getArticleList(){
        if (this.isFetching){
            return;
        }
        if (this.total && (this.page-1) * 12 >= this.total){
            return;
        }
        this.isFetching = true
        let result = await getArticleList(this.page);
        if (result.statusCode === 200){
            if (this.page === 1){
                this.articleList = result.data[0]
            }else{
                this.articleList = [...this.articleList, ...result.data[0]]
            }
            this.total = result.data[1];
            this.page++;
            this.isFetching = false;
        }
    }
}

export default Article;