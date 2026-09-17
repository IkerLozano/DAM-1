<script setup>

    const props1 = defineProps({
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
                <p>mensaje: {{ mensaje }}</p>
            </li>
        </ul>
    </div>

</template>