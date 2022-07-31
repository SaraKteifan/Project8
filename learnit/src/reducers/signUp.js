const signUpReducer=(state={errors:{},confirmMsg:''},action)=>{

    switch(action.type){
        
        case "signUp":
                return {...state,
                    confirmMsg: action.payload};
        case "signUpError":
                return {...state,
                    errors: action.payload}
        default:
            return state;
    }
    
    
    
}
export default signUpReducer;