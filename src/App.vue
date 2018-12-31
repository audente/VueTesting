
<template>

  <div id="app">

    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap m-0 p-0">
      <h2 class="navbar-brand col-sm-3 col-md-2">EY</h2>
      <span class="navbar-text">In<strong>TAX</strong>lligence</span>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <button type="button" class="btn btn-outline-info">
            Salir
            <feather-log-out class="log-out" />
          </button>
        </li>
      </ul>
    </nav>

    <div class="container-fluid" style="margin-top:200; padding-top:200;" id="main-container">
      <div class="row">
      
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
          
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <feather-home class="feather" />
                  Inicio <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <feather-file class="feather" />
                  Cargar
                </a>
              </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"><span>Últimos</span></h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <feather-file-text class="feather" />
                  2018-12-30
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <feather-file-text class="feather" />
                  2018-12-29
                </a>
              </li>
            </ul>
          </div>
        </nav>
        

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        
          <HelloWorld />
          <hr/>
          <div class="alert alert-danger" role="alert">
            This is a danger alert—check it out!
          </div>

        </main>
        
      </div>
    </div>

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
  color: #2c3e50;
  margin-top: 0px;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  stroke: #cccccc;
}



/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

#main-container, .sidebar {
  padding-top: 100px;
}


.sidebar-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 48px; /* Height of navbar */
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar-text {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 2rem;
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.log-out {
  height: 16px;
  width: 16px; 
  stroke: theme-color("info");

}


</style>
