/**
 * Created by zhangyaoyao on 2018/02.
 *
 * 导出所有模块需要用到接口
 * 一级属性：模块名
 * 一级属性中的方法：当前模块需要用的接口
 * @type {Object}
 */

import user from 'users'
import article from 'articles'
import order from '.orders'
// import system from 'systems'
// import test from 'tests'

export default [{
  module: 'user',
  name: '用户管理',
  list: user
},
  {
  module: 'article',
  name: '文章管理',
  list: article
},
  {
  module: 'order',
  name: '订单管理',
  list: order
// },
//   {
//   module: 'system',
//   name: '系统设置',
//   list: system
// },
//   {
//   module: 'test',
//   name: '测试模块',
//   list: test
}]
