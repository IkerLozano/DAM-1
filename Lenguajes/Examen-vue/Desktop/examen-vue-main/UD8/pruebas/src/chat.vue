<script setup>
import Alumnos from './components/alumnos.vue';



const alumnos = [
    { id: 1, nombre: 'Juan', nota: 8 },
    { id: 2, nombre: 'Pedro', nota: 4 },
    { id: 3, nombre: 'Sara', nota: 9 },
]



</script>



<template>

    <p v-for="i in alumnos" :key="i.id">
        <Alumnos 
        :nombre="i.nombre" 
        :nota="i.nota" />
    </p>  

</template>