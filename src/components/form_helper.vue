<template>
    <div>
      <h1>fill the form....</h1>
      <div id="form_header">
        <slot name="form_header"></slot>
      </div>
      <div id="form_inputs">
        <slot name="form_inputs"></slot>
      </div>
      <div id="form_controls">
        <slot name="form_controls"></slot>
      </div>
   </div>
</template>
  
<script>

export default {
      data() {
          return {
         
          };
      },
      methods:{
       
      },  
}
</script>
  
<style scoped>
h1{
    color: crimson;
}
</style>
  