import Vue from 'vue';
import VueRouter from 'vue-router';
import routerMap from './router';
import './components/componentsCss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueResource from 'vue-resource';


import Vuex from 'vuex';


import App from './App'

Vue.use(ElementUI)

Vue.use(VueRouter);

Vue.use(VueResource);


//状态管理
Vue.use(Vuex);

const router = new VueRouter({
  routes: routerMap
});

//Vuex配置
const store = new Vuex.Store({
  state: {
    domain: 'http://localhost:8082', //保存后台请求的地址，修改时方便（比方说从测试服改成正式服域名）
    userInfo: { //保存用户信息
      nick: null,
      ulevel: null,
      uid: null,
      portrait: null
    }
  },
  mutations: {
    //更新用户信息
    updateUserInfo(state, newUserInfo) {
      state.userInfo = newUserInfo;
    }
  }
})

//设置cookie,增加到vue实例方便全局调用
//vue全局调用的理由是，有些组件所用到的接口可能需要session验证，session从cookie获取
//当然，如果session保存到vuex的话除外
Vue.prototype.setCookie = (c_name, value, expiredays) => {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

//获取cookie、
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return (arr[2]);
  else
    return null;
}
Vue.prototype.getCookie = getCookie;

//删除cookie
Vue.prototype.delCookie = (name) => {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}


//vue实例
var app = new Vue({
  data: {},
  el: '#app',
  render: h => h(App),
  router,
  store,
  watch: {
    "$route": 'checkLogin'
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      //在每次路由变化时，检查是否存在session，不存在就跳转到登录页
    if(!this.getCookie('session')){
      this.$router.push('/login');
    }else{
      //this.$router.push('/doc');
    }
    }
  }
})
