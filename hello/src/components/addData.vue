<template>
    <div>
        <h1>{{projectName}}</h1>
        <label for="reps">Reps</label>
        <input v-model="reps" id="reps" type="text"/><br>
        <label for="sets">Sets</label>
        <input v-model="sets" id="sets" type="text"/><br>
        <label for="weights">Weights</label>
        <input v-model="weights" id="weights" type="text"/><br>
           <label for="rest">rest</label>
        <input v-model="rest" id="rest"  type="text"/>
        <button v-on:click="startTimeCounter">start</button>
        <button v-on:click="resetTime">stop</button>
        <br>
        <span>Volume: {{volume}}</span>
        <button v-on:click="nextSet">Next sets</button>
        <select name="" id="" v-model="choosenProject">
                <option value="Next Project" disabled>Next Project</option>
                <option v-for='(projectName,index)  in projectNames' v-bind:key='index'  v-bind:value="projectName.value" >{{projectName.text}}</option>
        </select>
        <button v-on:click="finishProject">Finish</button>
     
    </div>
</template>

<script>
export default {
    name:'addData',
    props:['projectName','projectNames'],
    data(){
        return {
            reps:0,
            sets:1,
            weights:0,
            rest:0,
            choosenProject:'Next Project',
            restTime:0,
            timeId:0,
            inputData:[]
        }
    },
    computed:{
        volume:function(){
            return this.reps*this.sets*this.weights
        },
    },
    methods:{
        startTimeCounter:function(){
            this.timeId=setInterval(()=>{
             
                this.restTime++;
                var restString= Math.floor(this.restTime/60).toString()+"M"+(this.restTime%60).toString()+"S";
                this.rest=restString;
            },1000);
        },
        resetTime:function(){
            this.restTime=0;
            this.rest="0M0S"
             clearInterval(this.timeId)   
        },
        nextSet:function(){
            if(this.reps==0){return;}
            this.inputData.push({
                reps:this.reps,
                sets:this.sets,
                weights:this.weights,
                rest:this.rest
            })
            this.reps=0,this.sets=0,this.weights=0,this.rest=0;
          
        },
        finishProject:function(){
            this.nextSet();
            var  inputString='';
            var alertString="";
            var  totolVolume=0;
            if(this.inputData.length==0){return false};
            this.inputData.map(function(data){
                inputString+="\'"+"Sets : "+data.sets+"Reps : "+data.reps+"Weights : "+data.weights+"Rests : "+data.rest+"\'" ;
                alertString+="Sets : "+data.sets+"Reps : "+data.reps+"Weights : "+data.weights+"Rests : "+data.rest+"<br/>" 
                totolVolume+=parseInt(data.sets*data.reps*data.weights);
                
            })   
             inputString+='totolVolume : '+totolVolume;
             alert(alertString);
           
        }
      

    }
    ,
    watch:{
        choosenProject:function(value){
            if(this.timeId!=0){this.restTime()}
            this.finishProject();
            this.$emit('changeProject',value);
           
        }
    },
   

}
</script>