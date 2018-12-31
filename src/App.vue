
<template>
  <div id="app">
    <b-navbar toggleable="md" fixed="top" sticky="true" type="dark" variant="info">
        <b-navbar-brand>EY</b-navbar-brand>
        <b-nav-text>In<strong>TAX</strong>lligence</b-nav-text>
    
        <b-collapse is-nav id="nav_collapse">
    
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
        
              <b-nav-item-dropdown right>
                <!-- Using button-content slot -->
                <template slot="button-content">
                  <em>Usuario</em>
                </template>
                <b-dropdown-item href="#">Perfil</b-dropdown-item>
                <b-dropdown-item href="#">Cerrar</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
        
        </b-collapse>
        
    </b-navbar>
    
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="3" class="sidebar">Sidebar</b-col>
            <b-col>
                <HelloWorld />
                <b-alert show>Default Alert</b-alert>
            </b-col>
        </b-row>
    </b-container>
  
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style lang="stylus">

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#sidebar {
  background-color: lightblue;
  color: #2c3e50;
}

</style>
