<script setup>
import Servicios from './Servicios.vue';


//Creó una lista de objetos

const servicios = [
    {
        imagen_url: 'https://picsum.photos/300/200',
        titulo: 'Dise�o Web',
        descripcion: 'Creamos sitios web modernos y adaptativos.',
        texto_boton: 'Solicitar'
    },
    {
        imagen_url: 'https://picsum.photos/300/200',
        titulo: 'Mantenimiento',
    },
    {
        imagen_url: 'https://picsum.photos/300/200',
        titulo: 'Posicionamiento SEO',
        descripcion: 'Mejoramos la visibilidad en buscadores.',
        texto_boton: 'Mas info'
    },
    {
        imagen_url: 'https://picsum.photos/300/200',
        titulo: 'Consultoria',
    }
]



</script>




<template>

<!--Recorro la lista y para cada cosa, pasa sus datos al componente -->

    <div class="container py-5">


        <h1 class="mb-4">Ejercicio 4: Componentes</h1>

        <div class="container my-5">
            <h2>Nuestros servicios</h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div class="col" v-for="s in servicios">
            
                        <Servicios
                            :imagen_url="s.imagen_url" 
                            :titulo="s.titulo"
                            :descripcion="s.descripcion" 
                            :texto_boton="s.texto_boton" 
                        />
                    
                </div>

            </div>

        </div>



    </div>






</template>