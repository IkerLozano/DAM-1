<script setup>
import { computed, ref } from 'vue';


const lenguajes = ["Java", "Python", "Kotlin", "JavaScript", "Breva"]
const vacia = []


const contador = ref(0)

function sumar() {
    return contador.value++
}


function reinicar() {
    return contador.value=0
}


const triple = computed(() => contador.value*3)

const mensaje = ref("")

function contarPalabras(p) {
    return mensaje.value = p.target.value // Guardas el texto
}

const caracteres = computed(() => mensaje.value.length)



function enviar(){
    alert("Menesaje enviado")
}

const mensaje2 = ref(" ")
function escribirMensaje(p){
    return mensaje2.value = p.target.value
}

</script>




<template>

    <h1>Ejercicio</h1>

    <ul>
        <li v-for="(l, i) in lenguajes">
            {{ i+1 }} - {{ l}}
        </li>

    </ul>

    <p v-if="vacia.length===0">La lista esta vacia</p>
    <p v-else>La lista esta llena</p>



    <button @click="sumar">+1</button>
    <p>Contador: {{ contador }}</p>
    <p>Contaor triple: {{ triple }}</p>
    <button @click="reinicar">Reiniciar contador</button>

    <br><br>
    <input @input="contarPalabras"> 
    <p>Cracteres: {{ caracteres }}</p>


    <div>
        <h1 class="text-center">Ejercicio</h1>
        <p class="text-center">Este es un ejercicio de repaso sobre VUE y BOSTRAP</p>

        <input @input="escribirMensaje">
        <br><br>
        <button class="btn btn-primary" @click="enviar">Enviar mensaje</button>
        
        
    </div>

</template>