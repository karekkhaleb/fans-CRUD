<template>
  <div class="w3-card-24">
    <div id="editFanForm">
      <div class="row">
        <div class="col-10">
          <h2 class="text-center">Make sure no field is left empty</h2>
        </div>
        <div class="col-2">
          <button class="btn-danger btn w3-right" v-on:click="hideForm">x</button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <form v-on:submit="updateFan" id="form">
            <input v-model="fan.firstName" class="w3-input  w3-hover-black" type="text" name="firstName" placeholder="Enter the firstName">
            <input v-model="fan.lastName" class="w3-input  w3-hover-black" type="text" name="lastName" placeholder="Enter the lastName">
            <input v-model="fan.email" class="w3-input  w3-hover-black" type="email" name="email" placeholder="Enter the email">
            <input v-model="fan.phone" class="w3-input  w3-hover-black" type="number" name="phone" placeholder="Enter the phone number">
            <input v-model="fan.monthlySupport" class="w3-input  w3-hover-black" type="number" name="monthlySupport" placeholder="Enter the monthly support in USD">
            <textarea v-model="fan.aboutMe" class="w3-input  w3-hover-black" name="aboutMe" placeholder="Enter some notes aboute the fan"></textarea>
            <button class="w3-btn w3-btn-block w3-grey">Update Fan's details</button>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props:[
      'inFan'
    ],
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
      }
    },
    methods:{
      hideForm(){
        this.$emit('collapseForm');
      },
      getFanDetails(id){
        this.$http.get('http://127.0.0.1:53053/fan/'+id)
          .then(function (response) {
            this.fan= response.body;
          });
      },
      updateFan(event){
        event.preventDefault();
        this.$http.put('http://127.0.0.1:53053/fan/'+this.$route.params.id, this.fan)
          .then(function (response) {
            console.log(response);
            this.$router.push('/fans');
          })
      }
    },
    created(){
      this.getFanDetails(this.$route.params.id);
    }
  }
</script>

<style>

</style>
