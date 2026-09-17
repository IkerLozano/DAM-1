<template>
  <div class="container-fluid py-4">
    <!-- Ejercicio 1: Cabecera con nombre -->
    <div class="text-center mb-5">
      <h1 class="display-5 fw-bold">Examen Final Vue</h1>
      <p class="lead">de <strong>TuNombre TuApellido</strong></p>
    </div>

    <!-- Ejercicio 2: Marcador de Baloncesto -->
    <EjercicioDos />

    <hr class="my-5" />

    <!-- Ejercicio 3: Lista de tareas -->
    <EjercicioTres />

    <hr class="my-5" />

    <!-- Ejercicio 4: Componentes y servicios -->
    <EjercicioCuatro />
  </div>
</template>

<script setup>
import EjercicioDos from './components/EjercicioDos.vue'
import EjercicioTres from './components/EjercicioTres.vue'
import EjercicioCuatro from './components/EjercicioCuatro.vue'
</script>
