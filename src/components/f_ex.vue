<template>
    <footer>
        <h1>{{title}}</h1>
    </footer>
</template>
  
<script>
import {bus} from'../main';  
export default {
      data() {
          return {
            title:'footer title'
          };
      },
    created(){
        bus.$on('changename',(data)=>{
            this.title=data;
        })
    }
}
    
</script>
  
<style scoped>
footer{
    background-color: lightgrey;
    padding: 10px;
    margin: 10px;
}
h1{
    text-align: center;
    color:rgb(28, 27, 27);
}
</style>