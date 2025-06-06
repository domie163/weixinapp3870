import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import zengjifen from '@/views/modules/zengjifen/list'
    import xiaojifen from '@/views/modules/xiaojifen/list'
    import users from '@/views/modules/users/list'
    import renwu from '@/views/modules/renwu/list'
    import tijiaoshenhe from '@/views/modules/tijiaoshenhe/list'
    import duihuanwupin from '@/views/modules/duihuanwupin/list'
    import renwufenlei from '@/views/modules/renwufenlei/list'
    import yonghu from '@/views/modules/yonghu/list'
    import wodejifen from '@/views/modules/wodejifen/list'
    import qiandao from '@/views/modules/qiandao/list'
    import duihuanqingdan from '@/views/modules/duihuanqingdan/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '广告通知',
        component: news
      }
      ,{
	path: '/zengjifen',
        name: '增积分',
        component: zengjifen
      }
      ,{
	path: '/xiaojifen',
        name: '消积分',
        component: xiaojifen
      }
      ,{
	path: '/users',
        name: '管理员',
        component: users
      }
      ,{
	path: '/renwu',
        name: '任务',
        component: renwu
      }
      ,{
	path: '/tijiaoshenhe',
        name: '提交审核',
        component: tijiaoshenhe
      }
      ,{
	path: '/duihuanwupin',
        name: '兑换物品',
        component: duihuanwupin
      }
      ,{
	path: '/renwufenlei',
        name: '任务分类',
        component: renwufenlei
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/wodejifen',
        name: '我的积分',
        component: wodejifen
      }
      ,{
	path: '/qiandao',
        name: '签到',
        component: qiandao
      }
      ,{
	path: '/duihuanqingdan',
        name: '兑换清单',
        component: duihuanqingdan
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
