<template>
  <div id="exercise1">
    <h2>Exercise #1</h2>
    <p>VueJS is pretty cool - {{ name }}</p>
    <p>Age * 3 = {{ age * 3 }}</p>
    <p>Random number between 0 and 1 is {{ randomize() }}</p>
    <div>
      <img class="smallImage" v-bind:src="randomImage">
    </div>
    <div>
      <input type="text" v-bind:placeholder="name">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercise1',
  data() {
    return {
      name: 'Mark',
      age: 354,
      randomImage: 'https://www.planwallpaper.com/static/images/10-Cool-Google-Brand-Covers_sMxmvqR.jpg',
    };
  },
  methods: {
    randomize() {
      return Math.random();
    },
  },
};
</script>

<style scoped>
  #exercise1 {
    text-align: center;
  }
</style>
