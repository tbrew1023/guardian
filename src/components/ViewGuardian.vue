<template>
  <div id="view-guardian">
    <div id="view-g-wrapper">
      <h3>{{guardian_name}}</h3>
      <p><strong>Address:</strong> {{address}}</p>
      <p><strong>Phone:</strong> {{phone}}</p>
      <router-link v-bind:to="{name: 'edit-guardian', params: {phone: phone}}" id="edit-g" class="g-button btn">Edit Guardian</router-link>
      <button @click="deleteGuardian" id="delete-emp" class="emp-button btn">Delete Guardian</button>
    </div>
    <router-link to="/" class="back-link"><div class="btn-back btn">Back</div></router-link>
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
      phone: null
    }
  },
  beforeRouteEnter(to, from, next) {
    db.collection('guardians').where('phone', '==', to.params.phone).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        next(vm => {
          vm.guardian_name = doc.data().guardian_name
          vm.address = doc.data().address
          vm.phone = doc.data().phone
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
  position: absolute;
  border-radius: 0px 10px 10px 0px;
  left: 210px;
}

#edit-g {
  background-color: $ColorGreen;
  position: absolute;
  border-radius: 10px 0px 0px 10px;
}

.btn-back {
  background-color: $ColorDarkBlue;
  position: absolute;
  bottom: 50px;
  left: 60px;
}

</style>
