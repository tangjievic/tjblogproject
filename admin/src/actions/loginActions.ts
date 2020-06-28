import { adminLogin, getAminMsg } from '../api/apilist'
const loginAction = () => {
    return (dispatch:any)=>{
        return {
            adminLogin,
            dispatch
        }
    }
}

export default loginAction