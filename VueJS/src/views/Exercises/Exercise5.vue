<template>
  <div id="exercise5">
    <div>
      <button @click="isShown = !isShown">Toggle</button>
      <p v-if="isShown">You either see me ...</p>
      <p v-else>...or me</p>
      <p v-show="isShown">You either see me ...</p>
      <p v-show="!isShown">...or me</p>
    </div>
    <!-- 2) Output an <ul> of array elements of your choice.
      Also print the index of each element. -->
    <ul>
      <li
        v-for="(element, index) in array"
        :key="element">{{ element }} - {{ index }}
      </li>
    </ul>
    <!-- 3) Print all key-value pairs of the following object:
      {title: 'Lord of the Rings', author: 'J.R.R. Tolkiens', books: '3'}.
      Also print the index of each item. -->
    <ul>
      <li
        v-for="(value, keyName, i) in myObject"
        :key="value">{{ value }} - {{ keyName }} - {{ i }}
      </li>
    </ul>
    <!-- 4) Print the following object (only the values)
      and also create a nested loop for the array:
      {name: 'TESTOBJECT', data: [1.67, 1.33, 0.98, 2.21]}
      (hint: use v-for and v-if to achieve this) -->
    <ul>
      <li v-for="value in testData" :key="value">
        <div v-if="Array.isArray(value)">
          <div v-for="element in value" :key="element">{{ element }}</div>
        </div>
        <div v-else>
          {{ value }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Exercise5',
  data() {
    return {
      isShown: true,
      array: ['Max', 'Anna', 'Chris', 'Manu'],
      myObject: {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkiens',
        books: '3',
      },
      testData: {
        name: 'TESTOBJECT',
        id: 10,
        data: [1.67, 1.33, 0.98, 2.21],
      },
    };
  },
};
</script>

<style scoped>
  #exercise5 {
    text-align: center;
  }
</style>
