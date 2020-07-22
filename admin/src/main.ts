import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button,
  Input,
  Form, 
  Menu,
  Layout,
  Icon,
  message,
  Tabs,
  Select,
  Modal,
  Breadcrumb,
  Table,
  Alert,
  Popconfirm,
  Radio,
  Row,
  Col,
  Divider
} from 'ant-design-vue'

Vue.use(Form);
Vue.use(Menu);
Vue.use(Layout);
Vue.use(Breadcrumb);
Vue.use(Table);
Vue.use(Popconfirm);
Vue.use(Tabs);
Vue.use(Select);
Vue.use(Modal);
Vue.use(Radio);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);
Vue.use(Divider);
Vue.component(Button.name,Button);
Vue.component(Alert.name,Alert);
Vue.component(Icon.name,Icon);
Vue.prototype.$message = message;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
