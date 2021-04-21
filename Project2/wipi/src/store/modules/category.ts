import { getCategoryList } from "@/services";
import { makeAutoObservable } from "mobx"

class Category{
    constructor(){
        makeAutoObservable(this);
    }
    tagList = []

    // 获取标签列表
    async getCategoryList(){
        let result = await getCategoryList();
        debugger;
    }
}

export default Category;