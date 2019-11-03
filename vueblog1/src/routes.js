import ListBlogs from './components/ListBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import singleBlog from './components/singleBlog.vue'


export default[
  {path: '/', component:ListBlogs},
  {path: '/add', component:AddBlog},
  {path:'/blog/:id', component:singleBlog}
]
