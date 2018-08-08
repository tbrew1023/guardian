<template>
  <div id="navbar">
    <ul>
      <router-link v-for="tab in tabs" v-on:click.native="handleTabClick(tab)" class="nav-item" :to="tab.url">
        <li :class="{selected: tab.selected}"><span>{{tab.title}}</span></li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      tabs: [
        {
          title: 'Dashboard',
          url: '/',
          selected: true
        },
        /*{
          title: 'New Employee',
          url: '/new_employee',
          selected: false
        },*/
        /*{
          title: 'View Employee',
          url: '/view_employee',
          selected: false
        },*/
        /*{
          title: 'Edit Employee',
          url: '/edit_employee',
          selected: false
        }*/
      ]
    }
  },
  methods: {
    handleTabClick: function(tab) {
      for(let i = 0; i < this.tabs.length; i++) {
        this.tabs[i].selected = false;
      }
      tab.selected = true;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables';

#navbar {
  position: fixed;
  width: 100%;
  background-color: $ColorDarkBlue;
  height: 60px;
  z-index: 1;
}

#navbar a {
  text-decoration: none;
  color: #ColorWhite;
  line-height: 60px;
  font-size: 11px;
  outline: 0;
}

#navbar ul {
  display: inline-flex;
  list-style: none;
  margin: 0px;
  float: left;
}

.selected {
  border-bottom: solid 4px $ColorGreen;
  color: $ColorGreen;
  height: 56px;
}

.nav-item:hover {
  background-color: rgba(0,0,0,0.2);
}

#navbar span {
  margin: 0px 25px 0px 25px;
}
</style>
