<script setup>

    const props2 = defineProps({
            id:Number,
            nombre: String,
            nota:Number,
            aprobado: Number,
            curso: String
    })

</script>



<template>


    <div class="border">
        <ul>
            <li>
                <p>id: {{ id }}</p>
                <p>nombre: {{ nombre }}</p>
                <p>nota: {{ nota }}</p>
                <p>aprobado: {{ aprobado }}</p>
                <p>curso: {{ curso }}</p>
            </li>
        </ul>
    </div>


</template>