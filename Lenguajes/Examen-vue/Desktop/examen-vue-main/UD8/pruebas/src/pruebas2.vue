<script setup>
import { computed, ref } from 'vue';


const nombre = ref("Juan") //Le pongo un valor inicial

nombre.value = "Iker" //lo cambio con .value

const mensaje = ref("")

function cambiarMensaje(e) {
    mensaje.value = e.target.value //tarjet es el input
}

const nombreMayus = computed(() => {
    return nombre.value.toUpperCase()
})

const precio = ref(100)
const descuento = ref(20)
const precioFinal = computed(() => precio.value - descuento.value)


const contador = ref(0)


function incrementar() {
    contador.value++
}


const multiplicar = computed(() => {
    return contador.value * 2

})


const saludar = ref("")
const mostrarSaludo = ref(false) // Controla si se muestra

function saludar2() {
     mostrarSaludo.value = true // Al pulsar el botón se muestra
}

</script>




<template>

    <h1>Hola</h1>

    <p>{{ nombre }}</p>
    <p>Nombre en mayus: {{ nombreMayus }}</p>



    <input @input="cambiarMensaje">
    <p>{{ mensaje }}</p>


    <p>{{ precioFinal }}</p>

    <button @click="incrementar">+1</button>
    <p>Contador: {{ contador }}</p>


    <p>Contador doble: {{ multiplicar }}</p>


    <div class="container">
        <h1 class="text-primary">Formulario de contacto</h1>
        <input class="form-control mb-3" v-model="saludar" placeholder="Tu nombre" />
        <button class="btn btn-success" @click="saludar2">Saludar</button>

        <div v-if="mostrarSaludo" class="alert alert-info mt-3">
            ¡Hola {{ saludar }}!
        </div>
    </div>

</template>