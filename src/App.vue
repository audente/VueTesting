
<template>

  <div id="app">

    <EYNavBar title="Declaración" />
    
    <div class="container-fluid" style="margin-top:200; padding-top:200;" id="main-container">
      <div class="row">
      
        <EYSideBar/>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <HelloWorld />
        </main>
        
      </div>
    </div>

  </div>
  
</template>


<script>
import EYNavBar from "./components/EYNavBar";
import EYSideBar from "./components/EYSideBar";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    EYNavBar,
    EYSideBar,
    HelloWorld
  }
};
</script>


<style lang="stylus">

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  stroke: #cccccc;
}

#main-container, .sidebar {
  padding-top: 100px;
}

</style>
