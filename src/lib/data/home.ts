import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'Soy Ingeniero Civil Electrónico, me dediqué al desarrollo de proyectos industriales por mucho tiempo. La curiosidad por nuevos desafíos me llevó hacia la ciencia de datos, campo en el que he profundizado mediante cursos, desarrollo de proyectos y competencias en Kaggle. Mi pasión por estar continuamente aprendiendo me ha impulsado a explorar constantemente nuevas disciplinas relacionadas con análisis y visualización de datos, así como las tecnologías necesarias para implementar estos análisis. Estoy siempre en busca de adquirir y aplicar nuevos conocimientos y desarrollar proyectos interesantes.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/desareca/', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/carlos-saquel/', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Email', href: 'mailto:carlos.saquel@gmail.com', icon: 'i-carbon-logo-google' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
