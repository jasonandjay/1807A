export interface IArticleItem {
  id: string;
  title: string;
  cover: string;
  summary: string;
  toc: string;
  status: string;
  views: number;
  likes: number;
  isRecommended: boolean;
  needPassword: boolean;
  isCommentable: boolean;
  publishAt: string;
  createAt: string;
  updateAt: string;
  tags: ITagItem[];
  category: ITagItem;
}

export interface ITagItem {
  id: string;
  label: string;
  value: string;
  createAt: string;
  updateAt: string;
}

export interface IRecommendedItem {
  id: string;
  title: string;
  cover: string;
  summary: string;
  content: string;
  html: string;
  toc: string;
  status: string;
  views: number;
  likes: number;
  isRecommended: boolean;
  needPassword: boolean;
  isCommentable: boolean;
  publishAt: string;
  createAt: string;
  updateAt: string;
}