<template>
<div class="header">
  <div class="icon"></div>
  <div class="title">
    <h1>Harriet Horobin-Worley</h1>
    <div class="intro">
    <h2>Creative Software Developer and Artist</h2>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  margin: 0px;
  
}
h2{
  margin: 5px 0 5px 0;
  color: darkgrey;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.title{
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

</style>
