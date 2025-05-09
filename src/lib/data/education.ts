import Assets from './assets';
import type { Education } from './types';

const title = 'Educación';

const items: Array<Education> = [
	{
		degree: 'Magister en Data Science',
		description: '',
		location: 'Chile',
		color: 'dodgerblue',
		logo: Assets.UDD,
		name: '',
		organization: 'Universidad Del Desarrollo',
		period: { from: new Date(2024, 5, 7) },
		shortDescription: '',
		slug: 'MDS',
		subjects: ['Data Drivens Organizations', 'Estadística', 'Análisis de Datos', 'Visualización de Datos', 'Machine Learning', 'Deep Learning', 'Ciencia de Redes', 'Big Data', 'Cloud Computing', 'Seguridad de Datos', 'Visión Computacional', 'Procesamiento de Lenguaje Natural']
	},
	{
		degree: 'Especialización en Arquitectura Cloud',
		description: '',
		location: 'Chile',
		color: 'darkturquoise',
		logo: Assets.USACH,
		name: '',
		organization: 'Universidad De Santiago de Chile',
		period: { from: new Date(2023, 7, 22), to: new Date(2024, 2, 11) },
		shortDescription: '',
		slug: 'DAC',
		subjects: ['AWS', 'Tecnologías Cloud', 'Arquitectura SAS', 'Arquitecturas Monolíticas', 'Microservicios', 'Serverless', 'Seguridad']
	},
	{
		degree: 'Diplomado en Data Science',
		description: '',
		location: 'Chile',
		color: 'dodgerblue',
		logo: Assets.UDD,
		name: '',
		organization: 'Universidad Del Desarrollo',
		period: { from: new Date(2021, 10, 12), to: new Date(2022, 4, 11) },
		shortDescription: '',
		slug: 'DDS',
		subjects: ['Análisis Exploratorio', 'Inferencia Estadística', 'Aprendizaje Supervisado', 'Aprendizaje No Supervisado', 'Deeplearning']
	},
	{
		degree: 'Diplomado en Project Management',
		description: '',
		location: 'Chile',
		color: 'black',
		logo: Assets.UAI,
		name: '',
		organization: 'Universidad Adolfo Ibáñez',
		period: { from: new Date(2015, 2, 2), to: new Date(2016, 2, 1) },
		shortDescription: '',
		slug: 'DPM',
		subjects: ['Gestión de Proyectos', 'PMBoK', 'Gestión de Costos', 'Gestión de Tiempo', 'Gestión de Calidad', 'Gestión de Alcance']
	},
	{
		degree: 'Ingeniería Civil Electrónica',
		description: '',
		location: 'Chile',
		color: 'midnightblue',
		logo: Assets.UFRO,
		name: '',
		organization: 'Universidad de la Frontera',
		period: { from: new Date(2000, 0, 3), to: new Date(2008, 0, 1) },
		shortDescription: '',
		slug: 'ICE',
		subjects: ['Automatización Industrial', 'Control Avanzado', 'Redes de Datos', 'Microprocesadores', 'Electrónica de Potencia', 'Máquinas Eléctricas', 'Simulación de Procesos', 'Procesamiento de Señales', 'Sistemas', 'Estructuras de Datos y Algoritmos', 'Algebra', 'Cálculo', 'Física', 'C++', 'Matlab', 'English', 'Administración', 'Evaluación de Proyectos']
	},

];

const EducationData = { title, items };

export default EducationData;
