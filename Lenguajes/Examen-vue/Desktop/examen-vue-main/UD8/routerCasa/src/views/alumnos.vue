<script setup>
import { computed, ref } from 'vue';


const alumnos = ref([])
const todos = computed(() => alumnos.value.length)

const respuesta = async () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(resp => resp.json())
        .then(datos => alumnos.value = datos)
}


respuesta()


const favoritos = ref([])


function fav(alumno) {
    favoritos = favoritos.value.push(alumno)
}

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

function reset() {

    favoritos.value = []
}

</script>




<template>

    <div class=" container">


        <div class="container border p-4 mt-3">


            <h1 class="mt-3">Alumnos:</h1>

            <button @click="previous" :disabled="inicio <= 0" class="btn btn-primary">Anterior</button>
            <button @click="next" :disabled="final >= todos" class="m-3 btn btn-primary">Siguiente</button>
            <button @click="reset" class="m-3 btn btn-primary">Eliminar fav</button>

            <div class="card mt-1">
                <p v-for="(a, i) in alumnos.slice(inicio, final)">
                    {{ i + 1 + inicio }} -
                    <RouterLink :to="`/alumnos/${a.id}`">{{ a.name }}</RouterLink>
                    <button @click="fav(a)" class="m-3 btn btn-primary">Añadir a favorito</button>
                </p>
            </div>


        </div>

        <div class="container border mt-3 p-3">

            <h1>Alumnos favoritos:</h1>
            <ul>
                <li v-for="f in favoritos">
                    {{ f.name }}
                </li>
            </ul>

        </div>
    </div>

</template>