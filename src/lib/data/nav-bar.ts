import BaseData from './base';

const left = { title: BaseData.fullName, icon: 'i-carbon-code' } as const;

const items: Array<{
	title: string;
	icon: `i-carbon-${string}`;
	href: string;
}> = [
	{ title: 'Herramientas y Tecnologías', icon: 'i-carbon-assembly-cluster', href: '/skills' },
	{ title: 'Proyectos', icon: 'i-carbon-cube', href: '/projects' },
	{ title: 'Experiencia', icon: 'i-carbon-development', href: '/experience' },
	{ title: 'Educación', icon: 'i-carbon-education', href: '/education' },
	{ title: 'Curriculum Vitae', icon: 'i-carbon-document', href: '/resume' }
];

const NavBarData = { left, items };

export default NavBarData;
