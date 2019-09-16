<template>
    <div id="exercise3">
        <h2>Exercise #3</h2>
        <div>
            <p>Current Value: {{ value }}</p>
            <button @click="value += 5">Add 5</button>
            <button @click="value += 1">Add 1</button>
            <p>{{ result }}</p>
        </div>
        <div>
            <input type="text">
            <p>{{ value }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Exercise3',
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    result() {
      return this.value >= 37 ? 'done' : 'not there yet';
    },
  },
  watch: {
    value() {
      const vm = this;
      setTimeout(() => {
        vm.value = 0;
      }, 5000);
    },
  },
};
</script>

<style scoped>
  #exercise3 {
    text-align: center;
  }
</style>
