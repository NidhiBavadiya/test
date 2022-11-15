<template>
    <div>
    <h2>{{title}}</h2>
    <ul>
        <li v-for="car in cars" v-bind:key="car">{{car.name}}-{{car.color }}</li>
    </ul>
    </div>
</template>

<script>

export default {
    props:['cars','title'], 
      data() {
          return {
          
          }
      },
      methods:{
       
      },  
}
</script>
  
<style scoped>

</style>