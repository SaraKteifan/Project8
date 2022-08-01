export default function(state = {}, action){
    switch(action.type){
        case 'profile':
            sessionStorage.setItem("username", action.payload.username);
            sessionStorage.setItem("email", action.payload.email);
            sessionStorage.setItem("img", action.payload.img);
                return{
                    username: action.payload.username,
                    email: action.payload.email,
                    img: action.payload.img,
                }
        default: return state
    }

}