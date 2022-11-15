<template>
    <div id="formdetail">
        <form>
        <label> name:-</label>
        <input type="text" v-model.lazy="blog.title" placeholder="name" required>
        <label>contant:-</label>
        <textarea v-model.lazy="blog.contant"></textarea>
            <div>
            <p>city:-</p>
                <label>Ahmedabad</label>
                <input type="checkbox" value="Ahmedabad" v-model="blog.categories">
                <label>Surat</label>
                <input type="checkbox" value="Surat" v-model="blog.categories">
                <label>Rajkot</label>
                <input type="checkbox" value="Rajkot" v-model="blog.categories">
                <label>Ghandhinagar</label>
                <input type="checkbox" value="Ghandhinagar" v-model="blog.categories">    
            </div>
            <p>select color:-</p>
            <select v-model="blog.color">
                <option v-for="color in colors" v-bind:key="color">{{color}}</option>
            </select>
           
            <button v-on:click.prevent="post">submit</button>
    </form>
    <div v-if="submitted">
        <h3>thanks for details.....</h3>
    </div>
        <div>
         <h3>details</h3>
         <p>name:-{{ blog.title}}</p>
         <p>contant:-{{blog.contant}}</p>
         <p>city:-</p>
         <ul>
            <li  v-for="category in blog.categories" v-bind:key="category">{{category}}</li>
         </ul>
         <p>color :-{{blog.color}}</p>
        </div>
    </div>
</template>

<script>

export default {
      data() {
          return {
            blog:{
                title:'',
                contant:'',
                categories:[],
                color:''
            },
           colors:['red','yellow','green','pink'],
           submitted:false
          };
      },
      methods:{
       post:function(){
        this.$http.post('https://test-98bc0-default-rtdb.firebaseio.com/posts.json', this.blog   
        
            // {title:this.blog.title,
            // body:this.blog.contant,}
        ).then(function(data){
            console.log(data)
            this.submitted=true
        });

       }
      },  
}
</script>
  
<style scoped>
#formdetail{
    width: 100%;
    padding: 50px;
    align-content: center;
}
form{
    margin: 0 auto;
}
</style>