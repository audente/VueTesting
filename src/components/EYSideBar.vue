<template>
  <div class="EYSideBar">
    <nav class="col-md-2 d-none d-md-block bg-light sidebar" style="padding-top:100;">
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
  </div>
</template>

<script>
export default {
  name: "EYSideBar",
  props: {
    title: String,
  },
  data() {
    return {
      msg: "Hello beauty Vue.js!"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
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
  color: #999;
  stroke: #cccccc;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
}

.sidebar .nav-link.active {
  color: #007bff;
  stroke: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
  stroke: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

</style>
