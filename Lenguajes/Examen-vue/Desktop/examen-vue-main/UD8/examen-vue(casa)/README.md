# Examen Vue - Instrucciones

## Instalación y ejecución

```bash
npm install
npm run dev
```

## Build para Netlify (Ejercicio 5)

```bash
npm run build
```

Sube la carpeta `dist/` a Netlify.

## Importante

- Cambia **"TuNombre TuApellido"** por tu nombre real en `App.vue` y `EjercicioTres.vue`
- El nombre del proyecto también debería cambiar en `package.json`: `"examen-vue-tunombre"` → `"examen-vue-albertorodriguez"` (por ejemplo)

## Estructura

```
src/
├── App.vue                  # Ejercicio 1: título con nombre + monta el resto
├── main.js
└── components/
    ├── EjercicioDos.vue     # Ejercicio 2: Marcador de baloncesto con Bootstrap
    ├── EjercicioTres.vue    # Ejercicio 3: Lista de tareas con v-for y computed
    ├── EjercicioCuatro.vue  # Ejercicio 4: Grid de servicios
    └── Servicio.vue         # Ejercicio 4: Componente reutilizable de servicio
```
