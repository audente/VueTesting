<template>
  <div id="OpenfilePage">
    <h3>Select File:</h3>
    <input type="file" id="file-input" @change="readSingleFile"/>
    <h3>Contents of the file:</h3>
    <pre :id="file-content">{{ contents }}</pre>
  </div>
</template>

<script>
export default {
  name: "OpenfilePage",
  components: { },
  props: {
    title: String,
  },
  data() {
    return {
      'contents': "Empty";
    };
  },

methods: {

    readSingleFile: function (event) {
      alert('Clicked!');
      var file = event.target.files[0];
      alert('File:'+file)
      if (!file) {
        return;
      }
      var reader = new FileReader();
      reader.onload = function(e) {
        this.contents = e.target.result;
      };
      reader.readAsText(file);
    
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#OpenfilePage {
  color: inherit;
}

</style>
