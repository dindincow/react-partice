import React,{Component} from 'react';
import TodoListUI from './store/TodoListUI'
import store from './store';
import {getInputChangeAction,getAddItemAction,getItemDeleteAction} from './store/actionCreator'
//import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes'
class TodoList extends Component{
    constructor(props){
        super(props);     
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.storeHandleChange = this.storeHandleChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.onHandleItemDelete = this.onHandleItemDelete.bind(this)
        store.subscribe(this.storeHandleChange)
    }
    handleInputChange(e){
        // const action={
        //     type:CHANGE_INPUT_VALUE,
        //     value:e.target.value
        // }
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    storeHandleChange(){
        console.log("store change");
        this.setState(store.getState());
    }
    handleBtnClick(){
        // const action={
        //     type:ADD_TODO_ITEM
        // }
        const action = getAddItemAction();
        store.dispatch(action)
    }
    onHandleItemDelete(index){
        // const action = {
        //     type:DELETE_TODO_ITEM,
        //     index
        // }
        const action = getItemDeleteAction(index)
        store.dispatch(action)
    }
    render(){
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                list={this.state.list}
                onHandleItemDelete = {this.onHandleItemDelete}
            />
        )
    }
}
export default TodoList;