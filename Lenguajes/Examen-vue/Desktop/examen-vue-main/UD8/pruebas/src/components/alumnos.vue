<script setup>
import { ref } from 'vue';


const props = defineProps({
    nombre:String,
    nota: Number
})


const mostrar = ref(false)  // empieza oculto



</script>



<template>

<div class="card p-2 m-3">
    <p>Nombre: {{ nombre }}</p>
    <p>Nota: {{ nota }}</p>

    <!-- Al pulsar, mostrar se pone true -->
    <button @click="mostrar = true">Ver resultado</button>

    <p v-if="mostrar && nota >=5" style="color: green;">Aprobado</p>
    <p v-if="mostrar && nota <5" style="color: red;">Suspenso</p>
</div>


</template>