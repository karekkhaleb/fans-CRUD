<template>
  <div>
    <h1 class="text-center">
      Welcome to Fan's CRUD!
    </h1>
    <div class="row welcomeCard">
      <div class="col-sm-8 offset-sm-2">
        <div class="">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h4 class="card-title">Simple app to manage your fans</h4>
            </div>
            <div class="panel-body">
              <p class="card-text">This app helps you keep record of any your fans who agreed to support you on a monthly basis.</p>
              <p class="card-text">You are going to be able to save your fan's details: Names, email, phone number, the monthly support in USD,...</p>
              <p class="card-text">Enough to talking, lets Manage some of fans</p>
              <router-link to="/fans" class="btn btn-primary">Fans Management</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  *{
    font-family: "Adobe Caslon Pro" , Arial, "Helvetica Neue";
    font-weight: bold;
    text-align: center;
  }
  .welcomeCard{
    margin-top: 12.5%;
  }
  .panel{
    border: solid 1px black;
    border-radius: 12px;
    padding: 17px;
  }
</style>
