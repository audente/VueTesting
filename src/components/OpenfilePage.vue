<template>
  <div id="OpenfilePage">
    <h3>Select File:</h3>
    <input type="file" id="fileinput" @change="readSingleFile"/>
    <h3>Contents of the file:</h3>
    <pre :id="filecontent">{{ contents }}</pre>
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
      'contents': "Empty",
    };
  },

methods: {

    showContents: function (event) {
        alert('Load');
        this.contents = this.contents+": READ:" + event.target.result;
    }

    readSingleFile: function (event) {
      
      this.contents = "Clicked!"
      if (window.File && window.FileReader && window.Blob ) {
        this.contents = "Valid!"
      }
      alert('Clicked!');
      
      var f = event.target.files[0];
      this.contents = "Selected: " + f.name;
      alert('File: '+f.name+' - '+f.size+' bytes')
      
      if (!f) {
        this.contents = "NULL";
        return;
      }
      this.contents = "Reading: " + f.name
      
      var reader = new FileReader();
      reader.onload = showContents;
    
      reader.onloadstart = function(e) {
        alert('Start');
        this.contents = this.contents+": START:" + e.target.result;
      };
      reader.onloadend = function(e) {
        alert('End');
        this.contents = this.contents+": END:" + e.target.result;
      };
      reader.onerror = function(e) {
        alert('Error');
        this.contents = this.contents+": ERROR:" + e.target.result;
      }
      
      reader.readAsText(f);
    
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
