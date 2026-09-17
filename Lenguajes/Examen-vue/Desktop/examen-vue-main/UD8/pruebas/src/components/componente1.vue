<script setup>

const props = defineProps({
    nombre: String,
    edad: Number
})

</script>



<template>

<!--
    <p>Hola {{ nombre }}</p>
    <p>Edad: {{ edad }}</p>
-->


    <div class="card p-3">
        <h5>{{ nombre }}</h5>
        <p>{{ edad }}</p>
    </div>

</template>
