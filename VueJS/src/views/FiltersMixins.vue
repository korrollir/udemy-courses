<template>
  <div>
    <Card title="Filters &amp; Mixins">
      <List title="Filters">
        <li>A filter is a syntax feature to transform output in the data</li>
        <li>Note: Filters only translate what the user sees, not the data itself</li>
        <li>Vue does not come with built-in filters, and they must be custom made</li>
        <li>Syntax in Vue object: <code>filters: &#123; { foo(value) { return value.method(); } }</code></li>
        <li>Syntax in template: <code>value &#124; method</code></li>
        <li>Chaining syntax: <code>value | method1 | method2</code></li>
        <li><em>Warning: Use filters sparingly to avoid performance hits</em></li>
        <li>Computed properties are more often a better choice</li>
      </List>
      <List title="Mixins">
        <li>Shared code that can be moved to a separate mixins js file</li>
        <li>The data is not shared: each component gets a fresh copy</li>
        <li>
          The order of application is mixing first, then the component.
          <br/>
          It's a safety feature to ensure component control.
          <br/>
          Check the console to see it work.
        </li>
        <li>
          Global mixins can be registered with <code>Vue.mixin({})</code> in <code>main.js</code>
          <br/>
          <em>Use with caution as it affects everything</em>
          <br/>
          Rarely used outside of creating Vue plugins
        </li>
      </List>
    </Card>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h2>Examples</h2>
          <p>Filtered text: {{ text | toUppercase | to-lowercase }}</p>
          <br/>
          <input type="text" v-model="filterText">
          <ul>
            <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import List from '../components/List.vue';
import { fruitMixin } from '../mixins/fruitMixin.js';

export default {
  components: {
    Card,
    List,
  },
  created() {
    console.log('Component Created');
  },
  data() {
    return {
      text: 'My letter case is confusing',
      createdText: 'Component Created',
    };
  },
  filters: {
    toUppercase: (value) => {
      return value.toUpperCase();
    },
  },
  mixins: [fruitMixin],
};
</script>
