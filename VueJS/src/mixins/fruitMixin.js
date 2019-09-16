export const fruitMixin = {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: '',
      createdText: 'Mixin Created',
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(element => element.match(this.filterText));
    },
  },
  created() {
    console.log('Mixin applied');
  },
};
