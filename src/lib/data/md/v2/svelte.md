# Svelte

¿Quieres crear aplicaciones web modernas y eficientes? Svelte es un framework de componentes frontend que revoluciona la forma de construir interfaces, compilando el código a JavaScript optimizado y eliminando la sobrecarga del runtime.

**Ventajas de Svelte:**
- Compilación: Traslada el trabajo pesado al build step, generando apps más rápidas y ligeras.
- Sintaxis compacta: Usa HTML, CSS y JavaScript de forma concisa y natural.
- Funcionalidad completa: Incluye estilos encapsulados, gestión de estado, animaciones y más, sin depender de librerías externas.

## Ejemplo básico

```ts
<script>
    let count = 1;
    $: doubled = count * 2;
</script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
```

> Svelte es ideal para quienes buscan simplicidad, rendimiento y una curva de aprendizaje amigable en el desarrollo web moderno.
