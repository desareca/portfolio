import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Data Analysis', slug: 'data' }),
	defineSkillCategory({ name: 'Data Visualization', slug: 'viz' }),
	defineSkillCategory({ name: 'Machine Learning', slug: 'ml' }),
	defineSkillCategory({ name: 'Cloud Computing', slug: 'cloud' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Herramientas y Tecnologías';

const items = [
	defineSkill({
		slug: 'python',
		color: 'steelblue',
		description: 'Python es un lenguaje de alto nivel, versátil y fácil de aprender, creado por Guido van Rossum y lanzado en 1991. Su diseño enfatiza la legibilidad del código y ha evolucionado para ser usado en desarrollo web, ciencia de datos, automatización y más, consolidándose como uno de los lenguajes más populares a nivel mundial.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'r',
		color: 'royalblue',
		description: 'R es un lenguaje y entorno estadístico desarrollado a principios de los años 90 por Ross Ihaka y Robert Gentleman. Se especializa en análisis estadístico y visualización de datos, y ha ganado una gran aceptación en la academia y la industria gracias a su capacidad para manejar análisis complejos y gráficos de alta calidad.',
		logo: Assets.R,
		name: 'R',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'javascript',
		color: 'yellow',
		description: 'JavaScript nació en 1995 como una herramienta para dar interactividad a las páginas web, y desde entonces se ha transformado en el lenguaje por excelencia para el desarrollo web, tanto en el frontend como en el backend (con Node.js). Su evolución ha permitido construir aplicaciones ricas y dinámicas en internet.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'pandas',
		color: 'blue',
		description: 'Pandas es una librería de Python creada a partir de 2008, diseñada para facilitar la manipulación y el análisis de datos. Nacida de la necesidad de trabajar con grandes volúmenes de información de manera eficiente, se ha convertido en una herramienta esencial para científicos de datos y analistas.',
		logo: Assets.Pandas,
		name: 'Pandas',
		category: 'data'
	}),
	defineSkill({
		slug: 'numpy',
		color: 'deepskyblue',
		description: 'Numpy, surgida a finales de los 90, es la librería fundamental para cálculos numéricos en Python. Su capacidad para trabajar con arrays y matrices la ha posicionado como la base para casi todas las librerías científicas y de machine learning en el ecosistema Python.',
		logo: Assets.Numpy,
		name: 'Numpy',
		category: 'data'
	}),
	defineSkill({
		slug: 'excel',
		color: 'darkgreen',
		description: 'Excel es una herramienta de hojas de cálculo con orígenes que se remontan a los años 80. A lo largo de décadas, se ha convertido en el estándar para el análisis, la administración y visualización de datos en entornos empresariales y financieros, gracias a sus potentes funciones y facilidad de uso.',
		logo: Assets.Excel,
		name: 'Excel',
		category: 'data'
	}),
	defineSkill({
		slug: 'tidyverse',
		color: 'midnightblue',
		description: 'Tidyverse es un conjunto de paquetes en R que revolucionó la forma de trabajar con datos, introducido en la última década. Con una sintaxis coherente y funciones intuitivas, facilita la manipulación, análisis y visualización de datos, reflejando la evolución del lenguaje R hacia un manejo más moderno y accesible.',
		logo: Assets.Tidyverse,
		name: 'Tidyverse',
		category: 'data'
	}),
	defineSkill({
		slug: 'matplotlib',
		color: 'midnightblue',
		description: 'Matplotlib es una librería de Python lanzada en 2003 para la creación de gráficos estáticos. Inspirada en herramientas clásicas de visualización, se ha adaptado a las necesidades modernas, permitiendo desde gráficos sencillos hasta complejas visualizaciones personalizadas, ideales para informes y presentaciones.',
		logo: Assets.Matplotlib,
		name: 'Matplotlib',
		category: 'viz'
	}),
	defineSkill({
		slug: 'seaborn',
		color: 'steelblue',
		description: 'Seaborn, lanzada en 2012, es una extensión de Matplotlib que simplifica la creación de gráficos estadísticos. Con una sintaxis intuitiva, permite generar visualizaciones elegantes y con alta densidad informativa, aprovechando la base histórica de Matplotlib y modernizando la forma de presentar datos.',
		logo: Assets.Seaborn,
		name: 'Seaborn',
		category: 'viz'
	}),
	defineSkill({
		slug: 'plotly',
		color: 'black',
		description: 'Plotly es una biblioteca que permite crear gráficos interactivos y dashboards. Desde sus inicios, ha buscado integrar la interactividad en la visualización de datos, facilitando la creación de presentaciones dinámicas que se pueden incorporar en aplicaciones web y entornos colaborativos.',
		logo: Assets.Plotly,
		name: 'Plotly',
		category: 'viz'
	}),
	defineSkill({
		slug: 'ggplot2',
		color: 'darkgray',
		description: 'ggplot2 es un paquete de R basado en la “gramática de gráficos”, introducido a mediados de los 2000. Ha transformado la forma en que se crean visualizaciones en R, permitiendo construir gráficos complejos de manera estructurada y elegante, lo que lo ha convertido en una herramienta esencial para analistas y estadísticos.',
		logo: Assets.GGPlot2,
		name: 'ggplot2',
		category: 'viz'
	}),
	defineSkill({
		slug: 'powerbi',
		color: 'darkgoldenrod',
		description: 'Power BI, desarrollado por Microsoft, se consolidó en la última década como una potente herramienta de análisis de datos y creación de dashboards interactivos. Su evolución refleja la tendencia hacia soluciones colaborativas y visualmente atractivas para el entorno empresarial.',
		logo: Assets.Powerbi,
		name: 'Power BI',
		category: 'viz'
	}),
	defineSkill({
		slug: 'd3js',
		color: 'darkorange',
		description: 'D3.js es una librería de JavaScript lanzada en 2011 que revolucionó la visualización web. Permite manipular documentos basados en datos y crear gráficos interactivos y personalizados, combinando la potencia del lenguaje con técnicas avanzadas de diseño gráfico.',
		logo: Assets.D3,
		name: 'D3.js',
		category: 'viz'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'red',
		description: 'Svelte es un framework moderno para construir aplicaciones web reactivas, lanzado en 2016. A diferencia de otros frameworks, compila los componentes a código altamente eficiente, lo que se traduce en aplicaciones rápidas y con un tamaño reducido, marcando un cambio en el desarrollo frontend.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'viz'
	}),
	defineSkill({
		slug: 'sklearn',
		color: 'darkorange',
		description: 'Scikit-Learn es una librería de Python para machine learning, establecida a mediados de los 2000. Ofrece herramientas simples y eficientes para modelado predictivo, clasificación, regresión y clustering, y se ha convertido en un pilar fundamental para prototipos y proyectos de análisis de datos.',
		logo: Assets.Sklearn,
		name: 'Scikit-Learn',
		category: 'ml'
	}),
	defineSkill({
		slug: 'keras',
		color: 'firebrick',
		description: 'Keras, introducido en 2015, es una librería de alto nivel en Python para el desarrollo y entrenamiento de redes neuronales. Simplifica la creación de modelos de deep learning, permitiendo a investigadores y desarrolladores experimentar con arquitecturas complejas de forma ágil.',
		logo: Assets.Keras,
		name: 'Keras',
		category: 'ml'
	}),
	defineSkill({
		slug: 'tensorflow',
		color: 'darkorange',
		description: 'Tensorflow es una plataforma de machine learning creada por Google y lanzada en 2015. Diseñada para entrenar y desplegar modelos complejos de deep learning, ha sido adoptada tanto en entornos de investigación como en producción, gracias a su escalabilidad y versatilidad.',
		logo: Assets.TensorFlow,
		name: 'Tensorflow',
		category: 'ml'
	}),
	defineSkill({
		slug: 'h2o',
		color: 'yellow',
		description: 'H2O.ai es una plataforma de machine learning que surgió para automatizar procesos de modelado predictivo y análisis de datos. Desde su creación, se ha destacado por su capacidad de trabajar con grandes volúmenes de información y por facilitar la integración de modelos en sistemas de producción.',
		logo: Assets.H2O,
		name: 'H2O.ai',
		category: 'ml'
	}),
	defineSkill({
		slug: 'aws',
		color: 'darkorange',
		description: 'AWS, lanzado por Amazon a mediados de los 2000, es un conjunto de servicios en la nube que ha transformado la forma de desplegar y escalar aplicaciones. Ofrece soluciones integrales para infraestructura, almacenamiento y cómputo, y es la columna vertebral de numerosas empresas globales.',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'awslambda',
		color: 'darkorange',
		description: 'AWS Lambda es un servicio lanzado en 2014 que permite ejecutar código sin gestionar servidores. Esta solución serverless ha simplificado la arquitectura de aplicaciones basadas en eventos, permitiendo una escalabilidad dinámica y reduciendo la complejidad operativa.',
		logo: Assets.AWSLambda,
		name: 'AWS Lambda',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'awsec2',
		color: 'darkorange',
		description: 'AWS EC2 es uno de los servicios pioneros de Amazon en la nube, ofreciendo servidores virtuales escalables desde mediados de los 2000. Proporciona la flexibilidad y el control necesarios para hospedar aplicaciones y sistemas que requieren configuraciones personalizadas y alta disponibilidad.',
		logo: Assets.AWSEC2,
		name: 'AWS EC2',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'awsecs',
		color: 'darkorange',
		description: 'AWS ECS es un servicio para la administración y ejecución de contenedores, introducido para facilitar el despliegue de microservicios. Desde su lanzamiento, ha permitido a las empresas gestionar aplicaciones distribuidas de forma más eficiente y escalable.',
		logo: Assets.AWSECS,
		name: 'AWS ECS',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'awsrds',
		color: 'blue',
		description: 'AWS RDS es un servicio de base de datos relacional gestionada que simplifica la configuración, operación y escalabilidad de bases de datos. Desde su aparición, ha permitido a las empresas concentrarse en el desarrollo sin preocuparse por la infraestructura subyacente.',
		logo: Assets.AWSRDS,
		name: 'AWS RDS',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'awsfargate',
		color: 'darkorange',
		description: 'AWS Fargate, lanzado como parte de la evolución serverless de AWS, permite ejecutar contenedores sin gestionar la infraestructura subyacente. Es ideal para arquitecturas de microservicios, ofreciendo agilidad y escalabilidad sin la carga operativa de los servidores tradicionales.',
		logo: Assets.AWSFargate,
		name: 'AWS Fargate',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'awss3',
		color: 'green',
		description: 'AWS S3 es un servicio de almacenamiento de objetos en la nube que ha revolucionado la forma de gestionar grandes volúmenes de datos. Desde su lanzamiento, se ha destacado por su alta escalabilidad, seguridad y confiabilidad, siendo la opción predilecta para respaldo y distribución de contenido en la web.',
		logo: Assets.AWSS3,
		name: 'AWS S3',
		category: 'cloud'
	})
] as const;



const SkillsData = {
	title,
	items
};

export default SkillsData;
