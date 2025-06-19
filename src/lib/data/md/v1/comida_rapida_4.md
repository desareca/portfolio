<h1>Predicción de Venta utilizando herramientas de deep learning.</h1>
Este análisis considera 2 partes, primero la implementación de un <strong>Autoencoder variacional</strong>, el objetivo es revisar el funcionamiento del algoritmo y generar datos sintéticos en caso de ser necesario. Luego una predicción de ventas de un local de comida rápida utilizando varios algoritmos de <strong>machine learnig</strong> y <strong>deep learning</strong>.
<br><br>

<h4>Autoencoders Variacionales (VAE)</h4><br>
Un <strong>AutoEncoder (AE)</strong> es un tipo de red neuronal que se utiliza para aprender codificaciones eficientes de datos no etiquetados ( aprendizaje no supervisado ), normalmente se utiliza para reducción de la dimensionalidad. 
<br><br>

Los <strong>Variational AutoEncoders (VAE)</strong> son modelos una combinación de <strong>AE´s</strong> con distribuciones de probabilidad. Su principal uso es el de construir modelos generativos que son capaces de producir datos sintéticos que siguen los mismos patrones que los grandes conjuntos de datos de los que se alimentan. Normalmente, se han usado para generar imágenes que asemejan, por ejemplo, características conocidas tales como caras, vehículos, habitáculos, etc. aunque en teoría podrían usarse para la generación de cualquier tipo de dato.

<br><br>
    <div style="display: flex; justify-content: center; text-align: center;">
        <img width="90%" height="auto" src=${AssetsImage.ComidaDLVae}>
    </div>
<br><br>

<h4>Predicción de Ventas con Deep Learning.</h4><br>
Se utilizan los años 2020 y 2021 para entrenamiento y 2022 para validación. Se eliminan las variables asociadas a años de los modelos para no introducir información del conjunto de validación.Además, considerando las métricas <strong>RMSE</strong> (principal), <strong>MAE</strong>, <strong>MAPE</strong> y <strong>R2</strong>. <strong>R2</strong> se utiliza particularmente para evaluar el ajuste de los modelos en entrenamiento y validación.

Con estos datos se entrenan 4 modelos diferentes y un modelo adicional considerando una <strong>CNN</strong> con datos sintéticos a partir de un <strong>VAE</strong>:
<ul>
    <li>Regresión Lineal (línea base)</li>
    <li>Random Forest (mejor modelo del caso de uso de aprendizaje supervisado)</li>
    <li>Depp Learning:</li>
    <ul>
        <li>Red de una capa densa.</li>
        <li>Red con 3 capas convolucionales en paralelo / una capa densa.</li>
        <li>Red con 3 capas convolucionales en paralelo / una capa densa, entrenada a partir de datos sintéticos generados con un <strong>VAE</strong>.</li>
    </ul>
</ul>

<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaDLReg}>
</div>
<br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaDLRF}>
</div>
<br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaDLDLRes}>
</div>
<br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaDLCNNRes}>
</div>
<br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaDLCNNVaeRes}>
</div>
<br><br>

Observando los resultados se tiene que el mejor desempeño lo obtiene el modelo que utiliza redes convolucionales sin y con datos sintéticos. Este modelo presenta un buen desempeño manteniendo un nivel de error similar de entrenamiento y validación lo que indica que no existe overfitting.

Para mayor detalle en los modelos revisar los enlaces: