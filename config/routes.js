export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user', routes: [{ name: '登录', path: '/user/login', component: './user/Login' }] },
    ],
  },
  { 
    path: '/welcome', 
    name: '欢迎', 
    icon: 'smile', 
    component: './Welcome', 
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    // access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
