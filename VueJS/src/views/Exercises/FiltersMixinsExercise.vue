<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 sol-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters &amp; Mixins</h1>
        <!-- Exercise 1 -->
        <!-- Build a local filter which reverse the text it is applied on -->
        <p>{{ text |  reverse }} - Local Filter</p>
        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- E.g. "Test" => Gets Filtered to => "Test (4)" -->
        <p>{{ text | calculateLength }} - Global Filter</p>
        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2 with Computed Properties -->
        <p>{{ reversed }} - Computed Property</p>
        <p>{{ calculateLength }} - Computed Property</p>
        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        <p>{{ calculateLength }} - Mixin</p>
      </div>
    </div>
  </div>
</template>

<script>
import { calculateLengthMixin } from '../../mixins/calculateLengthMixin';

export default {
  mixins: [calculateLengthMixin],
  data() {
    return {
      text: 'Some Text',
    }
  },
  computed: {
    reversed() {
      return this.text.split('').reverse().join('');
    },
  },
  filters: {
    reverse(value) {
      return value.split('').reverse().join('');
    },
  },
}
</script>

<style>

</style>
