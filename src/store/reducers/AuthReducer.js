const initialState = {
    loading:true,
    authError: null,
    user:null
};
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('Login success ',action.err);
            return {
                ...state,
                authError: 'Login Failed',
                loading: false
            };
        case 'LOGIN_SUCCESS':
            console.log('Login Success');
            return {
                ...state,
                authError: null,
                loading: false
            };
        case 'SIGNOUT_SUCCESS':
            console.log('Sign out Success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('SignUp Success');
            return {
                ...state,
                loading: false,
                authError: null
            };
        case 'SIGNUP_ERROR':
            console.log("SignUp Error");
            return {
                ...state,
                loading: false,
                authError: action.err.message
            };
        default:
            return state
    }
};
export default AuthReducer;
