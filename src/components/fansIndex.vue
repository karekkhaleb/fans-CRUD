<template>
  <div>
    <div v-if="databaseError" id="databaseError" class="jumbotron w3-panel w3-pale-red w3-leftbar w3-border-red ">
      <div class="jumbotron w3-panel w3-pale-green w3-leftbar w3-border-green ">
        <h2>something went wrong with with the api server, make sure the api server is setup correctly
        <small>click <a href="/fans">here</a> to refresh the app if every thing is well setup</small></h2>

      </div>
    </div>
    <div v-else>
      <h1 class="text-center">Fans to manage</h1>
      <input v-if="!initialState" class="form-control" type="text" v-model="filterInput" placeholder="Enter the first name of the fan you are searching for">
      <br>
      <div class="row">
        <div class="col">
          <div v-if="initialState" class="col-6 offset-3">
            <div class="jumbotron w3-panel w3-pale-green w3-leftbar w3-border-green ">
              <h3>
                Please hit the green button in the bottom to add a new fan!
              </h3>
            </div>
          </div>

          <table class="table table-striped table-hover">
            <tr v-for="fan in filterBy(fans, filterInput)">
              <td>{{fan.firstName}}</td><td>{{fan.lastName}}</td><td><button v-on:click="goToDetails(fan._id);" class="w3-right w3-btn w3-light-blue">details</button></td>
            </tr>
          </table>
        </div>
      </div>
      <button v-on:click="toggleForm" class="w3-btn w3-btn-floating-large bg-success text-center addFan">+</button>
      <add-fan @formHiden="toggleForm" id="addFanForm"></add-fan>
    </div>


  </div>
</template>

<script>
  import $ from 'jquery'
  import addFan from './addFan'
  export default {
    data(){
      return {
        fans:[],
        initialState: false,
        databaseError: false,
        filterInput:''
      }
    },
    methods:{
      filterBy(list, value){
        value = value.charAt(0).toUpperCase() + value.slice(1);
        return list.filter(function (fan) {
          return fan.firstName.indexOf(value) > -1;
        });
      },
      getAllFans(){
        this.$http.get('http://127.0.0.1:53053/fans')
          .then(function (response) {
            if(response.body.length<1){
              this.databaseError = false;
              this.initialState = true;
              return;
            }else {
              this.initialState = false;
            }
            this.databaseError = false;
            this.fans = response.body;
          },function (error) {
            this.databaseError = true;
            console.log('error with the api server');
          });
      },
      goToDetails(id){
        this.$router.push('/fanDetails/'+id);
      },
      toggleForm(){
        $('#addFanForm').slideToggle();
      }
    },
    created(){
      this.getAllFans();
    },
    components:{
      'add-fan' : addFan
    }

  }
</script>

<style scoped>
  *{
    font-family: "Adobe Caslon Pro" , Arial, "Helvetica Neue";
    font-weight: bold;
    text-align: center;
  }
  #addFanForm{
    display: none;
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.64);
    z-index: 2;
  }
  .addFan{
    z-index: 1;
  }
</style>
