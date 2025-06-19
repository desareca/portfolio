<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src='https://www.mdpi.com/cleantechnol/cleantechnol-02-00011/article_deploy/html/images/cleantechnol-02-00011-g001.png'>
</div>
<br><br>			
Los mapas autorganizados de Kohonen son un algoritmo que a partir de un proceso iterativo de comparacion con un conjunto de datos y cambios para aproximarse a los mismos, crea un modelo de esos mismos datos que puede servir para agruparlos por criterios de similitud; adicionalmente, este agrupamiento se produce de forma que la proyeccion de estos datos sobre el mapa distribuya sus caracteristicas de una forma gradual. El Mapa de Kohonen, SOM se usa para diferentes aplicaciones:
<ul>			
<li>Clustering: se pueden agrupar datos del conjunto de entrada, atendiendo a diferentes criterios.
<li>Visualizacion: este agrupamiento, como se realiza de una forma ordenada, permite visualizar al conjunto de entrada y descubrir caracteristicas nuevas o relaciones que no se habian previsto de antemano. Tambien permite visualizar la evolucion temporal de un conjunto de datos: proyectando un vector en etapas sucesivas sobre un mapa entrenado se ve como se va moviendo de una zona con unas caracteristicas determinadas a otra.
<li>Clasificacion: aunque el entrenamiento del mapa no tiene en cuenta la etiqueta de clase o el tipo de cada uno de los vectores de entrada, una vez terminado el entrenamiento se puede asignar algun tipo de etiqueta a cada nodo, y se puede usar para clasificar datos desconocidos.
<li>Interpolacion de una funcion: asignando valores numericos a cada uno de los nodos de la red de Kohonen, se pueden asignar esos valores numericos a los vectores de entrada: a cada vector (dato) de entrada le correspondera el numero o vector asignados a la salida mas cercana.
<li>Cuantizacion vectorial: corresponde a la aplicacion de una entrada continua a una salida que esta discretizada, obteniendo a partir de un vector cualquiera el vector mas cercano de un conjunto previamente establecido.
</ul>
A continuacion se implementan mapas autorganizados para la reduccion dimensional, visualizacion de caracteristicas y clasificacion de imágenes, considerando dataset de números y de rostros.

<h2>dataset MNIST</h2>
MNIST (Instituto Nacional Modificado de Estandares y Tecnologia) es el conjunto de datos de facto de vision mundial de la vision de computadora. Desde su lanzamiento en 1999, este clasico conjunto de dato de imagenes manuscritas ha servido como base para los algoritmos de clasificacion de referencia. A medida que surgen nuevas tecnicas de aprendizaje automatico, MNIST sigue siendo un recurso confiable para investigadores y estudiantes por igual.
<br><br>			
El conjunto de datos mixto de Instituto Nacional de estandares y tecnologia (MNIST) es una coleccion de 70.000 imagenes de digitos escritos a mano. Los datos fue creados para actuar como un referente para los algoritmos de reconocimiento de imagen.
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=${AssetsImage.SomMNIST}>
</div>
<br><br>
Al entrenar un SOM con los datos del MNIST la información de cada tipo de número se ubica en zonas relativamente diferentes del resto de los demás números, esto indica que el modelo separa las caracteristicas que diferencian a cada clase.
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=${AssetsImage.SomDistNum}>
</div>
<br><br>
Utilizando la representación de los números en el SOM tenemos una clasificación con un accuraccy de 84.9%. Como se observa en la matriz de confusión, los numeros 4 y 7 con el núemro 9 presentan algunos problemas, asi como el 3 y el 8 con el numero 5.
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="50%" height="auto" src=${AssetsImage.SomMatrixNum}>
</div>
<br><br>
<h2>Face Expression</h2>
Base de datos del <strong>Advanced Multimedia Processing (AMP) Lab</strong> de la <strong>Cornell University</strong>, consta de 13 sujetos con 75 imágenes cada sujeto, de 64x64 píxeles en escala de grises, que muestran diferentes expresiones faciales. Estas imágenes faciales se recopilaron bajo la misma condicion de iluminación utilizando una camara CCD. Las imágenes de los rostros fueron registradas por la ubicación de los ojos.
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=${AssetsImage.SomFace}>
</div>
<br><br>
El SOM resultante de los datos de la base de datos Face Expression genera que cada rostrose ubique en zonas relativamente diferentes del resto.
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=${AssetsImage.SomDistFace}>
</div>
<br><br>
Utilizando la representación de los rostros en el SOM tenemos una clasificación con un accuraccy de 97.5%. Este resultado es muy bueno y reconoce a cada sujeto en su mayoría.
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="42%" height="auto" src=${AssetsImage.SomMatrixFace}>
</div>
<br><br>
Para revisar con más profundidad el análisis ir a los enlaces.