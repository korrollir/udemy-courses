import Vue from 'vue';
import Router from 'vue-router';
import Basics from './views/Basics.vue';
import VueInstance from './views/VueInstance.vue';
import Workflow from './views/Workflow.vue';
import Components from './views/Components.vue';
import Forms from './views/Forms.vue';
import Directives from './views/Directives.vue';
import FiltersMixins from './views/FiltersMixins.vue';
import Animation from './views/Animation.vue';
import UsingHTTP from './views/UsingHTTP.vue';
import Routing from './views/Routing.vue';
import Vuex from './views/Vuex.vue';
import Axios from './views/Axios.vue';
import Authentication from './views/Authentication.vue';
import FormValidation from './views/FormValidation.vue';
import Exercise1 from './views/Exercises/Exercise1.vue';
import Exercise2 from './views/Exercises/Exercise2.vue';
import Exercise3 from './views/Exercises/Exercise3.vue';
import Exercise4 from './views/Exercises/Exercise4.vue';
import Exercise5 from './views/Exercises/Exercise5.vue';
import FormsExercise from './views/Exercises/FormsExercise.vue';
import DirectivesExercise from './views/Exercises/DirectivesEx.vue';
import FiltersMixinsExercise from './views/Exercises/FiltersMixinsExercise.vue';
import MonsterSlayer from './views/Projects/MonsterSlayer.vue';
import ServerDetailsProject from './views/Projects/ServerDetailsProject.vue';
import ModuleProject from './views/Projects/ModuleProject.vue';
import WonderfulQuotes from './views/Projects/WonderfulQuotes.vue';
import SuperQuiz from './views/Projects/SuperQuiz.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vueinstance',
      component: VueInstance,
    },
    {
      path: '/basics',
      name: 'basics',
      component: Basics,
    },
    {
      path: '/workflow',
      name: 'workflow',
      component: Workflow,
    },
    {
      path: '/components',
      name: 'components',
      component: Components,
    },
    {
      path: '/forms',
      name: 'forms',
      component: Forms,
    },
    {
      path: '/directives',
      name: 'directives',
      component: Directives,
    },
    {
      path: '/filtersmixins',
      name: 'filtersmixins',
      component: FiltersMixins,
    },
    {
      path: '/animation',
      name: 'animation',
      component: Animation,
    },
    {
      path: '/usinghttp',
      name: 'usinghttp',
      component: UsingHTTP,
    },
    {
      path: '/routing',
      name: 'routing',
      component: Routing,
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: Vuex,
    },
    {
      path: '/axios',
      name: 'axios',
      component: Axios,
    },
    {
      path: '/authentication',
      name: 'authentication',
      component: Authentication,
    },
    {
      path: '/formvalidation',
      name: 'formvalidation',
      component: FormValidation,
    },
    {
      path: '/exercise1',
      name: 'exercise1',
      component: Exercise1,
    },
    {
      path: '/exercise2',
      name: 'exercise2',
      component: Exercise2,
    },
    {
      path: '/exercise3',
      name: 'exercise3',
      component: Exercise3,
    },
    {
      path: '/exercise4',
      name: 'exercise4',
      component: Exercise4,
    },
    {
      path: '/exercise5',
      name: 'exercise5',
      component: Exercise5,
    },
    {
      path: '/formsexercise',
      name: 'formsexercise',
      component: FormsExercise,
    },
    {
      path: '/directivesexercise',
      name: 'directivesexercise',
      component: DirectivesExercise,
    },
    {
      path: '/filtersmixinsexercise',
      name: 'filtersmixinsexercise',
      component: FiltersMixinsExercise,
    },
    {
      path: '/monsterslayer',
      name: 'monsterslayer',
      component: MonsterSlayer,
    },
    {
      path: '/serverdetails',
      name: 'serverdetailsproject',
      component: ServerDetailsProject,
    },
    {
      path: '/moduleproject',
      name: 'moduleproject',
      component: ModuleProject,
    },
    {
      path: '/wonderfulquotes',
      name: 'wonderfulquotes',
      component: WonderfulQuotes,
    },
    {
      path: '/superquiz',
      name: 'superquiz',
      component: SuperQuiz,
    },
  ],
  mode: 'history',
});
