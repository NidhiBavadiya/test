import ShowBlog from'./components/ShowBlog.vue'
import ex_inputbinding from './components/ex_inputbinding.vue'
import SinglePera from './components/SinglePera.vue'

export default[
    {path:'/',component:ShowBlog},
    {path:'/add',component:ex_inputbinding},
    {path:'/blog/:id',component:SinglePera}

]