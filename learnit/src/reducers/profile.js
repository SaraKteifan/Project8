export default function(state = {}, action){
    switch(action.type){

        case 'profile':
                return{
                    username: action.payload.username,
                    email: action.payload.username,
                    img: action.payload.img,
                }
            
        default: return state
    }

}