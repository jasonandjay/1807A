import { getTagList } from "@/services";
import { makeAutoObservable } from "mobx"

class Tag{
    constructor(){
        makeAutoObservable(this);
    }
    tagList = []

    // 获取标签列表
    async getTagList(){
        let result = await getTagList();
        debugger;
    }
}

export default Tag;