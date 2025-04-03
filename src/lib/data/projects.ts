import Assets  from './assets';
import AssetsImage  from './assetsImage';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'venta-comida-rapida-1',
		color: 'steelblue',
		description:
			`<h1>Análisis Exploratorio e Inferencia para determinar estacionalidad en las ventas.</h1>
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
			Además, sólo se consideran los meses de Diciembre, Enero y Febrero, debido a que este tipo de negocio es mayormente estacional y la simulación podría no ser necesariamente válida considerando un año completo.`,
		shortDescription:
			'Predicción de erupciones volcánicas con XGBoost',
		links: [
			{ to: 'https://colab.research.google.com/drive/18JFP09N0xWcBOtIUZYPHgAdcuKqQk4yo#scrollTo=D1J1UYzNW67C', label: 'Colab' }
		],
		logo: Assets.Python,
		name: 'Ventas Local de Comida Rápida - Parte I',
		period: {
			from: new Date(2020, 10, 11),
			to: new Date(2021, 0, 5),
		},
		skills: getSkills('python', 'numpy', 'matplotlib'),
		type: 'Análisis de Datos',
		screenshots: [
			{
				label: 'Análisis Exploratorio General',
				src: AssetsImage.ComidaAnalisis
			},
			{
				label: 'Análisis Exploratorio por Producto',
				src: AssetsImage.ComidaProd
			},
			{
				label: 'Simulación Monte Carlo',
				src: AssetsImage.ComidaMonteCarlo
			}
		]
	},
	{
		slug: 'prediccion-erupcion-volcanica',
		color: 'royalblue',
		description:
			`El Instituto Nacional de Geofísica y Vulcanología (INGV) de Italia se centra en la geofísica y la vulcanología. Su principal objetivo es contribuir a la comprensión del sistema terrestre y, al mismo tiempo, mitigar los riesgos asociados. Encargado de monitorear la sismicidad y la actividad volcánica activa las 24 horas del día en todo el país, el INGV busca encontrar los precursores detectables más tempranos que proporcionen información sobre la cronología de futuras erupciones volcánicas.
			<br><br>
			El objetivo es predecir cuándo ocurrirá la próxima erupción de un volcán, para ello se analiza un amplio conjunto de datos geofísicos recopilados por sensores instalados en volcanes activos, calculando features de las series temporales para entrenar un modelo XGBoost que prediga cuando será la próxima erupción.`,
		shortDescription:
			'Predicción de erupciones volcánicas con XGBoost',
		links: [
			{ to: 'https://www.kaggle.com/competitions/predict-volcanic-eruptions-ingv-oe/overview', label: 'Kaggle' }
		],
		logo: Assets.R,
		name: 'INGV - Predicción de Erupción Volcánica',
		period: {
			from: new Date(2020, 10, 11),
			to: new Date(2021, 0, 5),
		},
		skills: getSkills('r', 'tidyverse', 'ggplot2'),
		type: 'Series de Tiempo',
		screenshots: [
			{
				label: 'Error (MAE) de los Hiperparámetros',
				src: AssetsImage.INGVHiper
			},
			{
				label: 'Prediccón vs Real',
				src: AssetsImage.INGVPred
			},
			{
				label: 'Error (MAE) de Predicción',
				src: AssetsImage.INGVError
			}
		]
	},
	{
		slug: 'kaggle-survey-2020',
		color: 'royalblue',
		description:
			`El año 2020 Kaggle realizó una encuesta a nivel de toda la industria que presenta una visión verdaderamente completa del estado de la ciencia de datos y el aprendizaje automático. La encuesta estuvo activa durante 3,5 semanas en octubre y, tras depurar los datos se obtuvieron 20.036 respuestas.
			<br><br>
			Los resultados incluyen cifras sin procesar sobre quién trabaja con datos, qué está sucediendo con el aprendizaje automático en diferentes industrias y las mejores maneras para que los nuevos científicos de datos se adentren en este campo. 
			<br><br>
			A continuación se presenta un análisis con visualización interactiva de los datos.`,
		shortDescription:
			'Visualización de datos de la encuesta Kaggle 2020 sobre ciencia de datos y aprendizaje automático.',
		links: [
			{ to: 'https://www.kaggle.com/code/desareca/kaggle-survey-2020-analisys-by-region', label: 'Kaggle' }
		],
		logo: Assets.R,
		name: 'Encuesta Kaggle 2020: Análisis por región',
		period: {
			from: new Date(2020, 10, 19),
			to: new Date(2021, 0, 5),
		},
		skills: getSkills('r', 'tidyverse', 'ggplot2', 'plotly'),
		type: 'Visualización de Datos',
		screenshots: [
			{
				label: 'Cantidad de respuestas por país',
				src: AssetsImage.K2020Req
			},
			{
				label: 'Paises con mayor cantidad de respuestas',
				src: AssetsImage.K2020RankC
			},
			{
				label: 'Distribución de edades por región',
				src: AssetsImage.K2020ReqAge
			},
			{
				label: 'Distribución de sueldos por región',
				src: AssetsImage.K2020ComR
			},
			{
				label: 'Distribución de sueldos por edad',
				src: AssetsImage.K2020ComA
			},
		]
	},
	{
		slug: 'game-life-genetic-algorithm',
		color: 'royalblue',
		description:
			`El Juego de la vida es un autómata celular diseñado por el matemático británico John Horton Conway en 1970. Es un juego de cero jugadores, en el que su evolución es determinada por un estado inicial, sin requerir intervención adicional.
			<br><br>
			El juego se desarrolla en una cuadrícula de celdas, donde cada celda puede estar viva o muerta. En cada paso del tiempo, el estado de cada celda se determina por el estado de sus ocho vecinos (celdas adyacentes). Las reglas son las siguientes:
			<ul>
			<li>Una celda viva con menos de dos vecinos vivos muere (subpoblación).
			<li>Una celda viva con dos o tres vecinos vivos permanece viva (supervivencia).
			<li>Una celda viva con más de tres vecinos vivos muere (sobrepoblación).
			<li>Una celda muerta con exactamente tres vecinos vivos se convierte en una celda viva (reproducción). 
			</ul>
			<br>
			A continuación se implementa una solución utilizando algoritmos genéticos para encontrar el punto de partida edl juego a partir de estados finales.`,
		shortDescription:
			'Optimización mediante algoritmos genéticos para resolver el juego de la vida inverso.',
		links: [
			{ to: 'https://www.kaggle.com/code/desareca/game-of-life-genetic-algorithm-spanish', label: 'Kaggle' }
		],
		logo: Assets.R,
		name: 'Game of Life - Genetic Algorithm',
		period: {
			from: new Date(2020, 9, 3),
			to: new Date(2020, 9, 31),
		},
		skills: getSkills('r', 'tidyverse', 'ggplot2'),
		type: 'Optimización - Algoritmos Genéticos',
		screenshots: [
			{
				label: 'Implementación del juego de la vida',
				src: AssetsImage.GLifeExample
			},
			{
				label: 'Comparación de estados iniciales y finales',
				src: AssetsImage.GLifeStartStop
			},
			{
				label: 'Comparación de predicciones y resultados',
				src: AssetsImage.GLifePred
			}
		]
	},
	{
		slug: 'som-clasificacion-imagenes',
		color: 'royalblue',
		description:
			`Los mapas autorganizados de Kohonen son un algoritmo que a partir de un proceso iterativo de comparacion con un conjunto de datos y cambios para aproximarse a los mismos, crea un modelo de esos mismos datos que puede servir para agruparlos por criterios de similitud; adicionalmente, este agrupamiento se produce de forma que la proyeccion de estos datos sobre el mapa distribuya sus caracteristicas de una forma gradual. El Mapa de Kohonen, SOM se usa para diferentes aplicaciones:
			<ul>
			
			<li>Clustering: se pueden agrupar datos del conjunto de entrada, atendiendo a diferentes criterios.
			<li>Visualizacion: este agrupamiento, como se realiza de una forma ordenada, permite visualizar al conjunto de entrada y descubrir caracteristicas nuevas o relaciones que no se habian previsto de antemano. Tambien permite visualizar la evolucion temporal de un conjunto de datos: proyectando un vector en etapas sucesivas sobre un mapa entrenado se ve como se va moviendo de una zona con unas caracteristicas determinadas a otra.
			<li>Clasificacion: aunque el entrenamiento del mapa no tiene en cuenta la etiqueta de clase o el tipo de cada uno de los vectores de entrada, una vez terminado el entrenamiento se puede asignar algun tipo de etiqueta a cada nodo, y se puede usar para clasificar datos desconocidos.
			<li>Interpolacion de una funcion: asignando valores numericos a cada uno de los nodos de la red de Kohonen, se pueden asignar esos valores numericos a los vectores de entrada: a cada vector (dato) de entrada le correspondera el numero o vector asignados a la salida mas cercana.
			<li>Cuantizacion vectorial: corresponde a la aplicacion de una entrada continua a una salida que esta discretizada, obteniendo a partir de un vector cualquiera el vector mas cercano de un conjunto previamente establecido.
			</ul>
			A continuacion se implementan mapas autorganizados para la reduccion dimensional, visualizacion de caracteristicas y clasificacion de imágenes, considerando dataset de números y de rostros.`,
		shortDescription:
			'Clasificación de imágenes mediante mapas autorganizados de Kohonen.',
		links: [
			{ to: 'https://rpubs.com/desareca/SOM_clasificacion_imagenes', label: 'RPubs' }
		],
		logo: Assets.R,
		name: 'SOM, visualización y clasificación de imágenes',
		period: {
			from: new Date(2019, 9, 1),
			to: new Date(2019, 9, 31),
		},
		skills: getSkills('r', 'tidyverse', 'ggplot2'),
		type: 'Análisis de Datos',
		screenshots: [
			{
				label: 'Estructura general de un SOM',
				src: AssetsImage.SomGral
			},
			{
				label: 'Distribución de números por neurona',
				src: AssetsImage.SomDistNum
			},
			{
				label: 'Matriz de Confusión SOM números',
				src: AssetsImage.SomMatrixNum
			},
			{
				label: 'Distribución de rostros por neurona',
				src: AssetsImage.SomDistFace
			}
			,
			{
				label: 'Matriz de Confusión SOM rostros',
				src: AssetsImage.SomMatrixFace
			}
		]
	},
	{
		slug: 'fifa19-analisis-prediccion',
		color: 'royalblue',
		description:
			'FIFA 19 (de la saga FIFA) es un videojuego de simulación de fútbol desarrollado por EA Vancouver como parte de la serie FIFA de Electronic Arts. <br>El primer juego de la saga se caracterizaba por su perspectiva isométrica o de tres cuartos, que se diferenciaba de los otros títulos que ofrecían una vista desde arriba o vista de pájaro. Un aspecto importante era el sonido del público en el estadio, que estaba basado en grabaciones en vivo y que le proporcionaban un mayor realismo al desarrollo del juego con cánticos de los aficionados. El juego presentaba representativos nacionales, y un equipo especial formado por un selectivo de jugadores, este equipo se llama EA Sports. <br>A pesar de todos los defectos que presentaba no hay duda que en su época fue todo un éxito, la gente de EA Sports año tras año continuaba mejorando sus juegos FIFA. La nueva generación de FIFA cambio mucho, la inteligencia artificial (IA) de los jugadores es ahora más desarrollada.',
		shortDescription:
			'FIFA 19 (de la saga FIFA) es un videojuego de simulación de fútbol desarrollado por EA Vancouver como parte de la serie FIFA de Electronic Arts.',
		links: [
			{ to: 'https://www.kaggle.com/code/desareca/fifa-19-analisis-de-caracteristicas-y-prediccion', label: 'Kaggle' },
			{ to: 'https://rpubs.com/desareca/Analisis-estadisticas-FIFA19', label: 'RPubs' }
		],
		logo: Assets.R,
		name: 'FIFA 19 - Analisis de caracteristicas y predicción',
		period: {
			from: new Date(2019, 9, 1),
			to: new Date(2019, 9, 31),
		},
		skills: getSkills('r', 'tidyverse', 'ggplot2', 'h2o'),
		type: 'Análisis de Datos',
		screenshots: [
			{
				label: 'Distribución edad de los jugadores',
				src: AssetsImage.FIFA19Age
			},
			{
				label: 'Distribución club de los jugadores',
				src: AssetsImage.FIFA19Club
			},
			{
				label: 'Remuneración vs Reputación',
				src: AssetsImage.FIFA19AgeGan
			},
			{
				label: 'Ganancia Jugadores por Edad',
				src: AssetsImage.FIFA19Money
			}
			,
			{
				label: 'Valor Contrato (real vs predicción)',
				src: AssetsImage.FIFA19Pred
			}
		]
	},
	{
		slug: 'prediccion-remuneracion-futbolistas',
		color: 'steelblue',
		description:
			'Predicción de remuneraciones de futbolistas a partir de estadísticas sobre sus habilidades de juego. Para ellos se filtrarán los datos de habilidades y se realizará un análisis exploratorio para identificar patrones en los datos que permitan tener información fiable e implementar una predicción mediante una regresión lineal en tensorflow.',
		shortDescription:
			'Predicción de remuneraciones de futbolistas a partir de estadísticas sobre sus habilidades de juego.',
		links: [
			{ to: 'https://github.com/desareca/Proyectos_tensorflow/tree/master/Remuneracion-Furtbolistas', label: 'Repositorio' },
			{ to: 'https://rpubs.com/desareca/Prediccion-Sueldos-Futbolistas', label: 'RPubs' }
		],
		logo: Assets.Python,
		name: 'Predicción de remuneración de futbolistas ',
		period: {
			from: new Date(2019, 9, 1),
			to: new Date(2019, 9, 31),
		},
		skills: getSkills('python', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'sklearn', 'tensorflow'),
		type: 'Regresión',
		screenshots: [
			{
				label: 'Matriz de Correlación',
				src: 'https://github.com/desareca/Proyectos_tensorflow/raw/master/Remuneracion-Furtbolistas/corr.png'
			},
			{
				label: 'Pérdida del modelo',
				src: 'https://github.com/desareca/Proyectos_tensorflow/raw/master/Remuneracion-Furtbolistas/loss.png'
			}
		]
	},
	{
		slug: 'clasificacion-infarto-cardiaco',
		color: 'steelblue',
		description:
			'Clasificación binaria para predecir en base a las variables si un paciente con un determinado número de medidas médicas es susceptible de tener enfermedad de corazón o no.<br><ul><li>La clasificación se considerará satisfactoria si alcanza una exactitud de 0.9.<li>Para ello se realizará un análisis exploratorio de las variables evaluando que variables aportan a la predicción, posteriormente se dividirán los datos en conjunto de entrenamiento (80%) y conjunto de validación (20%).<li>Con esto se realizarán diversos algoritmos de clasificación binaria mediante ternsorflow, donde el entrenamiento se realizará utilizando validación cruzada aleatoria (en cada algoritmo hay una descripción del procedimiento utilizado).<li>Finalmente la comparación de los algoritmos se relizará con la exactitud de cada algoritmo sobre el conjunto de validación.</ul>',
		shortDescription:
			'Clasificación binaria para predecir en base a las variables si un paciente con un determinado número de medidas médicas es susceptible de tener enfermedad de corazón o no.',
		links: [
			{ to: 'https://github.com/desareca/Proyectos_tensorflow/tree/master/Probabilidad-Infarto-Cardiaco', label: 'Repositorio' },
			{ to: 'https://rpubs.com/desareca/Clasificacion-infarto-cardiaco', label: 'RPubs' }
		],
		logo: Assets.Python,
		name: 'Clasificación de infarto cardíaco',
		period: {
			from: new Date(2019, 9, 1),
			to: new Date(2019, 9, 31),
		},
		skills: getSkills('python', 'pandas', 'numpy', 'matplotlib', 'sklearn', 'tensorflow'),
		type: 'Clasificación',
		screenshots: [
			{
				label: 'Matriz de Correlación',
				src: 'https://github.com/desareca/Proyectos_tensorflow/raw/master/Probabilidad-Infarto-Cardiaco/corr.png'
			},
			{
				label: 'Accuracy',
				src: 'https://github.com/desareca/Proyectos_tensorflow/raw/master/Probabilidad-Infarto-Cardiaco/acc.png'
			}
		]
	},
	{
		slug: 'analisis-consumidores-mall',
		color: 'steelblue',
		description:
			'Regresión para predecir el puntaje de los clientes en un mall.<br>Para el análisis se considerará:<br><ul><li>Un breve análisis exploratorio de los datos.<li>Dividir los datos en conjunto de entrenamiento y validación (80%-20%).<li>Con esto se realizarán diversos algoritmos de regresión mediante ternsorflow, donde el entrenamiento se realizará utilizando validación cruzada aleatoria (en cada algoritmo hay una descripción del procedimiento utilizado).<li>El conjunto de validación se utilizará para comparar el RMSE de cada método.</ul>',
		shortDescription:
			'Regresión para predecir el puntaje de los clientes en un mall.',
		links: [
			{ to: 'https://github.com/desareca/Proyectos_tensorflow/tree/master/Analisis-Consmidores', label: 'Repositorio' },
			{ to: 'https://rpubs.com/desareca/Analisis_Consumidores', label: 'RPubs' }
		],
		logo: Assets.Python,
		name: 'Análisis de Consumidores de un Mall',
		period: {
			from: new Date(2019, 9, 1),
			to: new Date(2019, 9, 31),
		},
		skills: getSkills('python', 'pandas', 'numpy', 'matplotlib', 'sklearn', 'tensorflow'),
		type: 'Análisis de Datos',
		screenshots: [
			{
				label: 'Pérdida de Regresión Lineal (ElasticNet)',
				src: 'https://github.com/desareca/Proyectos_tensorflow/raw/master/Analisis-Consmidores/loss_elasticnet.png'
			},
			{
				label: 'Pérdida de SVM Lineal',
				src: 'https://github.com/desareca/Proyectos_tensorflow/raw/master/Analisis-Consmidores/loss_svm_lineal.png'
			},
			{
				label: 'Pérdida de KNN',
				src: 'https://github.com/desareca/Proyectos_tensorflow/raw/master/Analisis-Consmidores/loss_knn.png'
			},
			{
				label: 'Pérdida de Red Neuronal',
				src: 'https://github.com/desareca/Proyectos_tensorflow/raw/master/Analisis-Consmidores/loss_red_neuronal.png'
			}
		]
	},
	{
		slug: 'analisis-sentimientos-noticieros-chilenos',
		color: 'royalblue',
		description:
			'Twitter es actualmente una dinámica fuente de contenidos que, dada su popularidad e impacto, se ha convertido en uno de los principales medios de difusión de los principales medios de comunicación tradicionales (radio y televisión). A continuación se realizará un análisis de sentimientos de los tweets de noticieros chilenos para así concluir si hay algún patrón entre los sentimientos evocados por los tweets de los noticieros. Para ello, se analizan las publicaciones que han hecho en Twitter los noticieros de @CNNChile, @ahoranoticiasAN, @24HorasTVN, @T13 y @CHVNoticias.',
		shortDescription:
			'Twitter es actualmente una dinámica fuente de contenidos que, dada su popularidad e impacto, se ha convertido en uno de los principales medios de difusión de los principales medios de comunicación tradicionales (radio y televisión).',
		links: [
			{ to: 'https://github.com/desareca/Analisis-Sentimientos-Noticieros', label: 'Repositorio' },
			{ to: 'https://rpubs.com/desareca/Analisis_Sentimientos_Noticieros', label: 'RPubs' }
		],
		logo: Assets.R,
		name: 'Análisis de Sentimientos Noticieros Chilenos',
		period: {
			from: new Date(2019, 5, 1),
			to: new Date(2019, 5, 31),
		},
		skills: getSkills('r'),
		type: 'Análisis de Datos',
		screenshots: [
			{
				label: 'Distribución de Tweets en el tiempo',
				src: 'https://github.com/desareca/Analisis-Sentimientos-Noticieros/raw/master/Distribucion%20tweets%20tiempo.png'
			},
			{
				label: 'Analisis de Sentimientos de Tweets en el tiempo',
				src: 'https://github.com/desareca/Analisis-Sentimientos-Noticieros/raw/master/Analisis%20sentimientos%20tweets%20tiempo.png'
			},
		]
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

const title = 'Proyectos';

const ProjectsData = { title, items };

export default ProjectsData;
