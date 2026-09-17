<script setup>
import router from '@/router';
import { ref } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()
const detalles = ref({})

const respuesta = async () => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${route.params.id}`)
        .then(respuesta => respuesta.json())
        .then(datos => detalles.value = datos)
}


respuesta()

function volver() {
    router.back()
}

</script>




<template>

    <div v-if="detalles.id">
        <h1>Nombre: {{ detalles.name }}</h1>
        <p>{{ detalles.email }}</p>
        <button @click="volver">Atras</button>
    </div>



</template>