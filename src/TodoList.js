import React,{Component} from 'react';
import 'antd/dist/antd.css'; 
import { Input,Button,List} from 'antd';
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
            <div style={{margin:'30px'}}>
                <div style={{marginBottom:'20px'}}>
                    <Input 
                        value={this.state.inputValue} 
                        placeholder="請輸入TEXT" 
                        style={{width:'300px',marginRight:'10px'}}
                        onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                </div>
                <List
                    style={{width:'500px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (
                        <List.Item onClick={this.onHandleItemDelete.bind(this,index)}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
export default TodoList;