import Cooke from 'js-cookie';
import { LINKURL } from '../../../../api/apimethods'
let LeftMenu = ()=>{
    let username = Cooke.get('username')?Cooke.get('username'):null;
    let token = Cooke.get('token')?Cooke.get('token'):null;
    if(username&&token){
        $('.tjblog-user_login').hide();
    }else{
        $('.tjblog-user_logout').hide();
    }
    $('.tjblog-user_login').on('click',()=>{
        window.open(`${LINKURL}/user#/login`,'_self')
    })
    $('.tjblog-user_detail').on('click',()=>{
        window.open(`${LINKURL}/user`,'_self')
    })
}

export default LeftMenu