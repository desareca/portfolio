import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experiencia';

const items: Array<Experience> = [
	{
		slug: 'Data-Scientist-Evolet',
		company: 'Evolet Group',
		description: 'Desarrollo e implementación de dashboards y reportes estratégicos, facilitando el acceso a información clave en tiempo real para la toma de decisiones corporativas. Automatización y optimización de procesos de gestión de datos, reduciendo la dependencia de procesos manuales y mejorando la eficiencia operativa. Análisis y validación de datos en conjunto con distintas áreas, asegurando la coherencia y confiabilidad de la información utilizada en reportes estratégicos. Implementación de modelos de machine learning y herramientas analíticas, mejorando la capacidad de predicción y anticipación de tendencias en la empresa. Soporte técnico y analítico a diferentas áreas, agilizando el procesamiento y presentación de datos críticos para la operación. Creación de herramientas analíticas que simplifican la gestión y el análisis de información, reduciendo la complejidad en los procesos internos. Desarrollo de procesos de validación y limpieza de datos, asegurando la calidad y consistencia de la información utilizada en distintos niveles de la empresa.',
		contract: ContractType.FullTime,
		type: 'Data Science',
		location: 'Home Office',
		period: { from: new Date(2022, 10, 0)  },
		skills: getSkills('python', 'pandas', 'numpy', 'matplotlib', 'sklearn', 'excel', 'powerbi', 'aws', 'awsec2', 'awsecs', 'awsfargate', 'awslambda', 'awsrds', 'awss3'),
		name: 'Data Scientist',
		color: 'deepskyblue',
		links: [],
		logo: Assets.EVOLET,
		shortDescription: 'Desarrollo de dashboards y automatización de procesos para mejorar la toma de decisiones y eficiencia operativa. Implementación de análisis avanzado y machine learning para anticipar tendencias. Validación y limpieza de datos para garantizar la calidad de la información en reportes estratégicos y operaciones diarias.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
