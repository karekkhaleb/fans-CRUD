<template>
  <div id="app" class="container">
    <nav class="navbar-nav ">
      <div class="navbar-brand">Fan's CRUD</div>
    </nav>
    <hr>
    <ul class="w3-navbar w3-black">
      <li><router-link to="/">HOME</router-link></li>
      <li> <router-link to="/fans">Fans management</router-link></li>
    </ul>
    <hr>
    <router-view></router-view>
    <!--<router-view/>-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

