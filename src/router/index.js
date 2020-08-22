import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes/index'
import * as config from './config'

Vue.use(Router)

export default new Router({
  ...config,
  routes
})