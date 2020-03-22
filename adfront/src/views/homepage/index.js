import {listMenuArray} from './data.js'
const index ={
    data() {
        return {
            adminusername:'',
            listMuneArray:listMenuArray,
            menuseleted_key:null,
            openKeys:0,
        }
    },
    watch: {
        $route(){
            this.getNavIndex(listMenuArray,this.$route.name)
        }
    },
    created(){
        this.adminusername = window.localStorage.getItem('tjblog_username');
        this.getNavIndex(listMenuArray,this.$route.name)
        //this.$router.options.routes.shift()
        console.log(this.listMenuArray)
    },
    methods: {
        /**
        * 菜单列表跳转
        * @var path 跳转路由的路径名
        */
        toPage(path){
            //console.log(path)
            //console.log(this.$route)
            if(path == ''){
                return;
            }
            if(path==this.$route.name){
                return
            }
            this.$router.push({name:path});
        },
        handleClick(e){
            console.log(e.key)
            this.menuseleted_key = e.key
            //this.openKeys = e.key
        },
        onOpenChange(e){
            this.openKeys = e[1]
            //console.log(e)
        },
        getNavIndex(routerarrary,routername){
            routerarrary.forEach((element,index) => {
                let pindex = null,cindex = null;
                if(element.pathname == routername){
                    pindex = index;
                    this.menuseleted_key = `${pindex}`
                    this.openKeys = pindex
                    return
                }else{
                    pindex = index;
                    element.childs.forEach((item,idx)=>{
                        if(item.pathname == routername){
                            cindex = idx;
                            this.menuseleted_key = `${pindex}-${cindex}`
                            this.openKeys = pindex
                            return
                        }
                    })
                }
            });
        }
    },
}

export default index;