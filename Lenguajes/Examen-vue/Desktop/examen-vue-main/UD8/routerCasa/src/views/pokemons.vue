<script setup>
import { computed, ref } from 'vue';

//aqui se guardaran los datos
const posts = ref([])
const empezar = ref(0)
const todo = ref(0)

//obtengo los datos de la API
const conectar = async () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${empezar.value}&limit=20`)
        .then(response => response.json()) //convierto los datos a JSON
        .then(datos =>{posts.value = datos.results
                        todo.value = datos.count}
        )
    //Recibe datos (lo que devolvió el .json()) y guarda solo el 
    // array de results dentro de posts.


}

console.log(todo)


conectar() //llamo a la funcion 





function next() {
    empezar.value += 20
    conectar()
    console.log(empezar.value)
}



function previous() {
    empezar.value -= 20
    conectar()
}



</script>





<template>

    <h1>Pokemons</h1>

    <button @click="previous" :disabled="empezar<=0">Anterior</button>
    <button @click="next" :disabled="empezar+20>todo">Siguinte</button>


    <p v-for="(p, i) in posts" :key="i">
        {{ i + 1+empezar }} - 
        <RouterLink :to="`/pokemons/${p.name}`">{{ p.name }}</RouterLink>
    </p>


</template>
