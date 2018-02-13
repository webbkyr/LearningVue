<template>
  <div class="test">
  <h1>{{ msg }}</h1>
  <button @click='increment'> Click me! </button>
  <p>This button has been clicked {{ counter }} times. </p>
  <p> Counter squared would be {{ counterSquared }} times. </p>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data: () => ({
    msg: 'Click counter',
    // counter: 0,
  }),
  methods: {
    increment() {
      this.$store.commit('increment');
      // this.counter += 1;
      // return null;
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
