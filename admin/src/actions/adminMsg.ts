import { 
    getAminMsg, 
} from '../api/apilist'

const getAdminMsgAction = (adminData:any) => {
    return (dispatch:any) => {
        return getAminMsg(adminData)
    }
}

export default getAdminMsgAction