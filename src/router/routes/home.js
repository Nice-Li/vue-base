const Home = () => import('../../pages/home/index.vue')

export default {
    path:'/home',
    component:Home,
    name:'home',
    beforeEnter(to, from, next){
      console.log(to, from)
      next()
    },
    meta:{},
    props:true,   // bool, fn, {},
    children:[]
  }

