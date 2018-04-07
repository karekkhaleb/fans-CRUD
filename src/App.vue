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

<style>
  body{
    padding: 0;
    margin: 0;
    background: #ededed;
  }
  .addFan{
    position: fixed;
    bottom: 25px;
    right: 25px;
  }
  .hiden{
    display: none;
  }
  .shown{
    display: block;
  }




  *{
    font-family: "Adobe Caslon Pro" , Arial, "Helvetica Neue";
    font-weight: bold;
    text-align: center;
  }
  #editFanForm{
    position: relative;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    background: #1b1e21;
    color: #00bcd4;
  }
  #form input, textarea{
    background-color: #2c472b;
    color: #ededed;
  }

</style>

