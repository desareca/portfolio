<h1>Busqueda de Patrones utilizando herramientas de aprendizaje no supervisado.</h1><br>
A continuación se explora el dataset visualmente utilizando <strong>PCA</strong>, <strong>ISOMAP</strong>, <strong>t-SNE</strong> y <strong>SOM</strong>. Se considera encontrar relaciones entre días de la semana, productos y nivel de ventas.
<br><br>
<strong>PCA</strong> no funciona muy bien, aunque logra diferenciar claramente los días. Además, relaciona ciertos días entre sí, como el jueves y miércoles o lunes viernes y sábado. Por otro lado, genera una direrenciación entre las papas fritas y el resto de productos, aunque no es muy claro con el resto de productos y los niveles de ventas diarias son indistinguibles.

<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaPCA}>
</div>
<br><br>

En el caso de <strong>ISOMAP</strong> se observa un poco más de variación, también logra separar los días, estando algunos muy cercanos como viernes y sábado o lunes y miércoles (practicamente indistinguibles). En el caso de los productos nuevamente sólo logra una separación entre papas fritas con el resto de los productos.

<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaISOMAP}>
</div>
<br><br>

Al aplicar <strong>t-SNE</strong> se generan patrones interesantes, por un lado al hacer divisiones parcialmente horizontales tenemos la separación de los días y al hacer divisiones parcialmente verticales tenemos la separación de los productos. No hay división clara para los niveles de venta diaria.

<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaTSNE}>
</div>
<br><br>

El <strong>SOM</strong> separa claramente las ventas por día y por productos en grupos distinguibles. Además entrega una relación clara entre productos/días considerando que las celulas contiguas indican semejanza. Por otro lado, tampoco muestra relaciones claras eb los niveles de venta, aunque se aprecia un cierto patrón de ventas malas a regulares los días sábados.

<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaSOMcom}>
</div>
<br><br>

Más detalle sobre este análisis en el siguiente enlace:

