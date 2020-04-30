<template>
    <div>
        <p>name：{{name}}</p>
        <p>age：{{age}}</p>
        <div>
            <button @click="changeAge">Age++</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"ComProp",
    props:{
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:30
        }
    },
    methods: {
        changeAge:function(){
            this.$emit('changeAge',this.age+1)
        }
    }
}
</script>