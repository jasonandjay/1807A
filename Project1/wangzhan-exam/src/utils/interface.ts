import React from "react";

export interface ILoginItem {
    user_name: string,
    user_pwd: string,
    remember: boolean
}

export interface IMenuItem {
    name: string,
    meta: {
        icon: any,
        title: string,
        show: boolean
    },
    children?: Array<{
        path: string,
        name: string,
        meta: {
            title: string,
            show: boolean,
            view_id: string
        }
    }>
}

export interface IUserInfo {
    avatar: string,
    iat: number,
    identity_id: string,
    identity_text: string,
    signTime: number
    user_id: string
    user_name: string
}