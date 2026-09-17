<script setup>
import { ref } from 'vue';
import { computed } from 'vue';



const tareas = ref([
  { id: 1, nombre: 'Preparar actividad de Vue', finalizada: false },
  { id: 2, nombre: 'Revisar examen de Lenguaje de Marcas', finalizada: false },
  { id: 3, nombre: 'Corregir prácticas de Bootstrap', finalizada: false },
  { id: 4, nombre: 'Subir notas al aula virtual', finalizada: false },
  { id: 5, nombre: 'Enviar recordatorio a los alumnos', finalizada: false },
])


</script>





<template>

  
    <!--EJERCICIO 2-->
    <div class="container py-5">
      <h3>Ejercicio 3: Lista de tareas</h3>

      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="v in tareas" :key="v.id">
         
          <p :class="{ 'text-decoration-line-through': v.finalizada }" >{{ v.nombre }}</p>

          <button :class="v.finalizada ? 'btn-secondary' : 'btn-success'"  @click="v.finalizada = !v.finalizada" class="btn">

            {{ v.finalizada ? 'Finalizada' : 'Pendiente' }}

          </button>
        </li>

      </ul>

    </div>





</template>