<script setup>
import { ref } from 'vue';
import { computed } from 'vue';


//LOCAL
const contadorL = ref(0)

const incrementar1L = () => {
    contadorL.value++
}

const incrementar2L = () => {
    contadorL.value += 2
}

const incrementar3L = () => {
    contadorL.value += 3
}


//VISITANTE
const contadorV = ref(0)

const incrementar1V = () => {
    contadorV.value++
}

const incrementar2V = () => {
    contadorV.value += 2
}

const incrementar3V = () => {
    contadorV.value += 3
}



//COMUN
const resetear = () => {
    contadorV.value = 0
    contadorL.value = 0
}


const resultado = ref([])
const ponerResultado = () => {
    resultado.value.push({
        local: contadorL.value,
        visitante: contadorV.value
    })

    resetear()
}


</script>







<template>



    <!--EJERCICIO 1-->
    <div class="container py-5">
        <h1 class="text-center mb-4">Marcador de baloncesto</h1>

        <div class="row text-center mb-4">

            <div class="col-md-5">
                <h2>Local</h2>
                <p class="display-4 fw-bold">{{ contadorL }}</p>

                <div class="bnt-group" role="group">
                    <button @click="incrementar1L" class="btn btn-primary">+1</button>
                    <button @click="incrementar2L" class="btn btn-primary">+2</button>
                    <button @click="incrementar3L" class="btn btn-primary">+3</button>

                </div>
            </div>

            <div class="col-md-2 d-flex align-items-center justify-content-center">
                <img src="./assets/logo.svg" alt="" class="img-fluid" style="max-height: 100px;">

            </div>

            <div class="col-md-5">
                <h2>Visitante</h2>
                <p class="display-4 fw-bold">{{ contadorV }}</p>

                <div class="bnt-group" role="group">
                    <button @click="incrementar1V" class="btn btn-danger">+1</button>
                    <button @click="incrementar2V" class="btn btn-danger">+2</button>
                    <button @click="incrementar3V" class="btn btn-danger">+3</button>

                </div>
            </div>
        </div>
        <div class="text-center">
            <button @click="resetear" class="btn btn-warning me-2">Resetear</button>
            <button @click="ponerResultado" class="btn btn-success"
                :disabled="contadorV === 0 && contadorL === 0">Terminar
                Partido</button>
        </div>

        <div class="mt-4">
            <h3>Resultados finales:</h3>

            <ul class="list-group">
                <li class="list-group-item" v-for="r in resultado">
                    Resultado final: Local {{ r.local }} - {{ r.visitante }} Visitante
                </li>
            </ul>

        </div>

    </div>



</template>