<script setup>
import router from '@/router';
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()
const poke = ref([])


const datos = async () => {
     try{

        const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
        poke.value = respuesta.data

     }catch (error){
         console.log("Error")

     }

}


 datos()

 function volver(){
   router.back()
 }

 
</script>



<template>

   
   <div v-if="poke.name">
      <h1>PokeDetalle: {{ route.params.name }}</h1>
      <img :src="poke.sprites.front_default" alt="">
      <button @click="volver">Atras</button>
   </div>



</template>