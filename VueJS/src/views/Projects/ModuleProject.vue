<template>
  <div class="bootstrap-project">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <button
            class="btn btn-primary"
            @click="selectedComponent = 'blueComponent'"
          >
            Load Blue
          </button>
          <button
            class="btn btn-danger"
            @click="selectedComponent = 'redComponent'"
          >
            Load Red
          </button>
          <button
            class="btn btn-success"
            @click="selectedComponent = 'greenComponent'"
          >
            Load Green
          </button>
          <component :is="selectedComponent">
            <h2>Dynamic components are neat!</h2>
          </component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from '../../components/ModuleProject/Blue.vue';
import Red from '../../components/ModuleProject/Red.vue';
import Green from '../../components/ModuleProject/Green.vue';

export default {
  name: 'ModuleProject',
  data() {
    return {
      selectedComponent: 'redComponent',
    };
  },
  components: {
    redComponent: Red,
    blueComponent: Blue,
    greenComponent: Green,
  },
};
</script>

<style scoped>
.row {
  margin: 0 auto !important;
}
</style>
