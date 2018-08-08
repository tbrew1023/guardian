<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import './styles/_variables';

body {
  height: 100vh;
  margin: 0px;
  font-family: roboto, sans-serif;
}

a {
  text-decoration: none;
  outline: 0;
}

button {
  outline: 0;
}

input[type="text"] {
  background-color: $ColorOffWhite;
  border: none;
  color: $ColorBlack;
  width: 200px;
  padding: 10px 0px 10px 15px;
  border-radius: 5px;
  margin: 10px 0px 0px 0px;
}

input[disabled] {
  color: $ColorGray;
  cursor: default;
}

.btn {
  @include basic-button($ColorBlack, $ColorWhite);
}

.btn-submit {
  background-color: $ColorGreen;
  width: 215px;
  border-radius: 10px 10px 0px 0px;
}

.btn-cancel {
  background-color: $ColorLightGray;
  width: 215px;
  border-radius: 0px 0px 10px 10px;
  margin: 0px 0px 0px 0px;
  color: $ColorBlack;
}
</style>
