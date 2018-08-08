<template>
  <div id="edit-guardian">
    <h3>Edit Guardian</h3>
    <form @submit.prevent="updateGuardian">
      <div id="new-emp-form">
        <input disabled type="text" placeholder="Name" v-model="guardian_name" required><br>
        <input type="text" placeholder="Address" v-model="address" required><br>
        <input type="text" placeholder="Phone" v-model="phone" required><br>
        <input type="submit" value="Finish" class="btn btn-submit">
        <router-link to="/" class="back-link"><div class="btn btn-cancel">Cancel</div></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import db from './firebaseInit'

export default {
  name: 'edit-guardian',
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
    updateGuardian() {
      db.collection('guardians').where('phone', '==', this.$route.params.phone).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref.update({
            guardian_name: this.guardian_name,
            address: this.address,
            phone: this.phone
          })
          .then(() => {
            this.$router.push({name: 'view-guardian', params: {phone: this.phone}})
          })
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables';

#edit-guardian {
  //background-color: red;
  position: absolute;
  margin: auto;
  width: 200px;
  top: 200px;
  left: 0;
  right: 0;
}

</style>
