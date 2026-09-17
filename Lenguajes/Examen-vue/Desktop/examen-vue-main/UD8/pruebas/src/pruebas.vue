<script setup>

const nombre = 'Iker'

const activo = false

const alumnos = ['Ana', 'Luis', 'Pedro']

const descragaFrutas = [
        {
            name: "Manzana",
            price: "1.00€",
            descripcion: "Manzana del himalaia",
            stock: 0
        },
         {
            name: "Pera",
            price: "2.50€",
            descripcion: "Pera de Pascual",
            stock: 67
        },
         {
            name: "Naranja",
            price: "3.00€",
            descripcion: "Naranja de DAM1",
            stock: 8
        }
     ]


function saludar1() {
    console.log("Hola")
}

function saludar2(mensaje) {
    console.log(mensaje)
}



</script>


<template>


    <h1>Bienvenidos</h1>
    <p>Hola, {{ nombre }}</p>


    <p v-if="activo">Esta visible</p>
    <p v-else="activo">Esta inactivo</p>



    <div v-if ="activo === true"><h2>Actice vale true</h2></div>
    <p v-else-if = "activo === false">Actice vale false</p>
    <div v-else><h2>no se sabe lo que vale active</h2></div> <!--si esta null por ejmplo-->


    <!--Directiva v-show, si no quieres q se vea la va a esconder (no se usa casi nada) -->
    <hr>
    <h3>Directiva v-show</h3>
    <h2 v-show="active">Active vale true</h2>


    <hr>
    <h1>V-FOR</h1>
    <ul> <!--recorrer array normal-->
        <li v-for="(a, i) in alumnos" :key="i">
            {{ i+1 }} - {{ a }}
        </li>
    </ul>


    <ul> <!--recorrer array de objetos-->
        <li v-for="(f, i) in descragaFrutas">
            {{ i+1 }} - {{ f.name }} - {{ f.price }}
        </li>
    </ul>


    <hr>
    <h1>V-ON</h1>
    <button v-on:click="saludar1">Clik</button>
    <button @click="saludar2('iker')">Clik2</button> <!--con parametro-->

</template>

