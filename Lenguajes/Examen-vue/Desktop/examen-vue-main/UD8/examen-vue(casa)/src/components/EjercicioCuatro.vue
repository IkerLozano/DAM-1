<template>
  <div>
    <h2 class="mb-4">Ejercicio 4: Componentes</h2>
    <h4 class="mb-3">Nuestros Servicios</h4>

    <div class="row g-4">
      <div
        v-for="servicio in servicios"
        :key="servicio.titulo"
        class="col-12 col-sm-6 col-md-3"
      >
        <Servicio
          :imagen_url="servicio.imagen_url"
          :titulo="servicio.titulo"
          :descripcion="servicio.descripcion"
          :texto_boton="servicio.texto_boton"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Servicio from './Servicio.vue'

const servicios = [
  {
    imagen_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
    titulo: 'Diseño Web',
    descripcion: 'Creamos sitios web modernos y adaptativos.',
    texto_boton: 'Solicitar'
  },
  {
    imagen_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80',
    titulo: 'Mantenimiento',
    descripcion: null,
    texto_boton: null
  },
  {
    imagen_url: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80',
    titulo: 'Posicionamiento SEO',
    descripcion: 'Mejoramos la visibilidad en buscadores.',
    texto_boton: 'Más info'
  },
  {
    imagen_url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80',
    titulo: 'Consultoría',
    descripcion: null,
    texto_boton: null
  }
]
</script>
