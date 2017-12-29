//import Vue from 'vue'


import Page1 from './components/Page1.vue'
import Pagea from './components/Pagea.vue'
import Pageb from './components/Pageb.vue'
import Page2 from './components/Page2.vue'
/*
export default [{
  path: '/page1',
  component: Page1
}, {
  path: '/page2',
  component: Page2


}, {
  path: '/',
  redirect: '/page1'
} ];
*/

export default [{
    path: '/page1',
    components: {
      default: Page1,
      a: Pagea,
      b: Pageb
    }
  },
  {
    path: '/page2',
    components: {
      default: Page2,
      a: Pagea,
      b: Pageb
    }
  },
  {
    path: '/',
    redirect: '/page1'
  },
];


