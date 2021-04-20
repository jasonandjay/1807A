import { makeAutoObservable } from "mobx"

class Article{
    constructor(){
        makeAutoObservable(this);
    }
    articleRecommend = []

    async getArticleRecommend(){
        let result = await fetch('https://api.blog.wipi.tech/api/article/recommend').then(res=>res.json())
        this.articleRecommend = result.data;
    }
}

export default Article;