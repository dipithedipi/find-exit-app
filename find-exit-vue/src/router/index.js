import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { accountCheck } from '@/utils/accountCheck.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true, onlyRSPP: false }
    },
    {
      path: '/welcome',
      name: 'welcome',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WelcomeView.vue')
    },
    {
      path: '/collectionPoints',
      name: 'collection Points',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CollectionPointsView.vue'),
      meta: { requiresAuth: true, onlyRSPP: true, forceRSPP: true}
    },
    {
      path: '/classrooms',
      name: 'classrooms',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ClassroomsView.vue'),
      meta: { requiresAuth: true, onlyRSPP: false }
    },
    {
      path: '/classrooms/:id',
      name: 'classrooms-id',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ClassroomsRoomsView.vue'),
      meta: { requiresAuth: true, onlyRSPP: false }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { requiresAuth: false, onlyRSPP: false }
    },
    {
      path: '/errorDomain',
      name: 'error Domain',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ErrorDomainView.vue'),
      meta: { requiresAuth: false, onlyRSPP: false }
    },
    {
      path: '/errorAccountType',
      name: 'error Account Type',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ErrorAccountView.vue'),
      meta: { requiresAuth: false, onlyRSPP: false }
    },
  ]
})

router.beforeEach((to, _from, next) => {
  if (to.path === '/errorAccountType' || to.path === '/errorDomain' || to.path === '/about' || to.path === '/welcome') {
    next();
    return;
  }
  accountCheck()
  .then((res) => {
    let accountinfo = res;
    if (to.meta.requiresAuth && localStorage.getItem('user') == null) {
      next('/welcome');
    } else {
      if (to.path === '/collectionPoints') {
        if (to.meta.forceRSPP) {
          next();
        }
        if (to.meta.onlyRSPP && accountinfo.type === 'rspp') {
          if(accountinfo.domain === 'itispaleocapa.it'){
            next();
          } else {
            next('/errorDomain');
          }
        } else {
          next('/errorAccountType');
        }
      } else if (to.path.includes('/classrooms') || to.path === '/') {
        console.log(accountinfo.domain)
        if (accountinfo.domain === 'itispaleocapa.it') {
          next();
        } else {
          next('/errorDomain');
        }
      }
    }
  }
  );
});


export default router
