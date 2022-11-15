<template>
 <div id="show_blog">
 <h2>get data....</h2>
 <div v-for="blog in blogs" v-bind:key="blog" class="single_blog">
 <router-link v-bind:to="'/blog/'+'blog.id'"><h3>{{blog.title}}</h3></router-link   >
 <article>{{blog.contant}}</article>
 </div>

 </div> 
</template>

<script>

export default {
      data() {
          return {
           blogs:[]
          };
      },
      methods:{
      
      },
 created() {
        this.$http.get('https://test-98bc0-default-rtdb.firebaseio.com/posts').then(function(data){
        // console.log(data)
            return data.json();
        }).then(function(data){
            var blogsArray=[];
            for(let key in data){
                data[key].id=key
                blogsArray.push(data[key]);
            }
            this.blog = blogsArray
            // console.log(blogArray);
        })
    }

    //   created() {
    //     this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
    //     this.blogs = data.body.slice(0,10);
    //     console.log()
    //     })
    // }
} 
     

</script>
  
<style scoped>

</style>