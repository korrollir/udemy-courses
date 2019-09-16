<template>
  <div>
    <Card title="Transitions &amp; Animations">
      <List title="Single Elements">
        <li>
          Comprised of the <code>&lt;transition&gt;</code> wrapper
          <br>
          Use to animate what is enclosed in the tag
          <br>
          Multiple elements may be enclosed, but only one transition will show
        </li>
        <li>
          Transitions are based on CSS classes provided by Vue
          <br>
          Set the CSS class in the <code>name</code> attribute - <code>&lt;transition name="foo"&gt;</code>
          <br>
          The <code>name</code> attribute can also be dynamically set through attribute binding
          <br>
          1st frame (initial state) - Vue attaches the class <code>*-enter</code> (* = your class)
          <br>
          2nd frame -> End - Vue attaches the class <code>*-enter-active</code>
          <br>
          <code>*-enter</code> is then removed
          <br>
          Removing the class - Vue attaches <code>*-leave</code> or <code>*-leave-active</code>
          <br>
          Define these classes in the styles
          <br>
          Set <code>type="X"</code> (transition, animation, etc) on the element to set which determines the length
        </li>
        <li>
          Animations can be started upon page load
          <br>
          Attach the <code>appear</code> attribute to the element
        </li>
        <li>
          Different classes than default can be used (e.g. Animate.css)
          <br>
          On the <code>&lt;transition&gt;</code> element use the following attributes
          <br>
          <code>enter-class="foo"</code>
          <br>
          <code>enter-active-class="foo"</code>
          <br>
          <code>leave-class="foo"</code>
          <br>
          <code>leave-active-class="foo"</code>
        </li>
      </List>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <hr>
            <p>Select the animation type</p>
            <select v-model="alertAnimation" class="form-control">
              <option value="fade">Fade</option>
              <option value="slide">Slide</option>
            </select>
            <br><br>
            <button class="btn btn-primary" @click="show = !show">Show Alert</button>
            <br>
            <br>
            <transition :name="alertAnimation">
              <div class="alert alert-info" v-if="show">This is some info</div>
            </transition>
            <transition name="slide" type="animation">
              <div class="alert alert-info" v-if="show">This is some info</div>
            </transition>
            <transition name="fade" appear>
              <div class="alert alert-info" v-if="show">This is some info</div>
            </transition>
            <transition :name="alertAnimation" mode="out-in">
              <div class="alert alert-info" v-if="show" key="info">This is some info</div>
              <div class="alert alert-warning" v-if="!show" key="warning">This is a warning</div>
            </transition>
            <hr>
            <button 
              class="btn btn-primary" 
              @click="load = !load"
            >
              Load / Remove Element
            </button>
            <br><br>
            <transition
              @before-enter="beforeEnter"
              @enter="enter"
              @after-enter="afterEnter"
              @enter-cancelled="enterCancelled"
              @before-leave="beforeLeave"
              @leave="leave"
              @after-leave="afterLeave"
              @leave-cancelled="leaveCancelled"
            >
              <div class="box" v-if="load"></div>
            </transition>
            <hr>
            <p>Dynamic componets</p>
            <button
              class="btn btn-primary"
              @click="selectedComponent == 'SuccessAlert' 
                ? selectedComponent = 'DangerAlert' 
                : selectedComponent = 'SuccessAlert'"
            >
              Toggle Component
            </button>
            <br><br>
            <transition name="fade" mode="out-in">
              <component :is="selectedComponent"></component>
            </transition>
            <hr/>
            <button
              class="btn btn-primary"
              @click="addItem"
            >
              Add Item
            </button>
            <br><br>
            <ul class="list-group">
              <transition-group name="slide">
                <li
                  class="list-group-item"
                  v-for="(number, index) in numbers"
                  @click="removeItem(index)"
                  :key="number"
                  style="cursor: pointer;"
                >
                  {{ number }}
                </li>
              </transition-group>
            </ul>
            <br>
          </div>
        </div>
      </div>
      <List title="Single Element Transitions">
        <li>Set an <code>key="foo"</code> attribute on the element</li>
        <li>
          Set the <code>mode="foo"</code> attribute on the <code>&lt;transition&gt;</code> element
          <br>
          <code>out-in</code>: Old element animates out before new animates in
          <br>
          <code>in-out</code>: Does the opposite
        </li>
        <li>
          The <code>mode</code> attribute can be bound
        </li>
      </List>
      <List title="Transition JS Hooks">
        <li><code>before-enter(el)</code>: Upon adding the element</li>
        <br>
        <li><code>enter(el, done)</code>: After added, call <code>done()</code> when not using CSS code</li>
        <li><code>after-enter(el)</code>: Executed once the animation finished</li>
        <li><code>after-enter-cancelled(el)</code>: Called when the condition that would add the element is finished</li>
        <li><code>before-leave</code>, <code>leave</code>, and <code>after-leave-cancelled</code>: Match the enter versions in reverse</li>
        <li>Include <code>:css="false"</code> in the attributes to exclude CSS</li>
        <li><code>enter()</code> and <code>leave()</code> are the places to animate</li>
        <li>Look in the console while clicking the Load / Remove Element button in the examples</li>
      </List>
      <List title="Animating Multiple Items">
        <li>The <code>&lt;transition-group&gt;</code> wrapper is for animating multiple elements</li>
        <li>Lifecycle hooks and CSS classes remain the same as single element transitions</li>
        <li>The <code>*-move</code> CSS class is made available to use when items are added or removed</li>
        <li>
          <code>&lt;transition&gt;</code>is not rendered to the DOM
          <br>
          <code>&lt;transition-group&gt;</code> does render a new HTML tag
          <br>
          The default element rendered is a <code>&lt;span&gt;</code>
          <br>
          The default can be overwritten by <code>&lt;transition-group tag="foo"&gt;</code>
        </li>
      </List>
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import List from '../components/List.vue';
import SuccessAlert from '../components/Transitions/SuccessAlert.vue';
import DangerAlert from '../components/Transitions/DangerAlert.vue';

export default {
  components: {
    Card,
    List,
    SuccessAlert,
    DangerAlert,
  },
  data() {
    return {
      show: false,
      load: true,
      alertAnimation: 'fade',
      elementWidth: 100,
      selectedComponent: 'SuccessAlert',
      numbers: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter');
      this.elementWidth = 100;
      el.style.width = `${this.elementWidth}px`;
    },
    enter(el, done) {
      console.log('enter');
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = `${this.elementWidth + round * 10}px`;
        round++;

        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
      done();
    },
    afterEnter(el) {
      console.log('afterEnter');
    },
    enterCancelled(el) {
      console.log('enterCancelled');
    },
    beforeLeave(el) {
      console.log('beforeLeave');
      this.elementWidth = 300;
      el.style.width = `${this.elementWidth}px`;
    },
    leave(el, done) {
      console.log('leave');
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = `${this.elementWidth - round * 10}px`;
        round++;

        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('afterLeave');
    },
    leaveCancelled(el) {
      console.log('leaveCancelled');
    },
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);

      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
  },
};
</script>

<style>
  .box {
    width: 300px;
    height: 100px;
    background-color: lightgreen;
  }
  /* Only attached for the 1st frame
     Set default state */
  .fade-enter {
    opacity: 0;
  }
  /* Set transition here */
  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 0.5s;
  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
  }

  .slide-move {
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>
