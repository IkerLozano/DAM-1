<script setup>

import TarjetaAlumno from './components/TarjetaAlumno.vue';


const alumnos = [{
    nombre: "Iker",
    curso: "Dam1",
    email: "ilozanor@iesch.org"
},
{
    nombre: "Andres",
    curso: "Dam1",
    email: "astan@iesch.org"
},
{
    nombre: "Hecproll",
    curso: "Dam1",
    email: "hecproll@iesch.org"
}]

</script>



<template>

    <TarjetaAlumno v-for="i in alumnos"
        :nombre="i.nombre"
        :curso="i.curso"
        :email="i.email"
    />

</template>