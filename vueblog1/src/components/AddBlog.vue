<template>
  <div id="add-blog">
      <h1>Add New Blog</h1>
    <form action="" v-if="!submmited">

        <label for="blog-'title">Blog Title:</label>
        <input type="text" v-model.lazy="blog.title" required>
        <label for="blog-content"> Blog Contents:</label>
        <textarea name="content" v-model.lazy="blog.content" id="blog-content" ></textarea>

        <div id="checkboxs">
            <label for="">Social</label>
            <input type="checkbox" value="social" v-model="blog.categories">
            <label for="">Public</label>
            <input type="checkbox" value="public" v-model="blog.categories">

            <label for="">Private</label>
            <input type="checkbox" value="private" v-model="blog.categories">

            <label for="">Personal</label>
            <input type="checkbox" value="personal" v-model="blog.categories">

        </div>
        <label for="">Author </label>
        <select  v-model="blog.author">
            <option  v-for="author in authors"> {{ author }} </option>
        </select>
        <button v-on:click.prevent="post">Post</button>
    </form>
    <div v-if="submmited">
        <h4> Your post has been created successfully</h4>
    </div>
    <div id="preview">
        <h3>Blog Preview</h3>
        <p>Blog Title: {{ blog.title }} </p>
        <p>Blog Contents:  </p>
        <p>{{ blog.content }}</p>
        <p>Blog Categories:</p>
        <ul>
            <li v-for="category in blog.categories"> {{category}} </li>
        </ul>

        <p>Blog Author: {{ blog.author }} </p>
    </div>

  </div>
</template>

<script>
export default {

  data () {
    return {
      blog:{
        title:"",
        content:"",
        categories:[],
        author:""
      },
      authors:['Madiba channel 52', 'Kimbali channel 12', 'Cisekedi channel 20'],
      submmited:false,
    }
  },
  methods:{
      post:function(){
          this.$http.post('https://vuejsdatabasetest.firebaseio.com/posts.json', this.blog).then(function(data){
              console.log(data);
              this.submmited = true
          });
      }
  }
}
</script>

<style >
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;

}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type='text'], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxs input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxs label{
    display: inline-block;
}
</style>
