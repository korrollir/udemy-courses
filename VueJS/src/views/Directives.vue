<template>
  <div>
    <Card title="Directives">
      <List title="Basics">
        <li>
          Directives are always identified as starting with <code>v-</code>
        </li>
        <li>
          Built-in Directives
          <br/>
          if, bind, for, text/html, for, model, else, etc
        </li>
        <li>
          Syntax:
          <br />
          <code>Vue.directive('nameOfDirective', { *code* });</code>
        </li>
        <li>
          Custom Directive Hooks
          <br/>
          <code>bind(el, binding, vnode)</code> - Once directive is attached
          <br/>
          <code>inserted(el, binding, vnode)</code> - Inserted in parent node
          <br/>
          <code>update(el, binding, vnode, oldVnode)</code>
          - Once component is updated (without children)
          <br/>
          <code>componentUpdated(el, binding, vnode, oldVnode)</code>
          - Once component is updated (with children)
          <br/>
          <code>unbind(el, binding, vnode)</code> - Once directive is removed
          <br/>
          <code>bind</code> and <code>update</code> are the most frequently used
        </li>
        <li>
          Custom modifiers can be created as well (see source code of this page).
        </li>
        <li>
          Local Directives:
          <br />
          Added through the <code>directives</code> property of the Vue object
        </li>
      </List>
    </Card>
    <div class="container">
      <h2>Examples</h2>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h3>Built-in Directives</h3>
          <p v-text="'Some Text'"></p>
          <p v-html="'<strong>Some strong text</strong>'"></p>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h3>Custom Directives</h3>
          <p v-highlight:background.delayed="'red'">Color this</p>
          <p v-highlight:background.delayed="'green'">Color this</p>
          <p
            v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', interval: 500}"
          >
            I blink!
          </p>
        </div>
      </div>
    </div>
    <Card>
      <List title="Resources">
        <li>
          <a href="https://flaviocopes.com/vue-directives/" target="_blank">
            Guide on Vue directives
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
    components: {
      Card,
      List,
    },
    directives: {
      'local-highlight': {
        inserted: (el, binding) => {
          let delay = 0;
          // Can also be written binding.modifiers['delayed']
          if (binding.modifiers.delayed) {
            delay = 4000;
          }

          if (binding.modifiers.blink) {
            // alternate colors
            const {mainColor, secondColor, interval} = binding.value;
            let currentColor = mainColor;

            setTimeout(() => {
              setInterval(() => {
                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                
                if (binding.arg == 'background') {
                  el.style.backgroundColor = currentColor;
                } else {
                  el.style.color = currentColor;
                }
              }, interval);
            }, delay);
          } else {
            setTimeout(() => {
              // arg is what is in v-X:arg
              // e.g. v-highlight:background=
              if (binding.arg == 'background') {
                el.style.backgroundColor = binding.value;
              } else {
                el.style.color = binding.value;
              }
            }, delay);
          }
        },
      },
    },
  };
</script>
