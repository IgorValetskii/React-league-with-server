import {ACTION_GET_DEFAULT_INFO, ACTION_GET_LIST_USERS, ACTION_UPDATE_USER} from "../userConstants/userConstants";
import axios from "axios";


export const getAsyncUsersList = () => (dispatch: any) => {
        return axios.get(`http://localhost:3010/users`)
            .then(res => {
                dispatch({
                    type: ACTION_GET_LIST_USERS,
                    payload: res.data
                })
                // console.log(res.data.forEach(i =>))
                // res.data.forEach((i:any,arr:any) => console.log(i.firstName)  )
            })
};

export const getAsyncUserInfo = (ID:any) => (dispatch: any) => {
        return axios.get(`http://localhost:3010/users/${ID}`)
            .then(res => {
                dispatch({
                    type: ACTION_GET_DEFAULT_INFO,
                    payload: res.data
                })
            })
};

export const updateAsyncUserInfo = (ID:any) => (dispatch: any) => {
    return axios.get(`http://localhost:3010/users/${ID}`)
        .then(res => {
            dispatch({
                type: ACTION_GET_DEFAULT_INFO,
                payload: res.data
            })
        })
};


