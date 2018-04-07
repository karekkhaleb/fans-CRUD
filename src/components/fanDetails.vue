<template>
  <div>
    <div class="row">
      <div class="col-sm-8">
        <h1>{{fan.firstName}}'s details</h1>
      </div>
      <div class="col-sm-4">

        <button v-on:click="removeFan(fan._id);" class="w3-btn w3-red w3-right">Remove the Fan</button>
        <button v-on:click="editFan" class="w3-btn w3-light-blue w3-right">Edit fan's details</button>

      </div>
    </div>

    <table class="table">
      <tr >
        <td>Fist name</td><td>{{fan.firstName}}</td>
      </tr>
      <tr>
        <td>Last name</td><td>{{fan.lastName}}</td>
      </tr>
      <tr>
        <td>Email:</td><td>{{fan.email}}</td>
      </tr>
      <tr>
        <td>Phone number</td><td>{{fan.phone}}</td>
      </tr>
      <tr>
        <td>Monthly Support</td><td>{{fan.monthlySupport}}$</td>
      </tr>
    </table>
    <div class="jumbotron">
      <h2>About me</h2>
      <div class="row">
        <div class="col-sm-6 offset-sm-3">
          <p v-text="fan.aboutMe"></p>
        </div>
      </div>
    </div>
    <!--listening to collapseForm method which is defined in the edit-Fan component, then assigning inFan to fan, inFan is a prop in the edit-fan component-->
    <edit-fan :inFan="fan" @collapseForm="editFan" class="editFanForm"></edit-fan>
  </div>
</template>
<script>
  import $ from 'jquery'
  import editFanForm from './editFan'
  export default {
    data(){
      return{
        fan:{}
      }
    },
    created(){
      this.$http.get('http://127.0.0.1:53053/fan/'+this.$route.params.id)
        .then(function (response) {
          this.fan= response.body;
        })
    },
    methods:{
      removeFan(id){
        this.$http.delete('http://127.0.0.1:53053/fan/'+id)
          .then(function (response) {
            this.$router.push('/fans');
            console.log('fan deleted ');
          })
      },
      editFan(){
        $('.editFanForm').slideToggle();
      }
    },
    components:{
      'edit-fan': editFanForm
    }
  }
</script>

<style scoped>
  .editFanForm{
    display: none;
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.64);

  }
</style>
