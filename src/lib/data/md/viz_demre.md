¿Cómo ha cambiado la distribución socioeconómica de los estudiantes universitarios en Chile en la última década? En este proyecto, utilizo datos del [DEMRE](https://demre.cl/portales/portal-bases-datos) para crear visualizaciones que exploran el origen escolar y el rendimiento académico de los estudiantes.

**Visualización 1: Distribución de Alumnos por Establecimiento**
- Gráfico ternario que muestra la proporción de estudiantes provenientes de colegios particulares pagados, subvencionados y públicos, por universidad y año.
- El tamaño de cada círculo representa el promedio de notas de ingreso.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.VizDemreTer}>
</div>

**Visualización 2: Evolución de Notas de Ingreso**
- Scatter plot que analiza la evolución de las notas promedio de ingreso por universidad entre 2014 y 2024, incluyendo el periodo de pandemia.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.VizDemreScatter}>
</div>

**Visualización 3: Distribución Interactiva**
- Gráfico interactivo en Svelte que permite explorar la proporción de estudiantes por tipo de establecimiento y universidad, con filtros y herramientas de búsqueda.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=${AssetsImage.VizDemreTerSvelte}>
</div>

Este análisis visual ayuda a comprender la diversidad y evolución del acceso a la educación superior en Chile.
