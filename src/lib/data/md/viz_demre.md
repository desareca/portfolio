

Utilizando datos de ingreso y matrícula del [DEMRE](https://demre.cl/portales/portal-bases-datos) se realizan 2 visualizaciones que permiten analizar el estado en estos últimos años de la distribución socioecónomoica de los estudiantes.
<br><br>
Además, para complementar se realiza una visualización interactiva del primer gráfico en Svelte que permite visualizar la distribucuón de cada universidad en detalle.
<br><br>

<h4>Distribución de Alumnos por Establecimiento</h4><br>

Gráfico ternario que muestra la proporción de los estudiantes que provienen de cada tipo de establecimiento (particular pagado, particular subvencionado o público) por univerisidad y año.<br><br>

Cada círculo representa una universidad dado un año y su tamaño está dado por el promedio de notas de estudiantes que ingresaron a dicha institución. Su ubicación está determinada por el porcentaje del alumnado que proviene de tres distintos tipos de establecimientos: Públicos, Particulares Subvencionados y Particulares Pagados.

<br>
    <div style="display: flex; justify-content: center; text-align: center;">
        <img width="90%" height="auto" src=${AssetsImage.VizDemreTer}>
    </div>
<br><br>

<h4>Evolución de Notas de Ingreso</h4><br>

Scatter plot asociado a las notas promedios de cada universidad en el periodo 2014-2024, considerando el periodo de pandemia.

<br>
    <div style="display: flex; justify-content: center; text-align: center;">
        <img width="90%" height="auto" src=${AssetsImage.VizDemreScatter}>
    </div>
<br><br>

<h4>Distribución de Alumnos por Establecimiento (Interactivo)</h4><br>

Esta gráfico permite visualizar de manera dinámica la proporción de estudiantes de colegios particulares pagados, particulares subvencionados y públicos en todas las universidades del Demre. Cuenta con un slider para seleccionar el año específico, y al hacer doble click en este, se muestran todos los años disponibles. Además, incluye un buscador para localizar universidades rápidamente y tooltips que ofrecen resúmenes detallados de cada dato. Un clic sobre un dato específico filtra la universidad seleccionada en el gráfico, y un segundo clic revierte este filtro, permitiendo una exploración flexible y detallada de la información.

<br><br>
    <div style="display: flex; justify-content: center; text-align: center;">
        <img width="70%" height="auto" src=${AssetsImage.VizDemreTerSvelte}>
    </div>
<br><br>

El repositorio con el código y el gráfico interactivo se encuentran en los siguientes enlaces: