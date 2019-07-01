<template>
  <div id="app">
    <vuex-test></vuex-test>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <!-- <router-link to="/user/1">User</router-link> -->
    </div>
    <div>
      <router-view></router-view>
    </div>
    
    <!-- <router-view></router-view> -->
    <!-- <test-form></test-form>
    <test-tree></test-tree> -->

  </div>
</template>
<script>
  import TestForm from './components/form';
  import TestTree from './components/tree/TestTree'
  import VuexTest from './components/vuex';

  export default {
    components: {
      TestForm,
      TestTree,
      VuexTest
    },
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
