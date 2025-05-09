import Assets  from './assets';
import AssetsImage  from './assetsImage';
import AssetsProject from './assetsProject';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	//dataviz-matricula-demre
	{
		slug: 'dataviz-matricula-demre',
		color: 'steelblue',
		description: AssetsProject.VizDemre,
		shortDescription:
			'Utilizando datos de ingreso y matrícula del DEMRE se realizan 2 visualizaciones que permiten analizar el estado en estos últimos 10 años de la distribución socioecónomoica de los estudiantes.',
		links: [
			{ to: 'https://github.com/desareca/DataViz-Matricula-Demre', label: 'Repositorio' },
			{ to: 'https://desareca.github.io/DataViz-Matricula-Demre/', label: 'Grafico Interactivo' }
		],
		logo: Assets.Python,
		name: `Visualización Matricula en Universidades del DEMRE entre 2014-2024`,
		period: {
			from: new Date(2025, 1, 5),
			to: new Date(2025, 3, 30),
		},
		skills: getSkills('python', 'pandas', 'numpy', 'matplotlib', 'svelte', 'd3js'),
		type: 'Análisis de Datos',
		screenshots: []
	},
	//venta-comida-rapida-4
	{
		slug: 'venta-comida-rapida-4',
		color: 'steelblue',
		description: AssetsProject.ComidaIV,
		shortDescription:
			'Busqueda de Patrones utilizando herramientas de deep learning',
		links: [
			{ to: 'https://colab.research.google.com/drive/18JFP09N0xWcBOtIUZYPHgAdcuKqQk4yo#scrollTo=D1J1UYzNW67C', label: 'Ventas Local de Comida Rápida (Parte I)' },
			{ to: 'https://colab.research.google.com/drive/1hZTWo7pMp7SQ4lD3nCYMmZHfiXkb3TFB#scrollTo=A8NGJQD5uqn3', label: 'Ventas Local de Comida Rápida (Parte II)' },
			{ to: 'https://colab.research.google.com/drive/1jHPntGoAqJ3b6CeffmmgDpeHlv-NS0TQ#scrollTo=dTFGMi0MIXih', label: 'Ventas Local de Comida Rápida (Parte III)' },
			{ to: 'https://colab.research.google.com/drive/12WJaWLLVgmc-jrzu4ibFcjx3C_i0d_hy#scrollTo=G6XKIhQSV6Ms', label: 'Ventas Local de Comida Rápida (Parte IV)' }
		],
		logo: Assets.Python,
		name: `Ventas Local de Comida Rápida (Parte IV)`,
		period: {
			from: new Date(2022, 1, 5),
			to: new Date(2022, 4, 30),
		},
		skills: getSkills('python', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'sklearn', 'keras', 'tensorflow'),
		type: 'Machine Learning',
		screenshots: []
	},
	//venta-comida-rapida-3
	{
		slug: 'venta-comida-rapida-3',
		color: 'steelblue',
		description: AssetsProject.ComidaIII,
		shortDescription:
			'Busqueda de Patrones utilizando herramientas de aprendizaje no supervisado',
		links: [
			{ to: 'https://colab.research.google.com/drive/18JFP09N0xWcBOtIUZYPHgAdcuKqQk4yo#scrollTo=D1J1UYzNW67C', label: 'Ventas Local de Comida Rápida (Parte I)' },
			{ to: 'https://colab.research.google.com/drive/1hZTWo7pMp7SQ4lD3nCYMmZHfiXkb3TFB#scrollTo=A8NGJQD5uqn3', label: 'Ventas Local de Comida Rápida (Parte II)' },
			{ to: 'https://colab.research.google.com/drive/1jHPntGoAqJ3b6CeffmmgDpeHlv-NS0TQ#scrollTo=dTFGMi0MIXih', label: 'Ventas Local de Comida Rápida (Parte III)' },
			{ to: 'https://colab.research.google.com/drive/12WJaWLLVgmc-jrzu4ibFcjx3C_i0d_hy#scrollTo=G6XKIhQSV6Ms', label: 'Ventas Local de Comida Rápida (Parte IV)' }
		],
		logo: Assets.Python,
		name: 'Ventas Local de Comida Rápida (Parte III)',
		period: {
			from: new Date(2022, 1, 5),
			to: new Date(2022, 4, 30),
		},
		skills: getSkills('python', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'sklearn'),
		type: 'Machine Learning',
		screenshots: []
	},
	//venta-comida-rapida-2
	{
		slug: 'venta-comida-rapida-2',
		color: 'steelblue',
		description: AssetsProject.ComidaII,
		shortDescription:
			'Predicción de Ventas utilizando algoritmos de Machine Learning',
		links: [
			{ to: 'https://colab.research.google.com/drive/18JFP09N0xWcBOtIUZYPHgAdcuKqQk4yo#scrollTo=D1J1UYzNW67C', label: 'Ventas Local de Comida Rápida (Parte I)' },
			{ to: 'https://colab.research.google.com/drive/1hZTWo7pMp7SQ4lD3nCYMmZHfiXkb3TFB#scrollTo=A8NGJQD5uqn3', label: 'Ventas Local de Comida Rápida (Parte II)' },
			{ to: 'https://colab.research.google.com/drive/1jHPntGoAqJ3b6CeffmmgDpeHlv-NS0TQ#scrollTo=dTFGMi0MIXih', label: 'Ventas Local de Comida Rápida (Parte III)' },
			{ to: 'https://colab.research.google.com/drive/12WJaWLLVgmc-jrzu4ibFcjx3C_i0d_hy#scrollTo=G6XKIhQSV6Ms', label: 'Ventas Local de Comida Rápida (Parte IV)' }
		],
		logo: Assets.Python,
		name: 'Ventas Local de Comida Rápida (Parte II)',
		period: {
			from: new Date(2022, 1, 5),
			to: new Date(2022, 4, 30),
		},
		skills: getSkills('python', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'sklearn'),
		type: 'Machine Learning',
		screenshots: []
	},	
	//venta-comida-rapida-1
	{
		slug: 'venta-comida-rapida-1',
		color: 'steelblue',
		description: AssetsProject.ComidaI,
		shortDescription:
			'Análisis Exploratorio e Inferencia para determinar estacionalidad en las ventas',
		links: [
			{ to: 'https://colab.research.google.com/drive/18JFP09N0xWcBOtIUZYPHgAdcuKqQk4yo#scrollTo=D1J1UYzNW67C', label: 'Ventas Local de Comida Rápida (Parte I)' },
			{ to: 'https://colab.research.google.com/drive/1hZTWo7pMp7SQ4lD3nCYMmZHfiXkb3TFB#scrollTo=A8NGJQD5uqn3', label: 'Ventas Local de Comida Rápida (Parte II)' },
			{ to: 'https://colab.research.google.com/drive/1jHPntGoAqJ3b6CeffmmgDpeHlv-NS0TQ#scrollTo=dTFGMi0MIXih', label: 'Ventas Local de Comida Rápida (Parte III)' },
			{ to: 'https://colab.research.google.com/drive/12WJaWLLVgmc-jrzu4ibFcjx3C_i0d_hy#scrollTo=G6XKIhQSV6Ms', label: 'Ventas Local de Comida Rápida (Parte IV)' }
		],
		logo: Assets.Python,
		name: 'Ventas Local de Comida Rápida (Parte I)',
		period: {
			from: new Date(2022, 1, 5),
			to: new Date(2022, 4, 30),
		},
		skills: getSkills('python', 'pandas', 'numpy', 'matplotlib'),
		type: 'Análisis de Datos',
		screenshots: []
	},
	//prediccion-erupcion-volcanica
	{
		slug: 'prediccion-erupcion-volcanica',
		color: 'royalblue',
		description: AssetsProject.Volcanic,
		shortDescription:
			'Predicción de erupciones volcánicas con XGBoost',
		links: [
			{ to: 'https://www.kaggle.com/code/desareca/automl-volcanic-eruption-prediction', label: 'Kaggle' }
		],
		logo: Assets.R,
		name: 'INGV - Predicción de Erupción Volcánica',
		period: {
			from: new Date(2020, 10, 11),
			to: new Date(2021, 0, 5),
		},
		skills: getSkills('r', 'tidyverse', 'ggplot2'),
		type: 'Series de Tiempo',
		screenshots: []
	},
	//kaggle-survey-2020
	{
		slug: 'kaggle-survey-2020',
		color: 'royalblue',
		description: AssetsProject.Kaggle2020,
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
		screenshots: []
	},
	//game-life-genetic-algorithm
	{
		slug: 'game-life-genetic-algorithm',
		color: 'royalblue',
		description: AssetsProject.GameLife,
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
		screenshots: []
	},
	//som-clasificacion-imagenes
	{
		slug: 'som-clasificacion-imagenes',
		color: 'royalblue',
		description: AssetsProject.SomClassify,
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
		screenshots: []
	},
	//fifa19-analisis-prediccion
	{
		slug: 'fifa19-analisis-prediccion',
		color: 'royalblue',
		description: AssetsProject.Fifa19,
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
		screenshots: []
	},
	//prediccion-remuneracion-futbolistas
	{
		slug: 'prediccion-remuneracion-futbolistas',
		color: 'steelblue',
		description: AssetsProject.RemFut,
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
		screenshots: []
	},
	//clasificacion-infarto-cardiaco
	{
		slug: 'clasificacion-infarto-cardiaco',
		color: 'steelblue',
		description: AssetsProject.InfCardiaco,
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
		screenshots: []
	},
	//analisis-consumidores-mall
	{
		slug: 'analisis-consumidores-mall',
		color: 'steelblue',
		description: AssetsProject.ConsumMall,
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
		screenshots: []
	},
	//analisis-sentimientos-noticieros-chilenos
	{
		slug: 'analisis-sentimientos-noticieros-chilenos',
		color: 'royalblue',
		description: AssetsProject.NoticiaChile,
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
		screenshots: []
	},
	//slick-portfolio-svelte
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description: AssetsProject.PortfolioSvelte,
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
