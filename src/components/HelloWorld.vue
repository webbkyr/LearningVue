<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul id="vue-links">
      <li v-for="(link, index) in links" v-bind:link='link' v-bind:index='index'
        v-bind:title='link.title'
        v-bind:key=index>
       <a :href='link.url' target="_blank"> {{ link.title }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    msg: 'Kayla`s app',
    links: [
      { url: 'https://vuejs.org', title: 'Core Docs' },
      { url: 'https://forum.vuejs.org', title: 'Forum' },
      { url: 'https://chat.vuejs.org', title: 'Community Docs' },
    ],
  }),
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
