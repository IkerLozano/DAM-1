<script setup>
import { compile, computed, ref } from 'vue';


const posts = ref([])

const todo = computed(() => posts.value.length)



const contectar = async () => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(respuesta => respuesta.json())
        .then(datos => {
            posts.value = datos    

        })
}

contectar()



const inicio = ref(0)
const final = ref(10)


function next() {
    inicio.value += 10  // 0 → 10
    final.value += 10   // 10 → 20
    contectar()
}


function previuos() {
    inicio.value -= 10  // 0 → 10
    final.value -= 10   // 10 → 20
    contectar()
}



</script>




<template>


    <button @click="previuos" :disabled="inicio<=0">Anterior</button>
    <button @click="next" :disabled="final===todo">Siguinte</button>


    <div v-for="i in posts.slice(inicio, final)">
        {{ i.id }} - 
        <RouterLink :to="`/post/${i.id}`">{{ i.email }}</RouterLink>
    </div>


</template>