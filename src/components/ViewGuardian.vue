<template>
  <div id="view-guardian">
    <div id="view-g-wrapper">
      <h3>Guardian Info</h3>
      <p><strong>Name:</strong> {{guardian_name}}</p>
      <p><strong>Address:</strong> {{address}}</p>
      <p><strong>Cell Phone:</strong> {{phone}}</p>
      <p><strong>Home Phone:</strong> {{phone2}}</p>
      <p><strong>Email:</strong> {{email}}</p>
      <p><strong>Relation to child:</strong> {{relation}}</p>
      <p><strong>Employer/School:</strong> {{work_school}}</p>
      <p><strong>Work/School Address:</strong> {{work_school_address}}</p>
      <p><strong>Work Phone:</strong> {{work_phone}}</p>
      <h3>Child Info</h3>
      <p><strong>Name:</strong> {{child.child_name}}</p>
      <p><strong>Birthdate:</strong> {{child.birthdate}}</p>
      <p><strong>Address:</strong> {{child.address}}</p>
      <p><strong>Comments:</strong> {{child.comments}}</p>
      <h3>Emergency Contact Info</h3>
      <p><strong>Name:</strong> {{child.emergency_contact.name}}</p>
      <p><strong>Relation to child:</strong> {{child.emergency_contact.relation}}</p>
      <p><strong>Phone:</strong> {{child.emergency_contact.phone}}</p>
      <p><strong>Address:</strong> {{child.emergency_contact.address}}</p>
      <!--h3>Holidays Where Child Will Be Present</h3-->

      <router-link to="/" class="back-link"><div class="btn-back btn">Back</div></router-link>
      <router-link v-bind:to="{name: 'edit-guardian', params: {phone: phone}}" id="edit-g" class="g-button btn">Edit Guardian</router-link>
      <button @click="deleteGuardian" id="delete-emp" class="emp-button btn">Delete Guardian</button>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'

export default {
  name: 'view-guardian',
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
        },
        holidays: {
          christmas: null,
          columbus_day: null,
          easter: null,
          election_day: null,
          july_4: null,
          labor_day: null,
          memorial_day: null,
          mlk_day: null,
          new_years: null,
          presidents_day: null,
          thanksgiving: null,
          veterans_day: null
        }
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    db.collection('guardians').where('phone', '==', to.params.phone).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        next(vm => {
          vm.guardian_name = doc.data().guardian_name
          vm.address = doc.data().address
          vm.phone = doc.data().phone
          vm.phone2 = doc.data().phone2
          vm.email = doc.data().email
          vm.relation = doc.data().relation
          vm.work_school = doc.data().work_school
          vm.work_school_address = doc.data().work_school_address
          vm.work_school_phone = doc.data().work_school_phone
          vm.child.child_name = doc.data().child.child_name
          vm.child.birthdate = doc.data().child.birthdate
          vm.child.address = doc.data().child.address
          vm.child.comments = doc.data().child.comments
          vm.child.emergency_contact.name = doc.data().child.emergency_contact.name
          vm.child.emergency_contact.relation = doc.data().child.emergency_contact.relation
          vm.child.emergency_contact.phone = doc.data().child.emergency_contact.phone
          vm.child.emergency_contact.address = doc.data().child.emergency_contact.address
        })
      })
    })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      db.collection('guardians').where('phone', '==', this.$route.params.phone).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.guardian_name = doc.data().guardian_name
          this.address = doc.data().address
          this.phone = doc.data().phone
          this.phone2 = doc.data().phone2
          this.email = doc.data().email
          this.relation = doc.data().relation
          this.work_school = doc.data().work_school
          this.work_school_address = doc.data().work_school_address
          this.work_school_phone = doc.data().work_school_phone
          this.child.child_name = doc.data().child.child_name
          this.child.birthdate = doc.data().child.birthdate
          this.child.address = doc.data().child.address
          this.child.comments = doc.data().child.comments
          this.child.emergency_contact.name = doc.data().child.emergency_contact.name
          this.child.emergency_contact.relation = doc.data().child.emergency_contact.relation
          this.child.emergency_contact.phone = doc.data().child.emergency_contact.phone
          this.child.emergency_contact.address = doc.data().child.emergency_contact.address
        })
      })
    },
    deleteGuardian: function() {
      if(confirm('Are you sure?')) { //we can easily create our own confirmation component
        db.collection('guardians').where('phone', '==', this.$route.params.phone).get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete()
            this.$router.push('/')
          })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables';

#view-guardian {
  position: absolute;
  height: 100vh;
}

#view-g-wrapper {
  margin: 120px 0px 0px 60px;

}

h3 {
  font-weight: lighter;
  font-size: 32px;
  margin: 0px 0px 10px 0px;
}

#delete-emp {
  background-color: $ColorRed;
  position: fixed;
  border-radius: 10px 10px 10px 10px;
  right: 60px;
  bottom: 50px;
}

#edit-g {
  background-color: $ColorGreen;
  position: fixed;
  border-radius: 10px 10px 10px 10px;
  bottom: 50px;
  right: 220px;
}

.btn-back {
  background-color: $ColorDarkBlue;
  position: fixed;
  bottom: 50px;
  right: 380px;
}

</style>
