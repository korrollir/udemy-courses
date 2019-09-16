<template>
<div>
  <h1>Vue Basics</h1>
  <Card>
    <List title='v-once'>
        <li>
          Syntax:
          <code>v-once</code>
        </li>
        <li>Use: Prevents overwriting when data changes</li>
    </List>
    <!--  v-once prevents overwriting when data changes  -->
    <h3 v-once>{{ title }}</h3>
  </Card>
    <Card>
      <List title='v-bind'>
          <li>
            Syntax:
            <code>v-bind:href="foo"</code>
          </li>
          <li>
            Shorthand:
            <code>:href="foo"</code>
          </li>
          <li>Use: Connects data to an HTML attribute</li>
      </List>
      <!--  Can call a method directly
      v-bind (directive) gives control of html attribute-->
      <p>
        {{ sayHello() }} -
        <a v-bind:href="link" target="blank">Google</a>
      </p>
      <!--  shorthand for v-bind  -->
      <p>
        {{ sayHello() }} -
        <a :href="link" target="blank">Google</a>
      </p>
    </Card>
    <!--  html elements are escaped by default
  v-html prevents escaping html
    Be very cautious in using!!-->
    <Card>
      <List title='v-html'>
        <li>
          Syntax:
          <code>v-html="foo"</code>
        </li>
        <li>Use: Prevents escaping of HTML</li>
        <li>
          <strong><em>Be very cautious with its use!</em></strong>
        </li>
      </List>
      <p v-html="finishedLink"></p>
    </Card>
    <Card>
      <List title='Event Listeners'>
          <li>
            Syntax:
            <code>v-on:click="foo"</code>
          </li>
          <li>
            Shorthand:
            <code>@click="foo"</code>
          </li>
          <li>Use: Binds event listeners to elements</li>
          <li>
            <code>$event</code>: Vue's version of a registered event
          </li>
          <li>Modifiers: Add methods onto the event and can be chained
            <ul>
              <li>
                <code>v-on:mousemove.stop</code>
              </li>
              <li>
                <code>@keyup.enter</code>
              </li>
            </ul>
          </li>
      </List>
      <!--  v-on controls events
      Can pass in arguments in the call.
      $event is the equivalent of the dom event.-->
      <div>
        <button v-on:click="increase(2, $event)">Click me - {{ counter }}</button>
      </div>
      <div>
        <!--   Shorthand for v-on   -->
        <button @click="increase(2, $event)">Click me - {{ counter }}</button>
      </div>
      <div>
        <button v-on:click="counter++">Click me - {{ counter }}</button>
      </div>
      <p>{{ counter * 2 > 10 ? 'Greater than 10' : 'Smaller than 10' }}</p>
      <p v-on:mousemove="updateCoordinates">
        Coordinates: {{ x }} / {{ y }}
        <!-- .stop is an event modifier and can be chained
        Here it is = e.stopPropagation-->
        -
        <span v-on:mousemove.stop="dummy">Dead Spot</span>
      </p>
      <label for="alert">Alert example</label>
      <input type="text" name="alert" v-on:keyup.enter="alertMe">
    </Card>
    <Card>
      <List title='Two-way Binding'>
          <li>Syntax:
            <code>v-model</code>
          </li>
          <li>Use: Binds data to an element, such as an
            <code>input</code> tag
          </li>
      </List>
      <label for="name">Name</label>
      <input type="text" name="name" v-model="name">
      <p>{{ name }}</p>
    </Card>
    <!--  Reactivity  -->
    <Card>
      <List title='Reactivity'>
          <li>Use: Make page elements respond to changes in data</li>
          <li>Method: Bind event listeners to elements and use template syntax to display data</li>
      </List>
      <button v-on:click="counter2++">Increase</button>
      <button v-on:click="counter2--">Decrease</button>
      <button v-on:click="secondCounter++">Increase Second</button>
      <p>Counter: {{ counter2 }} | {{ secondCounter }}</p>
      <p>Result: {{ result() }} | {{ output }}</p>
    </Card>
    <!--   CSS application   -->
    <Card>
      <List title='CSS Application'>
          <li>Syntax:
            <ul>
              <li>Normal bind -
                <code>:class="divClasses"</code>
              </li>
              <li>Object notation -
                <code>:class="{red: attachRed}"</code>
              </li>
              <li>Array syntax -
                <code>:class="[color, {red: attachRed}]"</code>
              </li>
              <li>Style attribute -
                <code>:style="{backgroundColor: color}"</code>
              </li>
              <li>Computed Property -
                <code>:style="myStyle"</code>
              </li>
              <li>Computed Property and Property Object -
                <code>:style="[myStyle, {height: width + 'px'}]"</code>
              </li>
            </ul>
          </li>
          <li>If the class contains special characters in the
            <code>v-bind</code>, it will need to be in quotes
          </li>
          <li>
            Style objects with a CSS property will need to follow the JavaScript naming:
            <br />
            <code>backgroundColor</code> instead of <code>background-color</code>
          </li>
      </List>
      <!--   If the class contains special characters in the bind,
      it'll need to be in quotes.-->
      <div class="demo" @click="attachRed = !attachRed" :class="divClasses"></div>
      <div class="demo" :class="{red: attachRed}"></div>
      <!-- multiple classes can be applied through array syntax -->
      <div class="demo" :class="[color, {red: attachRed}]"></div>
      <!-- Just the style -->
      <div class="demo" :style="{backgroundColor: color}"></div>
      <!-- Computed property -->
      <div class="demo" :style="myStyle"></div>
      <!-- Array Syntax using a computed property and property object-->
      <div class="demo" :style="[myStyle, {height: width + 'px'}]"></div>
      <br>
      <label for="color">Color</label>
      <input name="color" type="text" v-model="color">
      <label for="width">Width</label>
      <input name="width" type="text" v-model="width">
    </Card>
    <!-- DOM Interaction -->
    <Card>
      <List title='Conditionals and Lists'>
          <li>
            Syntax:
            <ul>
              <li>
                Conditonals:
                <ul>
                  <li>
                    <code>v-if="foo"</code> - detaches the element(s) from the DOM
                  </li>
                  <li>
                    <code>v-else</code>
                  </li>
                  <li>
                    <code>v-show="foo"</code> - Applies
                    <code>display: none; visibility: hidden;</code> to the element(s)
                  </li>
                </ul>
              </li>
              <li>
                Lists:
                <ul>
                  <li>Arrays:
                    <code>v-for="(foo, index) in bar" :key="foo"</code>
                  </li>
                  <li>Objects:
                    <code>v-for="(value, key, index) in obj" :key="bar"</code>
                  </li>
                  <li>Simple operation:
                    <code>v-for="n in 10" :key="foo"</code>
                  </li>
                  <li>
                    <code>key</code>
                    is used to help Vue maintain reference to the correct data and should be unique
                  </li>
                </ul>
              </li>
            </ul>
          </li>
      </List>
      <div>
        <p v-if="show">You can see me!</p>
        <p>Do you also see me?</p>
        <button @click="show = !show">Switch</button>
      </div>
      <div>
        <ul>
          <li
            v-for="(ingredient, i) in ingredients"
            :key="ingredient">{{ ingredient }} ({{ i }})
          </li>
        </ul>
        <button @click="ingredients.push('spices')">Add New</button>
        <hr>
        <ul>
          <li v-for="person in persons" :key="person.name">
            <div
              v-for="(value, key, index) in person"
              :key="value"
            >{{ key }}: {{ value }} ({{ index }})</div>
          </li>
        </ul>
        <span v-for="n in 10" :key="n*3.14">{{ n }}</span>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import List from '../components/List.vue';

export default {
  name: 'Basics',
  components: {
    Card,
    List,
  },
  data() {
    return {
      title: 'Hello World!',
      name: 'Mark',
      link: 'http://google.com',
      finishedLink: '<a href="http://google.com">Google</a>',
      counter: 0,
      counter2: 0,
      secondCounter: 0,
      x: 0,
      y: 0,
      attachRed: false,
      color: '$Green',
      width: 100,
      show: true,
      ingredients: ['meat', 'fruit', 'cookies'],
      persons: [
        { name: 'Max', age: 27, color: 'red' },
        { name: 'Anna', age: 'unknown', color: 'blue' },
      ],
    };
  },
  // Dependent properties
  // Preferred over watch
  // Must be synchronous
  computed: {
    output() {
      return this.counter2 > 5 ? 'Greater than 5' : 'Smaller than 5';
    },
    divClasses() {
      return {
        red: this.attachRed,
        blue: !this.attachRed,
      };
    },
    myStyle() {
      return {
        backgroundColor: this.color,
        width: `${this.width}px`,
      };
    },
  },
  // Execute code upon data changes
  // Best for asynchronous tasks
  watch: {
    counter2() {
      // setTimeout is a closure and will not maintain
      // reference to Vue's this object
      const vm = this;
      setTimeout(() => {
        vm.counter2 = 0;
      }, 5000);
    },
  },
  methods: {
    alertMe() {
      alert('Alert!');
    },
    sayHello() {
      this.title = 'Hello!';
      return this.title;
    },
    increase(step) {
      this.counter += step;
      return this.counter;
    },
    result() {
      return this.counter2 > 5 ? 'Greater than 5' : 'Smaller than 5';
    },
    updateCoordinates(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
  },
};
</script>

<style scoped lang="scss">
  .demo {
    width: 100px;
    height: 100px;
    background-color: gray;
    display: inline-block;
    margin: 10px;
  }

  .red {
    background-color: red;
  }

  .green {
    background-color: green;
  }

  .blue {
    background-color: blue;
  }

  .smallImage {
      width: 200px;
  }

  #effect {
    width: 100px;
    height: 100px;
    border: 1px solid black;
  }

  .highlight {
    background-color: red;
    width: 200px !important;
  }

  .shrink {
    background-color: gray;
    width: 50px !important;
  }

  .blue {
    background-color: blue;
  }

  .float {
    float: right;
  }

  .text-color {
    color: yellow;
  }

  .visible {
    width: 100px;
    height: 50px;
  }

  .progress-bar {
    width: 200px;
    height: 20px;
    border: 1px solid black;
  }

  ul {
    list-style-type: none;
  }

  p a {
    color: #41b883;

    &:hover {
      color: darken(#41b883, 10%);
    }
  }
</style>
