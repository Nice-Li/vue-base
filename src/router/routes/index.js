import homeRoute from './home'



export default [
  homeRoute,
  {
    path:'/h',
    redirect: ()=>{
      return '/home'
    }
  }
]
