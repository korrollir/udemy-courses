<template>
    <div id="exercise2">
        <h2>Exercise #2</h2>
        <div>
            <button v-on:click="clicked">Show Alert</button>
        </div>
        <div>
            <p>On any keydown</p>
            <input type="text" v-on:keydown="storeValue">
            <p>{{ value }}</p>
        </div>
        <div>
            <p>Only on Enter</p>
            <input type="text" v-on:keydown.enter="storeValue">
            <p>{{ value }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Exercise2',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    clicked() {
      alert('You clicked me!');
    },
    storeValue(event) {
      this.value = event.target.value;
    },
  },
};
</script>

<style scoped>
  #exercise2{
    text-align: center;
  }
</style>
