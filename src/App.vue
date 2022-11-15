<template>
  <div> 
  <!-- <app_header v-on:click="updatetitle($event)"></app_header>  -->
   <!-- <app_header></app_header> -->
    <!-- <routing_link></routing_link> -->
  <!-- <app_demodata v-bind:cars="cars" :title="title"></app_demodata> -->

   <!-- <from_help>
      <div slot="form_header">
        <h2>detail form</h2>
        <p>informathion about form</p>
      </div>
      <div slot="form_inputs">
        <input type="text" placeholder="name" required>
        <input type="password" placeholder="password" required>
      </div>
      <div slot="form_controls">
        <button v-on:click="handlesubmit">submit</button>
      </div>
  </from_help> -->

  <!-- <keep-alive>
    <component v-bind:is="component"></component>
  </keep-alive>
    <button v-on:click="component='form_one'">show form-1</button>
    <button v-on:click="component='form_two'">show form-2</button> -->
  <ex_inputbinding></ex_inputbinding>
  <!-- <app_footer></app_footer>-->
  <Show_Blog></Show_Blog> 
   <router-view></router-view>  

  </div>
    
</template>

<script>
// import appHeader from './components/h_ex.vue'
// import appfooter from './components/f_ex.vue'
// import appdemo from './components/demo_data.vue'
// // import form_help from './components/form_helper.vue'
// // import formone from './components/form_one.vue'
// // import formtwo from './components/form_two.vue'
 import exinputbinding from './components/ex_inputbinding.vue'
 import ShowBlog from './components/ShowBlog.vue'
// import RouterLink from './components/RouterLinks.vue'


export default {
      components:{//'app_header':appHeader,
    //             'app_footer':appfooter,
    //             'app_demodata':appdemo,
    //             // 'from_help':form_help,
    //             // 'from_one':formone,
    //             // 'form_two':formtwo,
                   'ex_inputbinding':exinputbinding,
                    'Show_Blog':ShowBlog,
                //  'routing_link':RouterLink
                },
    data() {
        return {


          cars:[{name:'volvo',color:'white'},
           {name:'audi',color:'red'},
           {name:'toyato',color:'black'} ],
           title:'person name....' ,
        
          hello:'hello world',
          component:''
        };
    },
    // methods:{                                           //work when two component valur change at same time
    //   updatetitle:function(updatetitle){
    //     this.title = updatetitle
    //   }
    // }
}
  
</script>

<style>

</style>
