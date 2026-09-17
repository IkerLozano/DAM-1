<script setup>
import router from '@/router';
import { ref } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()
const alumnos = ref({})

const respuesta = async () =>{
    fetch(`https://jsonplaceholder.typicode.com/photos/${route.params.id}`)
    .then(resp => resp.json())
    .then(datos => alumnos.value = datos)
}

respuesta()


function voler(){
    router.back()
}


</script>


<template>

    <div v-if="alumnos.id">
        <p>Titulo: {{ alumnos.title }}</p>
        <button @click="voler">Volver</button>
    </div>  


</template>