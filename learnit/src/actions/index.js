import axios from 'axios';


export const signUp=(errors,username,email,password)=> async dispatch => { 

    if(errors.usernameError == '' && errors.emailError == '' && errors.passwordError == '' && errors.confirmPasswordError == ''){
    try{
        const res = await axios.post('http://localhost/Project9/learnit/backend/signUp.php?username='+username+'&email='+email+'&password='+password);
        dispatch( {
            type: 'signUp',
            payload: 'You have signed up successfully',
        })

    }
    catch(e){
        dispatch( {
            type: 'signUp-e',
            payload: console.log(e),
        })
    }}else{
        dispatch( {
            type: 'signUpError',
            payload: errors,
        })
    }
}

export const login=(email,password)=> async dispatch => {

    try{
        const res = await axios.get('http://localhost/Project9/learnit/backend/login.php?email='+email+'&password='+password);
        dispatch( {
            type: 'login',
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: 'login-e',
            payload: console.log(e),
        })
    }
}