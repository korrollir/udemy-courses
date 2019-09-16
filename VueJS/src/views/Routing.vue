<template>
  <div>
    <Card title="Vue-router">
      <List title="Initial Setup">
        <li>Routing is about dynamically switch between components</li>
        <li>Vue-router is a common package to manage routing</li>
        <li>
          Vue-router can be registered by:
          <br>
          <code>import VueRouter from 'vue-router'</code> in <code>main.js</code>
        </li>
      </List>
      <List title="Parameters">
        <li>
          Routes can take multiple parameters, but only the first two are necessary
        </li>
        <li>
          <code>path:</code> - The displayed relative path of the view<br>
          The root route is set as either an empty string or a /
        </li>
        <li><code>component</code> - The component that is loaded when visiting the path</li>
        <li><code>name</code> - The name of the route (used in a <code>router-link</code> component</li>
      </List>
      <List title="router-view">
        <li>
          The <code>&lt;router-view&gt;</code> component will tell view where to load the routed component
        </li>
        <li>
          <code>&lt;router-view&gt;</code> can also be named, which allows for positioning in the DOM
        </li>
        <li>
          While not as useful, it can help with switching the layout depending on location and organizing the layout
        </li>
      </List>
      <List title="router-link">
        <li>
          The <code>&lt;router-link&gt;</code> component is used for user navigation within the app.
        </li>
        <li>
          Params:<br>
          <code>to='/foo'</code> - The URL target
          <code>tag="li"</code> - Determines what element it will behave as.<br>
          <code>active-class="foo"</code> - Manages application of active class based on URL location<br>
          <code>exact</code> - Inclusive match requiring the path must completely match the desired path
        </li>
      </List>
      <List title="Navigation">
        <li>
          Navigation can be accomplished in the <code>methods</code><br>
          <code>this.$router.push('/foo')</code><br>
          or<br>
          <code>this.$router.push({path: '/', ... })</code>
        </li>
      </List>
      <List title="Nested Routes">
        <li>
          Nested (sub) routes are accomplished by adding <code>children</code> in the route config
        </li>
        <li>
          <code>
            { path: '', component: Foo, children: [<br>
            &nbsp;&nbsp;{ path: '', component: Bar }<br>
            ] }
          </code>
        </li>
        <li>
          A new <code>&lt;router-view&gt;</code> will need to be set in the parent component
        </li>
      </List>
      <List title="Dynamic Routes">
        <li>Dynamic routes are created using <code>'/path/:foo'</code></li>
        <li>Params can be set in the data with <code>this.$route.params.foo</code></li>
        <li>
          The <code>watch</code> method can be used to watch for when the URL changes in order to update the component
        </li>
        <li>
          Dynamic params can be done through data binding:<br>
          <code>:to="'/user/' + $route.params.id + '/edit'"</code><br>
          A better option is assigning a name to the route in the routes config<br>
          The dynamic params now changes to:<br>
          <code>:to="{ name: 'userEdit', params: { key: value, id: $route.params.id } }"</code><br>
          Vue will now automatically populate with the desired component and params
        </li>
      </List>
      <List title="Query Parameters">
        <li>
          Syntax:<br>
          <code>:to="{ name: 'userEdit', params: { id: $route.params.id }, query: { local: 'en', q: 100 } }</code>
        </li>
      </List>
      <List title="Redirecting Routes">
        <li>
          <code>{ path: '/redirect-me', redirect: '/home' }</code>
        </li>
        <li><code>{ path: '/redirect-me', redirect: { name: 'home' } } </code></li>
        <li>
          Catch-all route for redirecting:<br>
          <code>{ path: '*', redirect: '/home' }</code><br>
          <strong>Important</strong> - Make certain to place any <code>*</code> path at the end of the routes list
        </li>
      </List>
      <List title="Animation">
        <li>
          Routes can be animated by wrapping the <code>&lt;router-view&gt;</code> tag in a <code>&lt;transition&gt;</code> tag
        </li>
        <li>The animation is the carried out in the same way as with a component</li>
      </List>
      <List title="Same View Navigation">
        <li>This can be done by passing in the hash fragment</li>
        <li>
          <code>:to="{ name: 'foo', hash: 'bar' }</code><br>
          And configuring the <code>scrollBehavior()</code> function in the vue-router config<br>
          <code>scrollBehavior(to, from, savedPosition) { code }</code>
        </li>
      </List>
      <List title="Route Guards">
        <li>
          In <code>main.js</code> - <code>router.beforeEach((to, from, next) => { code; next(); }</code><br>
          <code>next()</code> will take either nothing, false, a path, or a redirect object<br>
          <strong>Careful</strong> - <code>beforeEach()</code> will run on each route
        </li>
        <li>
          Single routes can be protected by placing <code>beforeEach()</code> as a route parameter
        </li>
        <li>
          <code>beforeEachEnter(to, from, next) { code; next(); }</code> is a lifecycle hook route guard from vue-router<br>
          This hook can be used to check authentication or whatever condition would determine if the component should load
        </li>
        <li><code>beforeRouteLeave(to, from, next)</code> guards leaving the route</li>
        <li>These guards only have access to the to and from routes, not the components</li>
      </List>
      <List title="Lazy Loading">
        <li>Lazy loading is loading only parts of the application when needed</li>
        <li>Instead of having one large bundle, several smaller bundles are created</li>
        <li>The normal <code>import</code> syntax is modified in the routes or main config</li>
        <li>
          <code>import User from './components/User.vue';</code> becomes<br>
          <code>
            const User = resolve => {<br>
            &nbsp;&nbsp;require.ensure(<br>
            &nbsp;&nbsp;&nbsp;&nbsp;['./components/user/User.vue'],<br>
            &nbsp;&nbsp;&nbsp;&nbsp;() => {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resolve(require('./components/user/User.vue'))<br>
            &nbsp;&nbsp;&nbsp;&nbsp;}<br>
            &nbsp;&nbsp;);<br>
            }
          </code>
        </li>
        <li>This can be replicated for each component desired</li>
        <li>
          A third argument for the <code>require.ensure</code> function is a string identifying a group for bundling together multiple components
        </li>
        <li>Note: This syntax is for Webpack based builds</li>
      </List>
      <List title="Removing # from the URL">
        <li>
          To prevent a hashtag (#) from showing in the browser URL, the server will always need to
          return the <code>index.html</code> file.<br>
          Then <code>mode: 'history'</code> will need to be added to the router object keys
        </li>
      </List>
      <List title="Useful Links">
        <li><a href="https://github.com/vuejs/vue-router" target="_blank">vue-router Github Page</a></li>
        <li><a href="https://router.vuejs.org/" target="_blank">vue-router Documentation</a></li>
      </List>
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import List from '../components/List.vue';

export default {
  components: {
    Card,
    List,
  },
};
</script>

<style>

</style>
