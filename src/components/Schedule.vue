<template>
  <div id="new-guardian">
    <form @submit.prevent="saveEmployee">
      <div id="new-guardian-form">
        <h3>Schedule an Appointment</h3>
        <input type="text" placeholder="Full Name" v-model="name" required><br>
        <input type="text" placeholder="Phone" v-model="phone" required><br>
        <input type="text" placeholder="Email" v-model="email" required><br>
        Date: <input type="date" placeholder="Date" v-model="date"><br>
        Time: <input type="time" placeholder="Time" v-model="time"><br>
        <input type="text" placeholder="Comments" v-model="comments" required><br>
        <input type="submit" value="Finish" class="btn-submit btn">
        <router-link to="/" class="back-link"><div class="btn-cancel btn">Cancel</div></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import db from './firebaseInit'

export default {
  name: 'guardian_info',
  data() {
    return {
      name: null,
      phone: null,
      email: null,
      date: null,
      time: null,
      comments: null
    }
  },
  methods: {
    saveEmployee() {
      db.collection('appointments').add({
        name: this.guardian_name,
        phone: this.address,
        email: this.phone,
        date: this.phone2,
        time: this.time,
        comments: this.comments
      })
      .then(docRef => this.$router.push('/'))
      .catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables';

#new-guardian {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 200px;
  padding: 0px 200px 0px 200px;
}

h3 {
  font-weight: normal;
  font-size: 18px;
}

span {
  margin-left: 15px;
}

input {
  margin-left: auto;
  margin-right: auto;
}

input[type="checkbox"] {
  margin-left: 80px;
}

input[type="datetime-local"] {
  color: $ColorGray;
  background-color: $ColorOffWhite;
  border: none;
  width: 200px;
  border-radius: 10px;
  margin-top: 10px;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
}

.col {
  //background-color: blue;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

#new-guardian-form {
}

.btn-submit {
  background-color: $ColorGreen;
  width: 215px;
  border-radius: 10px 10px 10px 10px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.btn-cancel {
  background-color: $ColorLightGray;
  width: 215px;
  border-radius: 10px 10px 10px 10px;
  color: $ColorBlack;
}

</style>
