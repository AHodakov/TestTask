import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/users',
    name: 'Users',
    component: () =>
      import( '../views/users.vue'),
  },
  {
    path: '/blackList',
    name: 'BlackList',
    component: () =>
      import('../views/black_list.vue'),
  },
  {
    path: '/callCenter',
    name: 'CallCenter',
    component: () =>
      import('../views/call-center.vue'),
  },
  {
    path: '/polls',
    name: 'Polls',
    component: () =>
      import('../views/polls.vue'),
      children: [ 
        {
          path: '/polls/parametrs',
          name: 'PollsParametrs',
          component: () =>
            import('../views/polls/parametrs.vue'),
        },
        {
          path: '/polls/question',
          name: 'PollsQuestion',
          component: () =>
            import('../views/polls/question.vue'),
        },
        {
          path: '/polls/logic',
          name: 'PollsLogic',
          component: () =>
            import('../views/polls/logic.vue'),
        },
        {
          path: '/polls/conditions',
          name: 'PollsСonditions',
          component: () =>
            import('../views/polls/conditions.vue'),
        },
        {
          path: '/polls/respondents',
          name: 'PollsRespondents',
          component: () =>
            import('../views/polls/respondents.vue'),
        }
      ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
