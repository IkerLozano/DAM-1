<template>
  <div class="mx-auto" style="max-width: 600px;">
    <h2 class="mb-4">TuNombre – Ejercicio 3: Lista de tareas</h2>

    <ul class="list-unstyled">
      <li
        v-for="tarea in tareas"
        :key="tarea.id"
        class="d-flex align-items-center justify-content-between mb-3"
      >
        <!-- Texto con tachado si finalizada -->
        <span :class="{ 'text-decoration-line-through text-muted': tarea.finalizada }">
          {{ tarea.nombre }}
        </span>

        <!-- Botón cuyo color cambia según estado (propiedad computada) -->
        <button
          class="btn btn-sm ms-3"
          :class="colorBoton(tarea)"
          @click="toggleTarea(tarea)"
        >
          {{ tarea.finalizada ? 'Finalizado' : 'Pendiente' }}
        </button>
      </li>
    </ul>

    <!-- Resumen con propiedad computada -->
    <p class="text-muted mt-3 small">
      Tareas finalizadas: {{ tareasFinalizadas }} / {{ tareas.length }}
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const tareas = ref([
  { id: 1, nombre: 'Preparar actividad de Vue', finalizada: false },
  { id: 2, nombre: 'Revisar el examen de Lenguaje de Marcas', finalizada: false },
  { id: 3, nombre: 'Corregir prácticas de Bootstrap', finalizada: true },
  { id: 4, nombre: 'Subir notas al aula virtual', finalizada: false },
  { id: 5, nombre: 'Enviar recordatorio a los alumnos', finalizada: true },
])

// Propiedad computada
const tareasFinalizadas = computed(() =>
  tareas.value.filter(t => t.finalizada)
)

function toggleTarea(tarea) {
  tarea.finalizada = !tarea.finalizada
}

// Propiedad computada para el color del botón
function colorBoton(tarea) {
  return tarea.finalizada ? 'btn-success' : 'btn-secondary'
}
</script>
