<script setup>
import { ref } from 'vue';
import Componente1 from './components/componente1.vue';
import Contador from './components/contador.vue';

const lista = [{
    nombre:"Iker", 
    edad: 19
},
{
    nombre:"Alosno",
    edad:67
}]

const total = ref(0)


</script>



<template>

    <h1>Componentes</h1>

    <Componente1 v-for="i in lista"
        :nombre="i.nombre",
        :edad="i.edad"
    />
    

    <h2>Total: {{ total }}</h2>
    <Contador @aumentar="total++" />




</template>

