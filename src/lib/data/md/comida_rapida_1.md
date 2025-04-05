<h1>Análisis Exploratorio e Inferencia para determinar estacionalidad en las ventas.</h1>
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src=${AssetsImage.ComidaAnalisis}>
</div>
<br><br>
Como parte del Diplomado en Data Science desarrollé un conjunto de notebooks para aplicar distintas herramientas de Data Science en un contexto real y acotado.<br><br>
Para el desarrollo de este y demás notebooks se consideran los datos reales de venta de un local de comida rápida. En este caso, tenemos el archivo Ventas 2021-2022.xlsx, que contiene las ventas diarias del 2021/2022 del local. Cada fila representa la venta diaria de un producto.<br><br>
El objetivo principal es realizar una estimación de venta (2 semanas) de los principales productos del local para poder planificar la compra de suministros mediante una simulación Monte Carlo y así ningún cliente quede sin comer 🤤🍔🍟.
Además, se realiza un análisis exploratorio utilizando la librería SweetViz que entrega de manera automática las principales estadísticas y visualizaciones de un análsiis exploratorio típico y un test de hipótesis sobre como varía la estacionalidad de la venta de cada producto, con el fin de priorizar el stock de los productos.
<br><br>
<strong>Consideraciones</strong><br><br>
Para el análisis sólo se consideran los productos más relevantes en ventas y/o que están actualmente en carta, estos son:
<ul>
<li>Papas Fritas</li>
<li>Churrascos</li>
<li>Café</li>
<li>Chuleta de Cerdo</li>
<li>1/4 de Pollo</li>
<li>Carne Mechada</li>
<li>Barros Luco</li>
<li>Chacarero</li>
<li>Completo</li>
<li>SalchiPapas</li>
</ul><br>
Además, sólo se consideran los meses de Diciembre, Enero y Febrero, debido a que este tipo de negocio es mayormente estacional y la simulación podría no ser necesariamente válida considerando un año completo.