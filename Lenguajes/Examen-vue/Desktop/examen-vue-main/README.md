# 📗 Apuntes Vue.js — Composition API

---

## 🛠️ Preparación

### Instalar Node
```bash
node --version   # comprobar si está instalado
npm -v           # comprobar npm
```

### Extensión necesaria en VS Code
**Vue (Official)** — Language Support for Vue

---

## 📦 Comandos básicos

> Se pueden ejecutar desde la terminal de VS Code o la terminal del equipo.
> Navegación en el asistente de creación: `↑ ↓` moverse · `SPACE` marcar/desmarcar · `ENTER` continuar

### 1. Crear un proyecto
```bash
npm init vue@latest
```
- **TypeScript** → No
- **Router** → Sí (si necesitas varias páginas)
- **Pinia** → Solo proyectos grandes
- **Linter / Prettier** → Opcional / Sí
- **Código de ejemplo** → No (proyecto vacío)

### 2. Instalar dependencias
```bash
cd nombre-del-proyecto
npm install
```

### 3. Ejecutar el proyecto
```bash
npm run dev
```
Abre `http://localhost:5173` en el navegador. `Ctrl+C` para parar.

### 4. Construir para producción (Netlify)
```bash
npm run build
```
Se genera la carpeta `dist/` → esa es la que se sube a Netlify.

---

## 📁 Estructura del proyecto

```
mi-proyecto-vue/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── assets/
    ├── components/
    ├── App.vue
    └── main.js
```

- `App.vue` → Componente raíz
- `main.js` → Punto de entrada donde se monta la app
- `components/` → Carpeta donde se crean los componentes

### Plantilla base de un archivo .vue
```vue
<script setup>

</script>

<template>
  <h1>Hola mundo</h1>
</template>

<style>
h1 {
  color: red;
}
</style>
```

---

## 🔧 Conceptos Vue

### `<script setup>` → Lógica (JavaScript)
Aquí va todo el código JS: variables, arrays, funciones, imports, lógica.

### `<template>` → HTML (lo que se ve)
Aquí va lo que se muestra en pantalla: HTML, variables con `{{ }}`, componentes.

---

## 📌 V-BIND ( `:` )

Sirve para enlazar atributos HTML con variables de Vue.

```html
<!-- Sin v-bind → src vale literalmente el texto "imagenUrl" -->
<img src="imagenUrl" />

<!-- Con v-bind → src vale el CONTENIDO de la variable imagenUrl -->
<img v-bind:src="imagenUrl" />

<!-- Forma corta (la más usada) -->
<img :src="imagenUrl" />
```

---

## 📌 `{{ }}`

Muestra el valor de una variable en pantalla.

```vue
<script setup>
const nombre = 'Iker'
</script>

<template>
  <h1>Bienvenidos</h1>
  <p>Hola, {{ nombre }}</p>
</template>
```

> ⚠️ Dentro de `{{ }}` **no** se pueden poner `if`, `for`, etc.

---

## 📌 V-IF / V-ELSE / V-ELSE-IF

Muestra u oculta elementos según una condición.

```vue
<script setup>
const activo = false
</script>

<template>
  <p v-if="activo">Está visible</p>
  <p v-else="activo">Está inactivo</p>
</template>
```

```html
<div v-if="activo === true"><h2>Activo vale true</h2></div>
<p v-else-if="activo === false">Activo vale false</p>
<div v-else><h2>No se sabe lo que vale activo</h2></div>
```

### V-SHOW
Hace lo mismo que `v-if` pero oculta el elemento con CSS (el elemento sigue en el DOM). No se usa casi.

---

## 📌 V-FOR

Sirve para iterar y mostrar listas de elementos.

```vue
<script setup>
const alumnos = ['Ana', 'Luis', 'Pedro']

const frutas = [
  { name: 'Manzana', price: '1.00€', stock: 0 },
  { name: 'Pera',    price: '2.50€', stock: 67 },
  { name: 'Naranja', price: '3.00€', stock: 8  },
]
</script>

<template>
  <!-- Array simple -->
  <ul>
    <li v-for="(a, i) in alumnos" :key="i">
      {{ i+1 }} - {{ a }}
    </li>
  </ul>

  <!-- Array de objetos -->
  <ul>
    <li v-for="(f, i) in frutas" :key="i">
      {{ i+1 }} - {{ f.name }} - {{ f.price }}
    </li>
  </ul>
</template>
```

### V-FOR + V-IF combinados
```html
<template v-for="(p, index) in productos" :key="p.id">
  <li v-if="p.precio > 50">
    {{ index+1 }} - {{ p.nombre }} - {{ p.precio }}
  </li>
</template>
```

---

## 📌 V-ON ( `@` )

Sirve para reaccionar a acciones del usuario (clicks, inputs...).

```vue
<button v-on:click="saludar1">Clik</button>
<button @click="saludar2('iker')">Clik con parámetro</button>
<input @input="cambiarMensaje">
```

---

## 📌 REF()

Guarda datos que cambian y que Vue debe actualizar en pantalla.

```vue
<script setup>
import { ref } from 'vue'

const nombre = ref('Juan')   // valor inicial
nombre.value = 'Iker'        // se cambia con .value
</script>
```

> 💡 Cuando uses `ref`, VS Code te lo importa automáticamente con el tabulador.

---

## 📌 COMPUTED()

Variable que se calcula automáticamente a partir de otras variables. Se recalcula sola cuando sus dependencias cambian.

```vue
<script setup>
import { ref, computed } from 'vue'

const contador = ref(5)

function incrementar() {
  contador.value++
}

const doble = computed(() => contador.value * 2)
</script>

<template>
  <button @click="incrementar">+1</button>
  <p>Contador: {{ contador }}</p>
  <p>El doble: {{ doble }}</p>
</template>
```

> ⚠️ `computed` **no** puede usarse en un `@click`. Un botón necesita una función normal.

### Diferencia ref() vs computed()

| | `ref` | `computed` |
|---|---|---|
| Para qué | Guardar un dato | Calcular a partir de otros datos |
| Se modifica | Con `.value` | Solo se lee |
| Se actualiza | Cuando tú lo cambias | Automáticamente |

---

## 📌 COMPONENTES

### 1. Crear el componente
Crear un archivo en `src/components/` (ej: `MiComponente.vue`).

### 2. Importarlo en la página principal
```vue
<script setup>
import MiComponente from './components/MiComponente.vue'
</script>

<template>
  <MiComponente />
</template>
```

---

## 📌 PROPS

Sirven para pasar información del componente **padre** al componente **hijo**.

### Componente hijo (`Componente1.vue`)
```vue
<script setup>
const props = defineProps({
  nombre: String,
  edad: Number
})
</script>

<template>
  <div class="card p-3">
    <h5>{{ nombre }}</h5>
    <p>{{ edad }}</p>
  </div>
</template>
```

### Componente padre (página principal)
```vue
<script setup>
import Componente1 from './components/Componente1.vue'

const lista = [
  { nombre: 'Iker',   edad: 19 },
  { nombre: 'Alonso', edad: 67 }
]
</script>

<template>
  <Componente1
    v-for="i in lista"
    :nombre="i.nombre"
    :edad="i.edad"
  />
</template>
```

### Resumen Props
- `:` → mandas datos **hacia el hijo** (props)
- `@` → recibes avisos **desde el hijo** (emit)

---

## 📌 EMIT

Props → el padre envía datos al hijo.
Emit → el hijo envía mensajes al padre.

---

## 📌 ROUTER

### 1. Crear la vista en `src/views/`

### 2. Añadir la ruta en `router/index.js`
```js
{
  path: '/pokemons',       // URL de la lista
  component: () => import('../views/pokemons.vue')
},
{
  path: '/pokemons/:name', // :name es variable (parámetro)
  component: () => import('../views/pokemonsDetalle.vue')
}
```

- `path` → La URL que escribes en el navegador
- `name` → El nombre interno para referirse a ella
- `component` → El archivo que carga

### 3. RouterLink (navegar entre páginas)
```html
<!-- Link fijo -->
<RouterLink to="/pokemons">Pokemons</RouterLink>

<!-- Link dinámico con variable -->
<RouterLink :to="`/pokemons/${p.name}`">{{ p.name }}</RouterLink>
```

> Lo que importa es que `path` y `to` sean iguales.

### 4. Coger el parámetro de la URL
```js
import { useRoute } from 'vue-router'
const route = useRoute()
route.params.name   // → el valor de :name en la URL
```

### 5. Volver atrás
```js
import { useRouter } from 'vue-router'
const router = useRouter()

function volver() {
  router.back()
}
```

---

## 📌 API con FETCH

```vue
<script setup>
import { ref } from 'vue'

const posts = ref([])

const conectar = async () => {
  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())   // convierte a JSON
    .then(datos => posts.value = datos.results)
}

conectar()
</script>

<template>
  <p v-for="(p, i) in posts" :key="i">
    {{ i + 1 }} - {{ p.name }}
  </p>
</template>
```

---

## 📌 API con AXIOS

Primero instalar:
```bash
npm install axios
```

```vue
<script setup>
import axios from 'axios'
import { ref } from 'vue'

const poke = ref({})

const getData = async () => {
  try {
    const respuesta = await axios.get('https://api.com/datos')
    poke.value = respuesta.data
  } catch (error) {
    console.log('Error', error)
  }
}

getData()
</script>
```

### Diferencia fetch vs axios

| | `fetch` | `axios` |
|---|---|---|
| Import | No necesita | `import axios from 'axios'` |
| Convertir JSON | `.then(r => r.json())` | Ya lo hace solo |
| Los datos | `datos` | `respuesta.data` |
| Errores | Manual | `try/catch` |

---

## 🚀 Subir a Netlify

1. Hacer el build: `npm run build`
2. Ir a [netlify.com](https://netlify.com)
3. Subir la carpeta `dist/`

---

## 📤 Subir a GitHub

```bash
git init
git add .
git commit -m "primer commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```
