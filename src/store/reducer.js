const defaultState={
    inputValue:'',
    list:[]
}

export default (state = defaultState,action)=>{

    if(action.type=="change_input_value"){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if(action.type=="add_item"){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(state.inputValue);
        newState.inputValue='';
        return newState;
    }

    if(action.type=="delete_item"){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1)
       
        return newState;
    }


    return state;


   

}