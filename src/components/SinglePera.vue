<template>
    <div>
        <h2>{{blog.title}}</h2>
        <article>{{blog.contant}}</article>
    </div>
</template>

<script>
export default {
    data(){

        return{
            id: this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get('https://test-98bc0-default-rtdb.firebaseio.com/posts/' + this.id +'.json').them(function(data){
          return data.json();
          
          // console.log(data)
            // this.blog = data.body;
        }).then(function(data){
            this.blog = data;
        })
    }

}
</script>

<style>

</style>