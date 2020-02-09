<template>
    <div>
        <h1>Append Plan</h1>
        <input type="text" v-model="newPlan">
        <button v-on:click='addPlan'>Add</button>
    </div>
</template>

<script>
export default {
    name:"appendPlan",
    data(){
        return {
            newPlan:''
        }
    },
    methods:{
        addPlan:function(){
            this.$emit('addPlan',this.newPlan)
        }
    }
}
</script>