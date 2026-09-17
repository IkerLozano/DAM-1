<script setup>

    const prop = defineProps({
        nombre: String,
        curso: String,
        email: String
    })

</script>



<template>


    <div class="card p-3 m-3">
        <p>Nombre: {{ nombre }}</p>
        <p>Edad: {{ curso }}</p>
        <p>Email: {{ email }}</p>
    </div>

</template>