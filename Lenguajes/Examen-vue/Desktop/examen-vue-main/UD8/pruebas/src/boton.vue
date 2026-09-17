<script setup>
import { computed, ref } from 'vue';


const contador = ref(0)

function sumar(){
    return contador.value++
}

function restar(){
    return contador.value--
}


function resetear(){
    return contador.value = 0,
    vacio.value = []
}

//<const rest = computed(() => contador.value = 0)


const pintar = computed(() =>{
    if (contador.value === 0){
        return 'cero'
    }
    return contador.value > 0 ? 'verde' : 'rojo'
})


const vacio = ref([])

function llenar(){
    vacio.value.push(contador.value)

}



</script>




<template>

    <button @click="sumar">+1</button>
    <button @click="restar">-1</button>
    <button @click="resetear">resetear</button>
    <button @click="llenar">Añadir a favoritos</button>
    
    <p v-bind:class="pintar">contador: {{ contador }}</p>
    
    <p v-for="i in vacio">
        {{ i }}
    </p>


</template>



<style>

    .verde{
        color: green
    }

     .rojo{
        color: red
    }

</style>