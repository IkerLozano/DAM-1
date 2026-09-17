<template>
  <div class="card h-100 shadow-sm">
    <img
      :src="imagen_url"
      class="card-img-top"
      :alt="titulo"
      style="height: 150px; object-fit: cover;"
    />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ titulo }}</h5>
      <p class="card-text text-muted flex-grow-1">
        {{ descripcion ?? 'Sin Descripción' }}
      </p>
      <button class="btn btn-dark btn-sm mt-2">
        {{ texto_boton ?? 'Contratar' }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imagen_url: {
    type: String,
    required: true
  },
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    default: null
  },
  texto_boton: {
    type: String,
    default: null
  }
})
</script>
