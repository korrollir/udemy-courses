<template>
  <div class="container">
    <Header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></Header>
    <NewQuote @quoteAdded="newQuote"></NewQuote>
    <QuoteGrid :quotes="quotes" @quoteDeleted="deleteQuote"></QuoteGrid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a quote to delete it!</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from '../../components/QuotesProject/QuoteGrid.vue';
import NewQuote from '../../components/QuotesProject/NewQuote.vue';
import Header from '../../components/QuotesProject/Header.vue';

export default {
  components: {
    QuoteGrid,
    NewQuote,
    Header,
  },
  data() {
    return {
      maxQuotes: 10,
      quotes: [
        'Just a test quote',
      ],
    };
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert('Please delete quotes first');
      }

      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    },
  },
};
</script>
