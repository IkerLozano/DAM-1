<script setup>


// Aquí indico que este componente puede recibir datos desde fuera: imagen_url y titulo...
const props = defineProps({
    imagen_url: String,
    titulo: String,
    descripcion: String,
    texto_boton: String
})


</script>




<template>

    <!--Aquí indico como se mostra el componente en el padre-->
    <div class="card h-100">
        <img :src="imagen_url" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ titulo }}</h5>
            <p class="card-text">{{ descripcion || 'Sin descripcion' }}</p>
            <!--si no tiene descripcion se pone 'Sin dscripcion'-->
            <div class="mt-auto">
                <button class="btn btn-primary w-100"> {{ texto_boton || 'contratar' }}</button>
            </div>

        </div>
    </div>


</template>