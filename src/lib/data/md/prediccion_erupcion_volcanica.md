<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src="https://images.pexels.com/photos/13337517/pexels-photo-13337517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
</div>
<br><br>
El Instituto Nacional de Geofísica y Vulcanología (INGV) de Italia se centra en la geofísica y la vulcanología. Su principal objetivo es contribuir a la comprensión del sistema terrestre y, al mismo tiempo, mitigar los riesgos asociados. Encargado de monitorear la sismicidad y la actividad volcánica activa las 24 horas del día en todo el país, el INGV busca encontrar los precursores detectables más tempranos que proporcionen información sobre la cronología de futuras erupciones volcánicas.
<br><br>
El objetivo es predecir cuándo ocurrirá la próxima erupción de un volcán, para ello se analiza un amplio conjunto de datos geofísicos recopilados por sensores instalados en volcanes activos, calculando features de las series temporales para entrenar un modelo XGBoost que prediga cuando será la próxima erupción.

<h2>Extracción de Características</h2>
Para la extracción de carácterísticas de utiliza el siguiente pipeline:
<ul>
    <li>Para extraer características típicas de series temporales, como por ejemplo media movil, autocorrelación, etc., se utiliza la librería <strong>tsfeatures</strong>.</li>
    <li>Además, se complementa con la transformada wavelet de cada serie temporal utilizando la librería <strong>biwavelet</strong>.</li>
    <li>Para seleccionar las características más relevantes se utilzan algoritmos genéticos.</li>
</ul>
<h2>Modelo</h2>
Para el modelo, se utiliza XGBoost con los siguientes hiperparámetros:
<ul>
    <li>Validación: Bootstrap adaptativo.</li>
    <li>N.° de folds: 7.</li>
    <li>Búsqueda: aleatoria.</li>
    <li>Longitud de búsqueda: 70.</li>
    <li>Algoritmo: XGBTree.</li>
</ul>
Obteniendo un buen desempeño estimando el tiempo de la próxima erupción, tal como se muestra en el gráfico de comparación de predicción vs real.
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="60%" height="auto" src=${AssetsImage.INGVPred}>
</div>
<br><br>
Para revisar el código y profundizar en el modelo ir al siguiente enlace.