<template>
  <div class="test">
  <h1>{{ msg }}</h1>
  <button @click='increment'> + </button>
  <button @click='decrement'> - </button>
  <p>The button count is {{ counter }}. </p>
  <p> Counter squared would be {{ counterSquared }} times. </p>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data: () => ({
    msg: 'Click counter',
  }),
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
  },
  computed: {
    counter() {
      return this.$store.state.count;
    },
    counterSquared() {
      const num = this.$store.state.count;
      return num * num;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
