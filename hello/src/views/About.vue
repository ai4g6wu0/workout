<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/t1">t1</router-link><br>
    <router-link to="/about/t2">t2</router-link>
    <select name="" id="" v-model='changeView'>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
    <input type="text" v-model="data" name="" id="">
    <router-view/>
  </div>
</template>


<script>
export default {
  name:'about',
  data(){
    return {
      data:'1',
      changeView:''
    }
  },
  methods:{
   
  },
  watch:{
    changeView:function(e){
      console.log(e)
    }
  }
}
</script>
