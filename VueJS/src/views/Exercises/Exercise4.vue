<template>
  <div id="exercise4">
    <h2>Exercise #4</h2>
    <!-- 1) Start the Effect with the Button.
      The Effect should alternate the "highlight" or "shrink" class on each new setInterval tick
      (attach respective class to the div with id "effect" below) -->
    <div>
        <button @click="startEffect">Start Effect</button>
        <div id="effect" v-bind:class="effectClasses"></div>
    </div>
    <!-- 2) Create a couple of CSS classes and attach them via the array syntax -->
    <div v-bind:class="[float, 'blue', 'text-color']">I got no class :(</div>
    <!-- 3) Let the user enter a class (create some example classes) and attach it -->
    <div>
        <input type="text" v-model="userClass">
        <div v-bind:class="[{visible: true}, userClass]"></div>
    </div>
    <!-- 4) Let the user enter a class and enter true/false for another class
    (create some example classes) and attach the classes -->
    <div>
        <input type="text" v-model="userClass">
        <input type="text" v-model="isVisible">
        <div v-bind:class="[{visible: isVisible}, userClass]"></div>
    </div>
    <!-- 5) Repeat 3) but now with values for styles (instead of class names).
    Attach the respective styles.  -->
    <div>
        <input type="text" v-model="myStyle.backgroundColor">
        <div v-bind:style="myStyle"></div>
    </div>
    <!-- 6) Create a simple progress bar with setInterval and style bindings.
    Start it by hitting the below button. -->
    <div>
        <button v-on:click="startProgress">Start Progress</button>
        <div v-bind:class="['progress-bar']" v-bind:style="progressBar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercise4',
  data() {
    return {
      effectClasses: {
        highlight: false,
        shrink: true,
      },
      float: 'float',
      userClass: '',
      isVisible: true,
      myStyle: {
        width: '100px',
        height: '150px',
        backgroundColor: 'gray',
      },
      progressBar: {
        width: '0px',
        backgroundColor: 'red',
      },
    };
  },
  methods: {
    startEffect() {
      const vm = this;
      setInterval(() => {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);
    },
    startProgress() {
      const vm = this;
      let width = 0;

      setInterval(() => {
        width += 10;
        vm.progressBar.width = `${width}px`;
      }, 500);
    },
  },
};
</script>

<style scoped>
  #exercise4 {
    text-align: center;
  }
</style>
