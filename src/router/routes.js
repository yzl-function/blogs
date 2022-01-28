import {renderIcon} from '@/utils'
import {DashboardOne, FileWord, MessageOne, Page, PageTemplate, Permissions, System} from '@icon-park/vue-next'
/**
 * @param name 路由名称, 必须设置,且不能重名
 * @param meta 路由元信息（路由附带扩展信息）
 * @param redirect 重定向地址, 访问这个路由时,自定进行重定向
 * @param meta.disabled 禁用整个菜单
 * @param meta.title 菜单名称
 * @param meta.icon 菜单图标
 * @param meta.keepAlive 缓存该路由
 * @param meta.sort 排序越小越排前
 * */
import Layout from '@/layout/index.vue'

const routeName = 'dashboard';
const RedirectName = 'redirect';
const ContentName = 'content';
const MessageName = 'message';
const SystemName = 'system';
const WebName = 'web';

const constantRouters = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/redirect',
    name: RedirectName,
    component: Layout,
    meta: {
      title: RedirectName,
    },
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        name: RedirectName,
        component: () => import('@/views/redirect/index.vue'),
        meta: {
          title: RedirectName,
        },
      },
    ],
  }
]

const asyncRoutes = [
  {
    path: '/',
    name: routeName,
    component: Layout,
    meta: {
      title: 'Dashboard',
      alwaysShow: true,
      icon: renderIcon(DashboardOne),
      // permissions: ['super_admin', 'admin'],
      sort: 0,
    },
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: `${routeName}_dashboard`,
        component: () => import('@/views/dashboard/console/console.vue'),
        meta: {title: '控制台', keepAlive: true}
      }
    ]
  },
  {
    path: '/jurisdiction',
    name: 'jurisdiction',
    component: Layout,
    meta: {
      title: 'Test',
      icon: renderIcon(Permissions),
      sort: 99,
    },
    children: [
      {
        path: 'admin',
        name: 'admin',
        component: () => import('@/views/jurisdiction/super_admin.vue'),
        meta: {
          title: 'admin 测试',
          permissions: ['admin'],
        },
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/jurisdiction/admin.vue'),
        meta: {
          title: 'user,admin 测试',
          permissions: ['user', 'admin'],
        },
      },
    ],
  },
  {
    path: '/content',
    name: ContentName,
    component: Layout,
    meta: {
      title: '内容管理',
      icon: renderIcon(FileWord),
      // sort: 1,
    },
    redirect: '/content/list',
    children: [
      {
        path: 'list',
        name: `${ContentName}_list`,
        component: () => import('@/views/content/article/list/index.vue'),
        meta: {title: '文章列表', keepAlive: true}
      },
      {
        path: 'action',
        name: `${ContentName}_action`,
        component: () => import('@/views/content/article/action/index.vue'),
        hidden: true,
        meta: {title: '文章操作'}
      },
      {
        path: 'tag/list',
        name: `${ContentName}_tag_list`,
        component: () => import('@/views/content/tag/index.vue'),
        meta: {title: '标签列表', keepAlive: true}
      },
      {
        path: 'category/list',
        name: `${ContentName}_category_list`,
        component: () => import('@/views/content/category/index.vue'),
        meta: {title: '分类列表', keepAlive: true}
      },
      {
        path: 'link/list',
        name: `${ContentName}_link_list`,
        component: () => import('@/views/content/link/index.vue'),
        meta: {title: '友联列表', keepAlive: true}
      }
    ]
  },
  {
    path: '/message',
    name: MessageName,
    component: Layout,
    meta: {
      alwaysShow: true,
      title: '消息管理',
      icon: renderIcon(MessageOne),
      // sort: 2,
    },
    children: [
      {
        path: 'comment',
        name: `${MessageName}_comment`,
        component: () => import('@/views/message/comment/list/index.vue'),
        meta: {title: '评论管理', keepAlive: true}
      },
      {
        path: 'comment/check',
        name: `${MessageName}_comment_check`,
        component: () => import('@/views/message/comment/check/index.vue'),
        meta: {title: '评论审核', keepAlive: true}
      }
    ]
  },
  // {
  //   path: '/system',
  //   name: SystemName,
  //   component: Layout,
  //   meta: {
  //     alwaysShow: true,
  //     title: '系统管理',
  //     icon: renderIcon(System),
  //     // sort: 2,
  //   },
  //   // redirect: '/message/site',
  //   children: [
  //     {
  //       path: 'site',
  //       name: `${SystemName}_site`,
  //       component: () => import('@/views/system/site/index.vue'),
  //       meta: {title: '网站配置', keepAlive: true}
  //     },
  //     {
  //       path: 'system_config',
  //       name: `${SystemName}_system_config`,
  //       component: () => import('@/views/system/config/index.vue'),
  //       meta: {title: '系统配置', keepAlive: true, permissions: ['super_admin']}
  //     }
  //   ]
  // },
  {
    path: '/web',
    name: WebName,
    component: Layout,
    meta: {
      alwaysShow: true,
      title: '门户管理',
      icon: renderIcon(Page),
    },
    children: [
      // {
      //   path: 'menu',
      //   name: `${WebName}_menu`,
      //   component: () => import('@/views/web/menu/index.vue'),
      //   meta: {title: '菜单管理', keepAlive: true}
      // },
      {
        path: 'work',
        name: `${WebName}_work`,
        component: () => import('@/views/web/work/index.vue'),
        meta: {title: '作品管理', keepAlive: true}
      },
      {
        path: 'history',
        name: `${WebName}_history`,
        component: () => import('@/views/web/history/index.vue'),
        meta: {title: '建站日志', keepAlive: true}
      }
    ]
  },
  {
    path: '/:path(.*)*',
    name: 'errorPage',
    component: Layout,
    meta: {
      title: '错误页',
      sort: 100
      // icon: renderIcon(ReportGmailerrorredSharp),
    },
    children: [
      {
        path: '/:path(.*)*',
        name: 'errorPageSon',
        icon: renderIcon(PageTemplate),
        component: () => import('@/views/exception/404.vue'),
        meta: {
          title: '404',
        },
      },
    ],
  },
]

export {
  asyncRoutes,
  constantRouters
}
