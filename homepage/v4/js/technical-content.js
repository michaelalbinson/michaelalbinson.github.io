'use strict';

/** Images **/
const ucsfLogo = {
	alt: 'University of California: San Francisco logo',
	href: 'https://ucsf-research.link',
	src: './assets/UCSF-RL.png'
};

const serviceNowLogo = {
	alt: 'ServiceNow logo',
	href: 'https://www.servicenow.com/',
	src: './assets/servicenow.svg'
};

const queensEngSocLogo = {
	alt: 'Queen\'s University Engineering Society logo',
	href: 'https://engsoc.queensu.ca/',
	src: '../../assets/engsoc.png'
};

const pandoraLogo = {
	alt: 'Pandora Internet Radio logo',
	href: 'http://pandora.com/about',
	src: '../../assets/pandora_radio.png'
};

const qfctLogo = {
	alt: 'Queen\'s Fuel Cell Team logo',
	href: 'http://qfct.ca/',
	src: '../../assets/qfct.png'
};

const apsciLogo = {
	alt: 'Queen\'s University Engineering and Applied Science logo',
	href: 'https://engineering.queensu.ca/',
	src: '../../assets/queens_eng_logo.jpg'
};

const queensULogo = {
	alt: 'Queen\'s University logo',
	href: 'http://queensu.ca/',
	src: '../../assets/Queens_U.png'
};

const bransonLogo = {
	alt: 'Branson High School logo',
	href: 'https://www.branson.org/',
	src: '../../assets/branson.png'
};

const bsaLogo = {
	alt: 'Boy Scouts of America logo',
	href: 'http://www.scouting.org/',
	src: '../../assets/scouts.png'
};

/** Experiences **/
const serviceNowExperience = {
	title: 'ServiceNow Platform Software Engineer',
	dates: 'May 2016 - Present',
	image: serviceNowLogo,
	bullets: [
		"Delivered software as a service (SaaS) based products to internal customers in real time",
		"Worked in a scrum team staffed with highly talented software developers, quality engineers, " +
			"and product owners focused on delivering a high quality feature",
		"Collaborated with senior engineers to consistently achieve frequent deadlines set under Scrum Agile development",
		"Wrote production code that met the strict coding standards and adhered to our ServiceNow’s world class established coding guidelines",
		"Worked in a team to develop a must-ship feature of the company's latest software version",
		"Responsible for tasks including debugging code, helping to execute core software development as needed, and " +
			"manually testing core functionality of features",
		"Created and was responsible for a large amount of automated testing (JUnit, Selenium) around the core " +
			"functionality of various platform features",
		"Helped to triage failing automated tests in the core of the ServiceNow's Platform",
		"Extensive work with Java, Javascript, Jelly, XML, and HTML"
	]
};

const ucsfRLExperience = {
	title: 'HeadPulse Systems Platform Architect',
	dates: 'February 2017 - Present',
	image: ucsfLogo,
	bullets: [
		"TODO"
	]
};

const essdevExperience = {
	title: 'Queen\'s Engineering Society Software Development Team Manager',
	dates: 'May 2016 - May 2018',
	image: queensEngSocLogo,
	bullets: [
		"Managed a small team in a major year-long design project designed to improve the engineering experience at Queen's",
		"Architected and contributed to a web app that utilized NodeJS, HTML, CSS, JavaScript and Bootstrap technologies",
		"Wrote primarily server-side code, but also contributed to the front-end",
		"Educated on core web technologies and their role in the system",
		"Responsible for reviewing team code and making suggestions for future improvement"
	]
};

const pandoraExp = {
	title: 'Pandora [Previously Ticketfly]',
	dates: 'May 2015 - August 2015',
	image: pandoraLogo,
	bullets: [
		"Worked in a project team creating a product to change the way we experience ticketing",
		"Project prototyped an Internet of Things (IoT) device, created a companion mobile iOS app, & integrated into backend with mocked data.",
		"Utilized an open-source beacon format with Bluetooth LE (Low Energy) for direct, point-to-point communication.",
		"Delivered the product to the company in three months & demoed prototype to entire company upon completion.",
		"Extensive work with Javascript, Python, Intel Edison, Ardiuno (C#, electrical prototyping), and Swift."
	]
};

const qfctExp = {
	title: 'Queen\'s Fuel Cell Team Electrical Manager',
	dates: 'September 2017 - May 2019',
	image: qfctLogo,
	bullets: [
		"Directed, delegated and assisted the Electrical team in designing the electrical circuitry and software for a " +
			"cutting edge hydrogen fuel cell vehicle",
		"Designed and executed a fuel cell control system including designing the electrical system, instrumentation, and software",
		"Worked on the design of real-time performance analytic and power use optimization via sensor fusion",
		"Worked with an interdisciplinary team of mechanical, chemical, electrical and computer engineers",
		"Worked closely with the mechanical, chemical and general managers to create an effective, efficient vehicle",
		"General Member for two years previous to promotion (Mechanical and Electrical team) in charge of redesign of " +
			"electrical systems within the vehicle, vehicle sensor instrumentation, and power use regulation"
	]
};

const PMExp = {
	title: 'Queen\'s University APSC 100 Project Manager',
	dates: 'September 2017 - May 2018',
	image: apsciLogo,
	bullets: [
		"Managed and led three small teams of first year students on a real world engineering problem",
		"Instructed on problem solving methodologies outlined in the APSC 100 curriculum",
		"Mentored young students through first year, helping them better understand the career paths available to them " +
			"through engineering and the choices they had, as well as mentoring students on their first year of university " +
			"on the resources and opportunities available to them",
		"Responsible for marking reports, direct communications with the real word client, orchestrating meetings and " +
			"communication between the faculty, the client and the students, as well as offering guidance and support to " +
			"students on their projects"
	]
};

const ta143Exp = {
	title: 'Queen\'s University APSC 142/143 Teaching Assistant',
	dates: 'January 2015 - December 2018',
	image: apsciLogo,
	bullets: [
		"Managed a small team in a major year-long design project designed to improve the engineering experience at Queen's",
		"Architected and contributed to a web app that utilized NodeJS, HTML, CSS, JavaScript and Bootstrap technologies",
		"Wrote primarily server-side code, but also contributed to the front-end",
		"Educated on core web technologies and their role in the system",
		"Responsible for reviewing team code and making suggestions for future improvement"
	]
};

const essdevMentor = {
	title: 'ESSDev Mentor',
	dates: 'September 2018 - May 2019',
	image: queensEngSocLogo,
	bullets: [
		"TODO"
	]
};

const queensEdu = {
	title: 'Queen\'s University',
	subtitle: 'BASc. Mechanical Engineering\nBCmp. Computer Science',
	dates: 'September 2014 - May 2019',
	image: queensULogo,
	bullets: [
		"Dual Major in Biomechanical Engineering (BASc.) and Computing (Bcmp.)",
		"Participated in and managed the Queen's Fuel Cell Team (Mechanical and Electrical Divisions), the Club " +
			"Varsity Baseball Team, Robogals Queen's Chapter, Qhacks and was a Freshman Orientation Leader, " +
			"Queen's Engineering Society Software Development Team (ESSDev)."
	]
};

const bransonEdu = {
	title: 'The Branson School',
	subtitle: 'High School Diploma',
	dates: 'September 2010 - June 2014',
	image: bransonLogo,
	bullets: [
		"Varsity Baseball (4 year athlete), Varsity Cross Country (4 year athlete), School Musical, School Play, " +
			"Senior Class President, Exchange (and Service) Trips to China, The Dominican Republic, New Orleans and Chile."
	]
};

const bsaExp = {
	title: 'Boy Scouts of America - Eagle Scout',
	dates: 'September 2009 - February 2014',
	image: bsaLogo,
	bullets: [
		"Eagle Scout as of February 2014.",
		"Conducted a self-conducted Eagle Project in conjunction with the Marin Edible Garden, helping to complete the " +
			"construction phase and promote the garden in the local community.",
		"Held leadership positions such as Patrol Leader, Assistant Patrol Leader and Instructor.",
		"Also assisted in various service projects over the course of my scouting career."
	]
};

const fixNCleanExp = {
	title: 'Fix N\' Clean',
	dates: 'September 2014 - May 2018',
	image: queensEngSocLogo,
	bullets: [
		"TODO"
	]
};

/** Experience Summations **/
const sweExperience = [
	serviceNowExperience,
	ucsfRLExperience,
	essdevExperience
];

const mechanicalExperiences = [
	qfctExp,
	pandoraExp
];

const projectExperiences = [

];

const teachingExperiences = [
	PMExp,
	ta143Exp,
	essdevMentor
];

const educationExperiences = [
	queensEdu,
	bransonEdu
];

const volunteerExperiences = [
	bsaExp,
	fixNCleanExp
];