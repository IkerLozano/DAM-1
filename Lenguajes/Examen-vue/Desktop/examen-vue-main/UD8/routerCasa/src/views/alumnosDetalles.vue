<script setup>
import router from '@/router';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const alumnos = ref({})

const respt = async () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(respt => respt.json())
        .then(datos => alumnos.value = datos)
}


respt()

function volver(){
    router.back()
}

</script>




<template>

    <div v-if="alumnos.id" class="mt-4 border p-3">
        <h4>Nombre: {{ alumnos.name }}</h4>
        <p>Email: {{ alumnos.email }}</p>
        <p>Direccion: {{ alumnos.address }}</p>
        <button @click="volver" class="btn btn-danger">Volver</button>
    </div>





</template>