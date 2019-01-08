<template>
  <div id="TileComponent" class="animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-12">
    <div class="tile-stats">
      <div class="icon"><i :data-feather="icon"></i></div>
        <div class="count">{{ metric }}</div>
        <h3>{{ concept }} </h3>
        <p>{{ detail }}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "TileComponent",
  components: { },
  props: {
    metric: String,
    concept: String, 
    detail: String,
    icon: String,
  },
  data() {
    return {
      msg: "Hello beauty Vue.js!"      
    };
  },

methods: {
    f: function (event) {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#TileComponent {
  color: inherit;
}

.tile-stats .icon {width:20px;height:20px;color:#BAB8B8;position:absolute;right:53px;top:22px;z-index:1}

.tile-stats .icon i{margin:0;font-size:60px;line-height:0;vertical-align:bottom;padding:0}

.tile-stats .count{font-size:38px;font-weight:700;line-height:1.65857}

.tile-stats .count,.tile-stats h3,.tile-stats p{position:relative;margin:0 0 0 10px;z-index:5;padding:0}

.tile-stats h3{color:#BAB8B8}

.tile-stats p{margin-top:5px;font-size:12px}

.tile-stats .icon{width:20px;height:20px;color:#BAB8B8;position:absolute;right:53px;top:22px;z-index:1}

.tile-stats .icon i{margin:0;font-size:60px;line-height:0;vertical-align:bottom;padding:0}

.tile-stats .count{font-size:38px;font-weight:700;line-height:1.65857}

.tile-stats .count,.tile-stats h3,.tile-stats p{position:relative;margin:0 0 0 10px;z-index:5;padding:0}

.tile-stats h3{color:#BAB8B8}

.tile-stats p{margin-top:5px;font-size:12px}

</style>
