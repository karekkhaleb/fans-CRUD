<template>
  <div class="w3-card-24">
    <div id="addFanForm">
      <div class="row">
        <div class="col-10">
          <h2 class="text-center">Please fill in all the fields</h2>
        </div>
        <div class="col-2">
          <button class="btn-danger btn w3-right" v-on:click="hideForm">x</button>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <form v-on:submit="addFan" id="form">
            <input v-model="fan.firstName" class="w3-input  w3-hover-black" type="text" name="firstName" placeholder="Enter the firstName">
            <input v-model="fan.lastName" class="w3-input  w3-hover-black" type="text" name="lastName" placeholder="Enter the lastName">
            <input v-model="fan.email" class="w3-input  w3-hover-black" type="email" name="email" placeholder="Enter the email">
            <input v-model="fan.phone" class="w3-input  w3-hover-black" type="number" name="phone" placeholder="Enter the phone number">
            <input v-model="fan.monthlySupport" class="w3-input  w3-hover-black" type="number" name="monthlySupport" placeholder="Enter the monthly support in USD">
            <textarea v-model="fan.aboutMe" class="w3-input  w3-hover-black" name="aboutMe" placeholder="Enter some notes aboute the fan"></textarea>
            <button class="w3-btn w3-btn-block w3-grey">Add Fan</button>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        fan:{
          firstName:'',
          lastName:'',
          email:'',
          phone:'',
          monthlySupport:'',
          aboutMe:''
        },
        newFan:[]
      }
    },
    methods:{
      addFan: function (event) {
        event.preventDefault();

        if(!this.fan.firstName || !this.fan.lastName ||!this.fan.email ||!this.fan.phone ||!this.fan.monthlySupport ||!this.fan.aboutMe){
          alert('all the fields are required');
          return;
        }
        this.newFan = this.fan;
        this.$http.post('http://127.0.0.1:53053/fans', this.newFan)
          .then(function (response) {
            console.log(response);
            this.$router.push('/fanDetails/'+response.body._id);
          });
      },
      hideForm(){
        this.$emit('formHiden');
      }
    }
  }
</script>

<style>
  #addFanForm{
    position: relative;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    background: #1b1e21;
    color: #00bcd4;
  }
</style>
