<template>
  <Card title='The VueJS Instance'>
      <List title='The Instance'>
          <li>
            Can be invoked with <code>var foo = new Vue({})</code> in a JS file
          </li>
          <li>
            Multiple instances can exist in one app (e.g. Vue widgets)
          </li>
          <li>
            Can be mixed with normal JavaScript
          </li>
          <li>
            Exposes the <code>$el</code> and <code>$data</code> objects to JavaScript
          </li>
          <li>
            Properties are proxied and can be accessed outside the instance: <code>foo.title</code>
          </li>
          <li>
            Instances are not reusable, whereas components are
          </li>
          <li>
            Click <a href="http://vuejs.org/api/" target="_blank">here</a> for the API docs
          </li>
      </List>
      <List title='Properties'>
          <li>
            <code>el</code>: Connects the Vue instance to the DOM
          </li>
          <li>
            <code>data</code>: Contains the overall data for the instance
          </li>
          <li>
            <code>methods</code>: Contains all the functions for interactivity
          </li>
          <li>
            <code>computed</code>:
            Contains the logic for dependencies and are cached based upon them
          </li>
          <li>
            <code>watch</code>: Similar to <code>computed</code>,
            but most useful for async or expensive operations
          </li>
          <li>
            <code>template</code>: Used to create a template with HTML
          </li>
          <li>
            Click
            <a href="https://vuejs.org/v2/api/#Options-Data" target="_blank">
              here
            </a>
            for more on instance properties
          </li>
      </List>
      <List title='Virtual DOM'>
          <li>
            This is where the performance and speed of Vue comes from.
          </li>
          <li>
            Vue maintains a virtual copy of the DOM in store.
          </li>
          <li>
            When there are changes within the data, Vue checks against the Virtual DOM.
          </li>
          <li>
            It then updates <strong>only</strong> the affected part of the DOM.
          </li>
          <li>
            Click
            <a href="https://medium.com/js-dojo/whats-the-deal-with-vue-s-virtual-dom-3ed4fc0dbb20" target="_blank">
              here
            </a>
            for a Medium article on the Virtual DOM
          </li>
      </List>
      <List title='Vue Lifecycle Methods'>
          <li>
            <code>new Vue()</code> - Instance
          </li>
          <li>
            <code>beforeCreate()</code> - Initialize data and events
          </li>
          <li>
            <code>created()</code> - Instance created
          </li>
          <li>
            <code>beforeMount()</code> - Compiles the template or <code>el</code>'s template
          </li>
          <li>
            <code>beforeUpdate()</code> - Used when data changes before re-rendering the DOM
          </li>
          <li>
            <code>updated()</code> - Immediately after re-rendering
          </li>
          <li>
            <code>beforeDestroy()</code> - Before the instance is destroyed
          </li>
          <li>
            <code>destroyed()</code> - When the instance is destroyed
          </li>
          <li>
            Click
            <a href="https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram" target="_blank">here</a>
            for the Lifecycle diagram
          </li>
          <li>
            Click
            <a href="https://vuejs.org/v2/api/#Options-Lifecycle-Hooks" target="_blank">here</a>
            for more on Lifecycle Methods
          </li>
      </List>
  </Card>
</template>

<script>
import Card from '../components/Card.vue';
import List from '../components/List.vue';

export default {
  name: 'Workflow',
  components: {
    Card,
    List,
  },
};
</script>

<style scoped lang="scss">
.card a {
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 1.2em;
}
</style>
