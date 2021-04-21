import { getArticleAllRecommend, getArticleList, getArticleRecommend } from "@/services";
import { IArticleItem, IRecommendedItem } from "@/utils/interface";
import { makeAutoObservable } from "mobx"


class Article{
    constructor(){
        makeAutoObservable(this);
    }
    articleList: IArticleItem[] = []
    articleRecommend: IRecommendedItem[] = []
    page = 1;
    total = 0;

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
        if (this.total && this.page * 12 >= this.total){
            return;
        }
        let result = await getArticleList(this.page);
        if (result.statusCode === 200){
            this.articleList = result.data[0]
            this.total = result.data[1];
            this.page++;
        }
    }
}

export default Article;