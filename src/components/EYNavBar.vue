<template>
  <div class="EYNavBar">
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap m-0 p-0">
      <h2 class="navbar-brand col-sm-3 col-md-2">{{ brand }}</h2>
      <span class="navbar-text"><small><span v-html="subtitle"></span>: </small>{{ title }}</span>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <button type="button" class="btn btn-outline-info">
            Salir »
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "EYNavBar",
  props: {
    title: String,
  }, 
  data() {
    return {
      brand: "EY",
      subtitle: "In<strong>TAX</strong>lligence"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

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

</style>
