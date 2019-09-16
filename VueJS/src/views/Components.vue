<template>
  <div>
    <h1>Components</h1>
    <Card>
      <List title="General Info">
        <li>Components are the key to creating reusable pieces of the app</li>
        <li>Base creation is by using
          <code>Vue.component('foo', {})</code> (global registration)
        </li>
        <li>
          Setting the component to a variable and referring to it in the
          <code>components</code> property allows for local registration of the component
        </li>
        <li>Can be in a script file or as a single file component</li>
      </List>
      <List title="Single File Components)">
        <li>Filename extension is
          <code>.vue</code>
        </li>
        <li>Comprised of 3 sections:
          <br>
          <code>&lt;template&gt;</code>
          <br>
          <code>&lt;script&gt;</code>
          <br>
          <code>&lt;style&gt;</code>
        </li>
        <li>Must contain only one root element, such as a
          <code>div</code>
          <br>in the
          <code>&lt;template&gt;</code>
        </li>
        <li>The
          <code>data</code> object must be a function
        </li>
        <li>Helpful to structure folders into components or features folders</li>
        <li>Single file components can be assigned as selectors in the parent
          <br>
          Syntax: <code>'app-header': Header</code> in the <code>components</code> property
          <br>
          Selectors can either by hyphenated or camelCase
        </li>
        <li>
          Another option is to use ES6 syntax and use the property/key shortcut to name them in the parent
        </li>
        <li>
          CSS: Adding <code>scoped</code> to the <code>style</code> tag restricts the CSS to the component
        </li>
      </List>
      <List title="Component Communication">
        <li>
          Data flow is unidirectional
        </li>
        <li>
          Data can only go between parent and child, not siblings
        </li>
        <li>
          The parent sends a callback as a prop to the child
        </li>
        <li>
          The child uses a callback to pass data to the parent's listener
        </li>
        <li>
          The parent can then pass the data to another child
          <br />
          Three methods:
          <br />
          1. Set a listener in base child to the event emitter of its sibling
          <br />
          2. Use a callback in parent and then pass a pointer to the sibling
          <br />
          3. Use an event bus (see below)
        </li>
      </List>
      <List title="Props">
        <li>
          <code>props</code>: Used to transfer data from a parent to a child
        </li>
        <li>
          <code>props</code> are declared as an array in the child:
          <br />
          <code>props: ['foo']</code>
          <br />
          Type checking is done by declaring as an object:
          <br />
          <code>props: { foo: String}</code>
          <br />
          Multiple types:
          <br />
          <code>props: { foo: [String, Number]}</code>
          <br />
          Set as required:
          <br />
          <code>props: { foo: { type: String, require: true } }</code>
          <br />
          <code>props</code> can also contain a <code>default</code> property
        </li>
        <li>
          The name of the <code>props</code> item must be the same as its declaration in the parent
          <br />
          In parent component: <code>:name="foo"</code>, where <code>foo</code> can data or a function
        </li>
        <li>
          Once declared, <code>props</code> can be used with <code>this.foo</code> in the component
          <br />
          Treated by the component as a normal property in the data object
        </li>
        <li>
          Passing data back up to the parent component:
          <br />
          Child component: <code>this.$emit('nameOfEvent', data)</code>
          <br />
          Parent component: <code>@nameOfEvent="foo"</code> or <code>@nameOfEvent="foo = $event"</code>
        </li>
      </List>
      <List title="Event Bus">
        <li>Central object to hold and pass data</li>
        <li>Accessible throughout the app</li>
        <li>May contain a data or methods to store centralized code</li>
        <li>Built-in form of state management for Vue</li>
        <li>
          Created as a new Vue instance in the root <code>main.js</code>
          <br />
          <code>export const eventBus = new Vue();</code> before the main instance
        <li>
          <code>import { eventBus} from 'path/main'</code> into the child and sibling
        </li>
        <li>Call <code>eventBus.$emit('nameOfEvent', data);</code> in the child's method</li>
        <li>
          Create a lifecycle hook, <code>created() { eventBus.$on('nameOfEvent', (data) => { fn }) }</code>, in the sibling component:
        </li>
      </List>
      <List title="Slots">
        <li>Syntax: <code>&lt;slot&gt;</code></li>
        <li>Slots are used as placeholders within a child component</li>
        <li>Useful for distributing content between components exactly as desired</li>
        <li>Anything you place within the custom selector in the parent will get passed into the slot</li>
        <li>
          Child component styling is applied to what is passed into the slot
          <br/>
          The styling will not be applied if placed in a scoped parent style tag
        </li>
        <li>
          Slots can be named to ensure the content goes to the correct location
          <br />
          Unnamed slots will be treated as default
          <br />
          Child component - <code>&lt;slot name="foo"&gt;</code>
          <br />
          Parent component - <code>&lt;h2 slot="foo"&gt;</code>
        </li>
        <li>
          Default data can be placed in a slot
          <br />
          The default data will be overwritten when data is passed by a parent
        </li>
      </List>
      <List title="Dynamic Components">
        <li>Allows for dynamic switching of components</li>
        <li>
          Uses the reserved tag <code>&lt;component&gt;</code>
        </li>
        <li>Use with the <code>v-bind:is</code> or <code>:is</code> binding</li>
        <li>Syntax: <code>&lt;component :is="condition"&gt;</code></li>
        <li>
          Default content can be placed in between the
          <code>&lt;component&gt;</code> tags
        </li>
        <li>Dynamic components are destroyed when unloaded by default</li>
        <li>
          To keep a dynamic component from being destroyed, wrap it in the
          reserved tag <code>&lt;keep-alive&gt;</code>
        </li>
        <li>
          Dynamic component lifecycle hooks:
          <br />
          <code>activated()</code> - When component is loaded
          <br />
          <code>deactivated()</code> - When component is navigated away from
        </li>
      </List>
      <List title="Resources">
        <li>
          <a href="https://vuejs.org/v2/guide/components-registration.html" target="_blank">
            Official docs on component registration
          </a>
        </li>
        <li>
          <a href="https://vuejs.org/v2/guide/components.html#Passing-Data-to-Child-Components-with-Props" target="_blank">
            Official docs on parent to child communication
          </a>
        </li>
        <li>
          <a href="https://vuejs.org/v2/guide/components.html#Sending-Messages-to-Parents-with-Events" target="_blank">
            Official docs on child to parent communication
          </a>
        </li>
        <li>
          <a href="https://dev.to/alexmourer/sharing-data-between-components-invuejs-48me" target="_blank">
            Article with examples of passing data between components
          </a>
        </li>
        <li>
          <a href="https://alligator.io/vuejs/global-event-bus/" target="_blank">
            Article on using a global event bus
          </a>
        </li>
        <li>
          <a href="https://vuejs.org/v2/guide/components.html#Content-Distribution-with-Slots" target="_blank">
            Official docs on Slots
          </a>
        </li>
        <li>
          <a href="https://vuejs.org/v2/guide/components.html#Dynamic-Components" target="_blank">
            Official docs on Dynamic Components
          </a>
        </li>
        <li>
          <a href="https://vuejs.org/v2/guide/components-edge-cases.html" target="_blank">
            Official docs on handling edge cases when using components
          </a>
        </li>
      </List>
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import List from '../components/List.vue';

export default {
  name: 'Components',
  components: {
    Card,
    List,
  },
};
</script>

<style lang="scss">
a {
  color: #fff;
  font-size: 1.2em;
  font-weight: 700;
  text-decoration: none;

  &:visited {
    color: #fff;
  }
}
</style>
