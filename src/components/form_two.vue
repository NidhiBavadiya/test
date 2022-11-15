<template>
  <div>
     <div slot="form_header">
        <h2>contact us form</h2>
      </div>
      <div slot="form_inputs">
        <input type="text" placeholder="name" required>
        <label>message:</label>
        <textarea></textarea>
      </div>
      <div slot="form_controls">
        <button v-on:click="handlesubmit">submit</button>
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

</style>
  