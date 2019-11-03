<template id="">
  <div id="single-blog">
    <h1> {{ blog.title }} </h1>
    <h4>Author : {{blog.author}}</h4>
    <article class="">
      {{ blog.content }}
    </article>
  </div>
</template>


<script>
  export default{
    data(){
      return{
        id: this.$route.params.id,
        blog:{}
      }

    },
    created(){
      this.$http.get('http://vuejsdatabasetest.firebaseio.com/posts/' + this.id + '.json').then(function(data){
        // console.log(data);
        // this.blog = data.content;
        return data.json();
      }).then(function(data) {
        this.blog = data;
      });
    }
  }
</script>

<style media="screen">
  #single-blog{
    max-width: 960px;
    margin: 0 auto;
  }
</style>
