import React, {Component} from 'react'
import store from "./store";
import { connect } from 'react-redux';

const TodoList = (props)=>{
    const {inputValue,changeInputValue,handleClick,list,handleDelete} = props;
    return(
        <div>
            <div>
                <input type="text" value={inputValue} onChange={changeInputValue}/>
                <button onClick={handleClick}>增加</button>
            </div>
            <div>
                <ul>
                    {
                        list.map((item,index)=>{
                            return <li onClick={()=>{handleDelete(index)}} key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    ) 
}




// class TodoList extends Component{
//     // constructor(props){
//     //     super(props);
//     //     this.state = store.getState();
//     // }
//     render(){
//         const {inputValue,changeInputValue,handleClick,list,handleDelete} = this.props;
//         return(
//             <div>
//                 <div>
//                     <input type="text" value={inputValue} onChange={changeInputValue}/>
//                     <button onClick={handleClick}>增加</button>
//                 </div>
//                 <div>
//                     <ul>
//                         {
//                             list.map((item,index)=>{
//                                 return <li onClick={()=>{handleDelete(index)}} key={index}>{item}</li>
//                             })
//                         }
//                     </ul>
//                 </div>
//             </div>
//         ) 
//     }
    
// }

const  mapStateToProps = (state) => {
    console.log(state)
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}


const mapDispatchToProps = (dispatch)=>{
    return{
        changeInputValue(e){
            const action = {
                type:"change_input_value",
                value:e.target.value
            }
            dispatch(action)
        },
        handleClick(){
            const action = {
                type:"add_item", 
            }
            dispatch(action)
        },
        handleDelete(index){
            console.log(index)
            const action = {
                type:"delete_item",
                index 
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
