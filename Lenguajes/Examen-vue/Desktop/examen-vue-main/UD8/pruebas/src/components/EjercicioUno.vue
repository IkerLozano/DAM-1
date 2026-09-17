<script setup>

    const props = defineProps({
        id:Number,
        nombre: String,
        precio:Number,
        stock: Number,
        categoria: String,
        mensaje: String
    })


   



</script>



<template>

    <div class="border">
        <ul>
            <li>
                <p>id: {{ id }}</p>
                <p>nombre: {{ nombre }}</p>
                <p>precio: {{ precio }}€</p>
                <p>stock: {{ stock }}</p>
                <p>categoria: {{ categoria }}</p>
                <p v-if="mensaje">{{ mensaje }}</p>
            </li>
        </ul>
    </div>

</template>