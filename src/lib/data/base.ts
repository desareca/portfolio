const firstName = 'Carlos';
const lastName = 'Saquel';
const suffix = 'Portfolio';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
