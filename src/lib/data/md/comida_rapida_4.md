<h1>Busqueda de Patrones utilizando herramientas de deep learning.</h1>
Este análisis considera 2 partes, primero la implementación de un <strong>Autoencoder variacional</strong>, el objetivo es revisar el funcionamiento del algoritmo y generar datos sintéticos en caso de ser necesario. Luego una predicción de ventas de un local de comida rápida utilizando varios algoritmos de <strong>machine learnig</strong> y <strong>deep learning</strong>.

<h2>Autoencoders Variacionales (VAE)</h2>
Un <strong>AutoEncoder (AE)</strong> es un tipo de red neuronal que se utiliza para aprender codificaciones eficientes de datos no etiquetados ( aprendizaje no supervisado ), normalmente se utiliza para reducción de la dimensionalidad. 
<br><br>

Los <strong>Variational AutoEncoders (VAE)</strong> son modelos una combinación de <strong>AE´s</strong> con distribuciones de probabilidad. Su principal uso es el de construir modelos generativos que son capaces de producir datos sintéticos que siguen los mismos patrones que los grandes conjuntos de datos de los que se alimentan. Normalmente, se han usado para generar imágenes que asemejan, por ejemplo, características conocidas tales como caras, vehículos, habitáculos, etc. aunque en teoría podrían usarse para la generación de cualquier tipo de dato.

<br><br>
<h6>Ejemplo de VAE</h6>
    <div style="display: flex; justify-content: center; text-align: center;">
        <img width="70%" height="auto" src=${AssetsImage.ComidaDLVae}>
    </div>
<br><br>

<h2>Predicción de Ventas con Deep Learning.</h2>
Se aplicaron 4 modelos Obteniendo los siguientes resultados:
<ul>
    <li>Regresión Lineal (línea base)</li>
        <div style="display: flex; justify-content: center; text-align: center;">
            <img width="90%" height="auto" src=${AssetsImage.ComidaDLReg}>
        </div>
    <li>Random Forest (mejor modelo del caso de uso de aprendizaje supervisado)</li>
        <div style="display: flex; justify-content: center; text-align: center;">
            <img width="90%" height="auto" src=${AssetsImage.ComidaDLRF}>
        </div>
    <li>Depp Learning:</li>
    <ul>
        <li>Red de una capa densa.</li>
            <div style="display: flex; justify-content: center; text-align: center;">
                <img width="90%" height="auto" src=${AssetsImage.ComidaDLDLRes}>
            </div>
        <li>Red con 3 capas convolucionales en paralelo / una capa densa.</li>
            <div style="display: flex; justify-content: center; text-align: center;">
                <img width="90%" height="auto" src=${AssetsImage.ComidaDLCNNRes}>
            </div>
        <li>Red con 3 capas convolucionales en paralelo / una capa densa, entrenada a partir de datos sintéticos generados con un <strong>VAE</strong>.</li>
            <div style="display: flex; justify-content: center; text-align: center;">
                <img width="90%" height="auto" src=${AssetsImage.ComidaDLCNNVaeRes}>
            </div>
    </ul>
</ul>