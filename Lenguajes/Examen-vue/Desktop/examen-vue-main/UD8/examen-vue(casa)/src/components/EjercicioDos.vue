<template>
  <div class="card shadow-sm mx-auto" style="max-width: 600px;">
    <div class="card-body text-center">
      <h2 class="card-title mb-4">Marcador de Baloncesto</h2>

      <div class="row align-items-center justify-content-center g-4 mb-3">
        <!-- Local -->
        <div class="col-auto">
          <h5>Local</h5>
          <h1 class="display-3 fw-bold">{{ marcadorLocal }}</h1>
          <div class="d-flex gap-2 justify-content-center">
            <button
              v-for="pts in [1, 2, 3]"
              :key="pts"
              class="btn btn-sm btn-outline-primary"
              @click="sumarLocal(pts)"
            >+{{ pts }}</button>
          </div>
        </div>

        <!-- Logo -->
        <div class="col-auto">
          <span style="font-size: 3rem;">🏀</span>
        </div>

        <!-- Visitante -->
        <div class="col-auto">
          <h5>Visitante</h5>
          <h1 class="display-3 fw-bold">{{ marcadorVisitante }}</h1>
          <div class="d-flex gap-2 justify-content-center">
            <button
              v-for="pts in [1, 2, 3]"
              :key="pts"
              class="btn btn-sm btn-outline-danger"
              @click="sumarVisitante(pts)"
            >+{{ pts }}</button>
          </div>
        </div>
      </div>

      <!-- Botones de control -->
      <div class="d-flex gap-2 justify-content-center mt-3">
        <button class="btn btn-secondary" @click="resetear">Resetear</button>
        <button
          class="btn btn-dark"
          :disabled="marcadorLocal === 0 && marcadorVisitante === 0"
          @click="terminarPartido"
        >Terminar Partido</button>
      </div>

      <!-- Resultados finales -->
      <div v-if="resultados.length > 0" class="mt-4 text-start">
        <h6 class="fw-bold">Resultados finales:</h6>
        <ul class="list-unstyled mb-0">
          <li v-for="(resultado, index) in resultados" :key="index" class="text-muted small">
            Resultado final: Local {{ resultado.local }} – {{ resultado.visitante }} Visitante
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const marcadorLocal = ref(0)
const marcadorVisitante = ref(0)
const resultados = ref([])

function sumarLocal(pts) {
  marcadorLocal.value += pts
}

function sumarVisitante(pts) {
  marcadorVisitante.value += pts
}

function resetear() {
  marcadorLocal.value = 0
  marcadorVisitante.value = 0
}

function terminarPartido() {
  if (marcadorLocal.value === 0 && marcadorVisitante.value === 0) return

  resultados.value.push({
    local: marcadorLocal.value,
    visitante: marcadorVisitante.value
  })

  marcadorLocal.value = 0
  marcadorVisitante.value = 0
}
</script>
