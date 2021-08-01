import React,{Component} from "react"
import 'antd/dist/antd.css'; 
import { Input,Button,List} from 'antd';

const TodoListUI = (props)=>{
    return(
        <div style={{margin:'30px'}}>
            <div style={{marginBottom:'20px'}}>
                <Input 
                    value={props.inputValue} 
                    placeholder="請輸入TEXT" 
                    style={{width:'300px',marginRight:'10px'}}
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List
                style={{width:'500px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (
                    <List.Item onClick={(index)=>{props.onHandleItemDelete(index)}}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
}



export default TodoListUI;