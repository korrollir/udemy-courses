<template>
  <Card title="Development Workflow">
    <List title='What is a "Development Workflow"?'>
      <li>Write the code</li>
      <li>Implement "Special Features":</li>
      <ul>
        <span></span>
        <li>Compile single file templates</li>
        <li>Case-insensitive component selectors</li>
        <li>Preprocessors and more</li>
      </ul>
      <li>Production Server</li>
      <li>Browser</li>
    </List>
    <List title="Vue CLI Workflow Options">
        <li>Simple - index.html + Vue CDN import</li>
        <li>webpack-simple - Basic Webpack Workflow (compiles, ES6, minifying/bundling, etc).</li>
        <li>webpack - Complex Webpack Workflow (including css processing, testing)</li>
        <li>browserify/browserify-simple - Browserify Workflows</li>
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

<style>

</style>
