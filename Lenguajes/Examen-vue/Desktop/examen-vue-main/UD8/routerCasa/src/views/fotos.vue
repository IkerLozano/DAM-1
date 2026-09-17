<script setup>
import { computed, ref } from 'vue';



const fotos = ref([])
const todo = computed(() => fotos.value.length)
const fav = ref("Sin fav")

const respuesta = async () => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(resp => resp.json())
        .then(datos => fotos.value = datos)
}

respuesta()

const inicio = ref(0)
const final = ref(1)


function next() {
    inicio.value += 1
    final.value += 1
    respuesta()
}

function previous() {
    inicio.value -= 1
    final.value -= 1
    respuesta()
}


function favoritos(f) {
    fav.value = f
}

function borar() {
    fav.value = "Sin fav"
}


const cont = ref(0)

function sumar() {

    cont.value += 1
}

function restar() {

    cont.value -= 1
}


function reset() {

    cont.value = 0
}


</script>





<template>
    <div class="container">
        <div class="container m-3">
            <button @click="previous" :disabled="inicio <= 0">Anterior</button>
            <button @click="next" :disabled="final >= todo">Siguiente</button>
            <button @click="borar">Borar favorito</button>


            <div v-for="(f, i) in fotos.slice(inicio, final)">
                {{ i + 1 + inicio }} -
                <RouterLink :to="`/fotosDetalle/${f.id}`">{{ f.title }}</RouterLink>
                <br>
                <button @click="favoritos(f.title)" :disabled="fav == f.title">Favorito</button>


            </div>
            <p>Favorito: {{ fav }} </p>
        </div>






        <div class="m-4">

            <button @click="sumar">+1</button>
            <button @click="restar">-1</button>
            <button @click="reset">Rsetear</button>
            <p :style="{ color: cont > 0 ? 'green' : cont < 0 ? 'red' : black }"> Contador: {{ cont }}</p>
        </div>

    </div>
    
</template>