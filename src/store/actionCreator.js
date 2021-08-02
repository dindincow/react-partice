import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes'
import axios from 'axios';
export const getInputChangeAction = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = ()=>({
    type:ADD_TODO_ITEM,
})

export const getItemDeleteAction = (index)=>({
    type:DELETE_TODO_ITEM,
    index
})

export const getInitListAction = (data)=>({
    type:INIT_LIST_ACTION,
    data
})
// 使用 redux trunk 可返回函數，不然只能返回物件
export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get('https://www.fastmock.site/mock/0079af002ef929f39ce5a5a6bf2e341c/beeshop/api/test')
        .then(function (response) {
            const data = response.data;
            const action = getInitListAction(data);
            dispatch(action)
        })
    }
}

