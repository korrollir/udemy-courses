<template>
  <section>
    <h3>{{ title }}</h3>
    <div class="container">
      <ul>
        <slot></slot>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'List',
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  text-align: left;
  width: 95%;
  margin: 0 auto 0.5rem auto;
  padding: 0.5em 0.5em;
  background-color: #fff;
  color: darken(#41b883, 20%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

h3,
p {
  color: #fff;;
}

a {
  color: darken(#41b883, 20%) !important;
}

ul {
  list-style-type: disc;
}
</style>
