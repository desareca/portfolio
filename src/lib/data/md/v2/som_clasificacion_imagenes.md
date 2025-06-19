<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src='https://www.mdpi.com/cleantechnol/cleantechnol-02-00011/article_deploy/html/images/cleantechnol-02-00011-g001.png'>
</div>
<br><br>
¿Se pueden descubrir patrones y clasificar imágenes complejas usando mapas autoorganizados? En este proyecto, exploro el uso de SOM (Self-Organizing Maps) para reducción dimensional, visualización y clasificación de imágenes, aplicando el método a datasets de dígitos manuscritos (MNIST) y expresiones faciales.

**Metodología:**
- Entrenamiento de SOM para agrupar y visualizar datos de alta dimensión.
- Análisis de la distribución de clases y precisión de clasificación en MNIST y un dataset de rostros.

**Resultados:**
- En MNIST, el SOM separa eficazmente los diferentes dígitos, logrando una precisión del 84.9%.
- En el dataset de rostros, el SOM alcanza una precisión del 97.5%, identificando correctamente a la mayoría de los sujetos.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=${AssetsImage.SomMNIST}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=${AssetsImage.SomDistNum}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="50%" height="auto" src=${AssetsImage.SomMatrixNum}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=${AssetsImage.SomFace}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=${AssetsImage.SomDistFace}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="42%" height="auto" src=${AssetsImage.SomMatrixFace}>
</div>

Este trabajo demuestra el poder de los SOM para visualizar y clasificar datos complejos, facilitando la interpretación y el descubrimiento de patrones ocultos.
