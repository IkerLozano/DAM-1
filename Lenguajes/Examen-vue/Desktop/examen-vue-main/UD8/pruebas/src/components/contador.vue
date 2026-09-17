<script setup>

const emit = defineEmits(['aumentar'])

</script>



<template>

    <button class="btn btn-info" @click="emit('aumentar')">Añadir 1</button>

</template>