export default function(state = {error:'',userId:''}, action){
    switch(action.type){

        case 'login':
            if(action.payload !== ''){
                return{...state,
                    userId:action.payload,}
            }else{
                return{
                    ...state,
                    error:'email or password is invalid',}
            }
        default: return state
    }

}