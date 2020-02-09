<template>
    <div>
        <select name="" id="" v-model='picked' autofocus  v-on:change='changePlanView'>
            <option value="" disabled>Select</option>
            <option v-for="(planName,index) in plansName" v-bind:value='planName.value' v-bind:key='index'>{{planName.text}}</option>
        </select>
 
       
        <router-view v-on:addPlan="addPlan"/>
        
    </div>
</template>


<script>


export default {
    name:'t1',
    data(){
        return {
           plansName:[{value:'ian',text:'ian'},{value:'ian2',text:'ian2'},{value:'appendPlan',text:'Add'}],
      
           picked:'',
         
        }
    },
    computed:{
      
    },
    methods:{
          changePlanView:function(value){
           if(value.srcElement.value=='appendPlan'){
                this.$router.push({path:'/test/' + value.srcElement.value})  
           }else{
               this.$router.push({path:'/test/' + 'plan/'+value.srcElement.value})  
           }
          
    },
        addPlan:function(value){
            this.plansName.push({value:value,text:value})
        }
    }
  
}
</script>