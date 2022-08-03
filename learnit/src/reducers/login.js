export default function(state = {error:'',userId:''}, action){
    switch(action.type){

        case 'login':
            if(action.payload != ''){
                return{...state,
                    userId:action.payload,}
            }else{
                return{
                    ...state,
                    error:'Email or Password is invalid',}
            }
        case 'logout':
            sessionStorage.clear();
        default: return state
    }

}