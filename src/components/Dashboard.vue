<template>
  <div id="dashboard">
    <transition name="fade">
      <div v-if="show" id="emp-list">
        <h3>Dashboard</h3>
        <div id="grid-header" class="collection-item">
          <div>ID</div>
          <div>Guardian Name</div>
          <div>Address</div>
          <div>Phone</div>
        </div>
        <ul>
          <li v-for="g in guardians" v-bind:key="g.id">
            <router-link to="/view_guardian" v-bind:to="{name: 'view-guardian', params: {phone: g.phone}}" class="view-guardian">
              <div class="btn-view collection-item">
                <div>{{g.id}}</div>
                <div>{{g.guardian_name}}</div>
                <div>{{g.address}}</div>
                <div>{{g.phone}}</div><br>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
    <router-link to="/new_guardian" id="new_guardian"><div id="btn-new" class="btn"><span>Add Guardian</span></div></router-link>
    <button v-on:click="show = !show" id="hide" class="btn">{{(show ? 'Hide' : 'Show')}} Dashboard</button>
  </div>
</template>

<script>
import db from './firebaseInit'

export default {
  name: 'dashboard',

  data() {
    return {
      guardians: [],
      show: true
    }
  },
  methods: {

  },
  created() {
    db.collection('guardians').orderBy('guardian_name').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id': doc.id,
          'guardian_name': doc.data().guardian_name,
          'address': doc.data().address,
          'phone': doc.data().phone
        }
        this.guardians.push(data)
      })
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables';

#dashboard {
  position: absolute;
  height: 100vh;
  width: 80%;
  padding: 0px 30px 0px 30px;
  margin: auto;
  left: 0;
  right: 0;
}

#emp-list {
  margin-top: 120px;
  //background-color: red;
}

#btn-new {
  background-color: $ColorGreen;
  position: absolute;
  bottom: 50px;
}

#hide {
  position: absolute;
  bottom: 50px;
  left: 190px;
}

.view-guardian {
  text-decoration: none;
  outline: 0;
  color: black;
}

#new_guardian {
  text-decoration: none;
  line-height: 40px;
  outline: 0;
}

h3 {
  margin: 0px 0px 20px 10px;
}

#grid-header {
  background-color: $ColorGray;
  border-radius: 20px;
  line-height: 30px;
}

.collection-item {
  font-size: 13px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  padding: 0px 20px 0px 20px;
}

.collection-item:hover {
  background-color: $ColorLightGray;
}

li {
  list-style: none;
}

ul {
  padding: 0px;
}

.fade-enter-active { //middle of enter
  transition: all 500ms;
  transition-delay: 2s;

  #grid-header {
    transition-delay: 1s;
    transition: all 500ms;
  }
}

.fade-leave-active { //middle of leave
  transition: all 500ms;
  transition-delay: 2s;

  #grid-header {
    transition-delay: 1s;
    transition: all 500ms;
  }
}

.fade-enter, .fade-leave-to { //start of enter, and end of leave
  opacity: 0;

  #grid-header {
    transform: translateY(10px);
    opacity: 0;
  }
}

</style>
