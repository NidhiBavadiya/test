<template>
    <header>
        <h1 v-on:click="changename">{{title}}</h1>
        <nav>
            <ul>
            <li><router-link to="/"exact>blog</router-link></li>
            <li><router-link to="/add"exact>new blog</router-link></li>
            <li><router-link to="'/blog/'+ blog.id"exact>id blog</router-link></li>
            </ul>
        </nav>
    </header>
</template>
  
<script>
import {bus} from'../main';

export default {
      data() {
          return {
            title:'header title'
          };
      },
      methods:{
        changename:function(){
            this.title='header data';
            bus.$emit('changename','header data');
            // this.$emit('changename','header data');
        }
      },
       
    
}
   //   lifecycle hook
    // beforeCreate(){
    //     alert('beforeCreate');
    // },
    // created(){
    //     alert('created');
    // },
    // beforeMount(){
    //     alert('beforeMount');
    // },
    // mounted(){
    //     alert('mounted');
    // },
    // beforeDestroy(){
    //     alert('beforeDestroy');
    // },
    // destroyed(){
    //     alert('destroy');
    // }   
</script>
  
<style scoped>
header{
    background-color: lightpink;
    padding: 10px;
    margin: 10px;
}
h1{
    text-align: center;
    color:rgb(28, 27, 27);
}
ul{
    list-style:none;
    display: flex;
}
li{
    padding: 10px;
    border: 1px solid black;
    border-radius: 30px;
    margin: 10px;
    color: black;
}
.router-link-active{
    background:white;
    color: black;
}
a{
  text-decoration: none;
    color: black;

}
</style>
  