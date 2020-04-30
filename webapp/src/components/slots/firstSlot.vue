<template>
    <div>
        <slot :data='user'>default slot</slot>
        <slot name="slot2" :user='user2'></slot>
    </div>
</template>

<script>
export default {
    name:'firstSlot',
    data(){
    return {
        user:[{name:'ruz',age:20,gender:'man'}],
        user2:[{name:'ruz2',age:20,gender:'man'}]
    }
    }
}
</script>