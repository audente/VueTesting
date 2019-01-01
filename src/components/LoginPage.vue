<template>
  <EYLayout :title="title">
    <template slot="SideBar"><div></div></template>
    <div id="LoginPage">
      <h1>{{ Login }}</h1>
        <form action="">
          <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" class="form-control" id="email">
            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd">
            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
          </div>
          <div class="checkbox">
            <label><input type="checkbox"> Remember me</label>
          </div>
          <button type="reset" class="btn btn-primary">Limpiar</button>
          <button type="submit" class="btn btn-primary">Entrar</button>
        </form>
    </div>
  </EYLayout>
</template>

<script>
import EYLayout from "./EYLayout";

export default {
  name: "LoginPage",
  props: {
    title: String,
  },
  components: {
    EYLayout,
  },
  data() {
    return {
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#LoginPage {
  color: inherit;
}

</style>
