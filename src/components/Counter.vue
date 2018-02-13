<template>
  <div class="test">
  <h1>{{ msg }}</h1>
  <button v-on:click='increment'> Click me! </button>
  <p>This button has been clicked {{ counter }} times. </p>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data: () => ({
    msg: 'Click counter',
    counter: 0,
  }),
  methods: {
    increment: function() {
      return this.counter += 1;
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
