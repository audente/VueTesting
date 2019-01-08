<template>
  <EYLayout :title="title">
    <template slot="SideBar"><div></div></template>
    <div id="LoginPage" class="col-md-6">
      <h1>Login</h1>
        <form action="">
          <div class="form-group">
            <label for="pwd">Usuario:</label>
            <input type="email" class="form-control" id="email" placeholder="email" v-model="user">
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" v-model="password" placeholder="password">
          </div>
          <div class="checkbox">
            <label><input type="checkbox"> Remember me</label>
          </div>
          <div class="form-group">
            <button type="reset" class="btn btn-primary">Limpiar</button>
            &nbsp; &nbsp; &nbsp; 
            <button type="submit" class="btn btn-primary" v-on:click="login">Entrar</button>
          </div>
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
      user: '',
      password: '',
    };
  },
  methods: {
    login: function (event) {
      if ((this.user) === this.password) {
        this.$store.commit('login', this.user);
        let usuario = this.$store.getters.user;
        this.$router.push('welcome');
      }
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
