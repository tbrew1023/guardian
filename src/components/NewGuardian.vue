<template>
  <div id="new-guardian">
    <form @submit.prevent="saveEmployee">
      <div id="new-guardian-form">
        <div id="col1" class="col">
          <h3>Guardian Information</h3>
          <input type="text" placeholder="Full Name" v-model="guardian_name" required><br>
          <input type="text" placeholder="Full Address" v-model="address" required><br>
          <input type="text" placeholder="Cell Phone Number" v-model="phone" required><br>
          <input type="text" placeholder="Home Phone Number" v-model="phone2"><br>
          <input type="text" placeholder="Email" v-model="email" required><br>
          <input type="text" placeholder="Relation to Child" v-model="relation" required><br>
          <input type="text" placeholder="Employer/School" v-model="work_school" required><br>
          <input type="text" placeholder="Work/School Address" v-model="work_school_address" required><br>
          <input type="text" placeholder="Work Phone" v-model="work_school_phone" required><br>
        </div>
        <div id="col2" class="col">
          <h3>Child Information</h3>
          <input type="text" placeholder="Full Name" v-model="child.child_name" required><br>
          <input type="date" placeholder="Birthdate" v-model="child.birthdate" required><br>
          <input type="text" placeholder="Address" v-model="child.address" required><br>
          <input type="text" placeholder="Additional Comments" v-model="child.comments" required><br>
        </div>
        <div id="col3" class="col">
          <h3>Emergency Contact Information</h3>
          <input type="text" placeholder="Full Name" v-model="child.emergency_contact.name" required><br>
          <input type="text" placeholder="Relation to Child" v-model="child.emergency_contact.relation" required><br>
          <input type="text" placeholder="Phone Number" v-model="child.emergency_contact.phone" required><br>
          <input type="text" placeholder="Address" v-model="child.emergency_contact.address" required><br>
        </div>
        <div id="finish" class="col">
          <h3>Complete Enrollment</h3>
          <input type="submit" value="Finish" class="btn-submit btn">
          <router-link to="/" class="back-link"><div class="btn-cancel btn">Cancel</div></router-link>
        </div>
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
      guardian_name: null,
      address: null,
      phone: null,
      phone2: null,
      email: null,
      relation: null,
      work_school: null,
      work_school_address: null,
      work_school_phone: null,
      child: {
        child_name: null,
        birthdate: null,
        address: null,
        comments: null,
        emergency_contact: {
          name: null,
          relation: null,
          phone: null,
          address: null
        }
      }
    }
  },
  methods: {
    saveEmployee() {
      db.collection('guardians').add({
        guardian_name: this.guardian_name,
        address: this.address,
        phone: this.phone,
        phone2: this.phone2,
        email: this.email,
        relation: this.relation,
        work_school: this.work_school,
        work_school_address: this.work_school_address,
        work_school_phone: this.work_school_phone,
        child: {
          child_name: this.child.child_name,
          birthdate: this.child.birthdate,
          address: this.child.address,
          comments: this.child.comments,
          emergency_contact: {
            name: this.child.emergency_contact.name,
            relation: this.child.emergency_contact.relation,
            phone: this.child.emergency_contact.phone,
            address: this.child.emergency_contact.address
          }
        }
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
  padding: 0px 300px 0px 300px;
}

h3 {
  font-weight: normal;
  font-size: 18px;

}

input {
  margin-left: auto;
  margin-right: auto;
}

input[type="date"] {
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  //background-color: red;
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
  margin-left: auto;
  margin-right: auto;
}

</style>
