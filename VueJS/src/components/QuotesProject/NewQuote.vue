<template>
  <div class="row">
    <form>
      <div class="col-sm-8 offset-sm-2 col-xs-12 col-md-6 offset-md-3 form-group row">
        <label>Quote</label>
        <textarea class="form-control" row="3" v-model="quote"></textarea>
      </div>
      <div class="col-sm-8 offset-sm-2 col-xs-12 col-md-6 offset-md-3 form-group row">
        <button class="btn btn-primary" @click.prevent="createNew">
          Add Quote
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        quote: '',
      };
    },
    methods: {
      createNew() {
        this.$emit('quoteAdded', this.quote);
        this.quote = '';
      },
    },
  };
</script>
