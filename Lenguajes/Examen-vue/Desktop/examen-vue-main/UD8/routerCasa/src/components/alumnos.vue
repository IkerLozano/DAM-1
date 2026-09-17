<script setup>

const props = defineProps({
    nombre:String,
    nota:Number
})



</script>





<template>

    <p>Alumnos:
        <p>{{ nombre }}</p>
        <p>{{ nota }}</p>
    </p>



</template>