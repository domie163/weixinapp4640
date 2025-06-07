import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import baoxiu from '@/views/modules/baoxiu/list'
    import dictionary from '@/views/modules/dictionary/list'
    import fangke from '@/views/modules/fangke/list'
    import gonggao from '@/views/modules/gonggao/list'
    import guanlilaoshi from '@/views/modules/guanlilaoshi/list'
    import news from '@/views/modules/news/list'
    import sushe from '@/views/modules/sushe/list'
    import susheXuesheng from '@/views/modules/susheXuesheng/list'
    import susheweisheng from '@/views/modules/susheweisheng/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import xueshengkaoqin from '@/views/modules/xueshengkaoqin/list'
    import config from '@/views/modules/config/list'
    import dictionaryBaoxiu from '@/views/modules/dictionaryBaoxiu/list'
    import dictionaryBaoxiuZhuangtai from '@/views/modules/dictionaryBaoxiuZhuangtai/list'
    import dictionaryDanyuan from '@/views/modules/dictionaryDanyuan/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryJinyong from '@/views/modules/dictionaryJinyong/list'
    import dictionaryLoudong from '@/views/modules/dictionaryLoudong/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionarySusheweisheng from '@/views/modules/dictionarySusheweisheng/list'
    import dictionaryXueshengkaoqin from '@/views/modules/dictionaryXueshengkaoqin/list'





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
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryBaoxiu',
        name: '报修类型',
        component: dictionaryBaoxiu
    }
    ,{
        path: '/dictionaryBaoxiuZhuangtai',
        name: '报修状态',
        component: dictionaryBaoxiuZhuangtai
    }
    ,{
        path: '/dictionaryDanyuan',
        name: '单元',
        component: dictionaryDanyuan
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryJinyong',
        name: '账户状态',
        component: dictionaryJinyong
    }
    ,{
        path: '/dictionaryLoudong',
        name: '楼栋',
        component: dictionaryLoudong
    }
    ,{
        path: '/dictionaryNews',
        name: '新闻类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionarySusheweisheng',
        name: '卫生状态',
        component: dictionarySusheweisheng
    }
    ,{
        path: '/dictionaryXueshengkaoqin',
        name: '考勤结果',
        component: dictionaryXueshengkaoqin
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/baoxiu',
        name: '报修',
        component: baoxiu
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/fangke',
        name: '访客',
        component: fangke
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/guanlilaoshi',
        name: '管理老师',
        component: guanlilaoshi
      }
    ,{
        path: '/news',
        name: '新闻信息',
        component: news
      }
    ,{
        path: '/sushe',
        name: '宿舍',
        component: sushe
      }
    ,{
        path: '/susheXuesheng',
        name: '宿舍成员',
        component: susheXuesheng
      }
    ,{
        path: '/susheweisheng',
        name: '宿舍卫生',
        component: susheweisheng
      }
    ,{
        path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
    ,{
        path: '/xueshengkaoqin',
        name: '学生考勤',
        component: xueshengkaoqin
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
