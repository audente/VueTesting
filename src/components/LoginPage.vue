<template>
  <EYLayout :title="title">
    <template slot="SideBar"><div></div></template>
    <div id="LoginPage">
      <h1>{{ Login }}</h1>
        <form action="">
          <div class="form-group">
            <label for="email">Email address:</label>
            <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input type="email" class="form-control" id="email" placeholder="EY email" v-model="user">
            </div>
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
              <input type="password" class="form-control" id="pwd" v-model="password">
            </div>
          </div>
          <div class="checkbox">
            <label><input type="checkbox"> Remember me</label>
          </div>
          <button type="reset" class="btn btn-primary">Limpiar</button>
          <button type="submit" class="btn btn-primary" v-on:click="login">Entrar</button>
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
      user: '';
      password: '';
    };
  },
  methods: {
    login: function (event) {
      alert('Usuario: ' + this.user + '; Password: ' + this.password + ';') 
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#LoginPage {
  color: inherit;
}

</style>
