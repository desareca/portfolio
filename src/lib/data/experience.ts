import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experiencia';

const items: Array<Experience> = [
	{
		slug: 'Data-Scientist-Evolet',
		company: 'Evolet Group',
		description: `Desarrollo e implementación de dashboards y reportes estratégicos que facilitan el acceso a información clave en tiempo real para la toma de decisiones corporativas. Destacan proyectos enfocados en la automatización y optimización de procesos de gestión de datos, lo que reduce la dependencia de tareas manuales y mejora la eficiencia operativa. Implementación de soluciones integrales de análisis, validación y limpieza de datos, garantizando la coherencia y confiabilidad de la información utilizada en reportes y modelos predictivos. Integración de modelos de machine learning y herramientas analíticas ha permitido anticipar tendencias y optimizar la estrategia empresarial. Soporte técnico y analítico a diversas áreas para agilizar el procesamiento y la presentación de datos críticos. Iniciativas que contribuyen a simplificar la gestión de información y elevar la calidad en la toma de decisiones a distintos niveles de la organización.`,
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
