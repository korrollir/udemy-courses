<template>
  <main>
    <h1>{{ title }}</h1>
    <section class="card boxShadow">
      <slot></slot>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  max-width: 60%;
  margin: 0.75rem auto;
  padding: 0.5rem;
  background: #41b883;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

@media only screen and (max-width: 800px) {
  .card {
    max-width: 80%;
  }
}
</style>
