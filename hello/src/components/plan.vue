<template>
    <div>
        <h1>PorjectName : {{this.$route.params.planName}}</h1>
        <ul>
            <li v-for='(projectName,index) in projectNames' v-bind:key='index' >{{projectName.value}}
                <button @click='addData(projectName.value)'>Add Data</button>
                <button @click="removeProject(index)">Delete</button>
            </li>
            <li> <button v-on:click='showProjectView=!showProjectView'>Add project</button></li>
        </ul>
        <span v-if="showProjectView">
           <input type="text" v-model="newProject">
           <button v-on:click="addProject">Add</button>
        </span>
        <addData v-bind:projectName="targetProject" v-bind:projectNames="targetProjects" v-if="showAddDataView"
        v-on:changeProject='changeProject'
        ></addData>
    </div>
</template>

<script>
export default {
    name:'plan',
    data(){
        return {
            projectNames:[{value:'ian1',text:'ian1'},{value:'ian2',text:'ian2'}],
            showProjectView:false.push,
            newProject:'',
            showAddDataView:false,
            targetProject:'',
            targetProjects:[]
        }
    },
    components:{
        addData:()=>import('@/components/addData.vue')
    }
    ,
    methods:{
        addProject:function(){
            this.projectNames.push({value:this.newProject,text:this.newProject})
        },
        removeProject:function(index){
            this.projectNames.splice(index,1)
        },
        addData:function(projectName){
            this.showAddDataView=true;
            this.targetProject=projectName;
            this.targetProjects=this.projectNames;
     
        },
        changeProject:function(projectName){
               this.targetProject=projectName;
            this.targetProjects=this.projectNames;
        }
       
    }
}
</script>