class SkillCard {
	constructor(type, title, date, company, bullets) {
		this.type = type;
		this.title = title;
		this.date = date;

		/** @type {Company} **/
		this.company = company;

		/** @type {array} **/
		this.bullets = bullets;
	}
}

class Company {
	constructor(name, href, logo) {
		this.name = name;
		this.href = href;
		this.logo = logo;
	}
}

const qfct = new Company(
	'Queen\'s Fuel Cell Team',
	'',
	'');
const QueensU = new Company(
	'Queen\'s University',
	'https://engineering.queensu.ca/',
	'');

const card1 = new SkillCard('mech', qfct);