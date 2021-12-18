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
	src: 'assets/servicenow.svg'
};

const queensEngSocLogo = {
	alt: 'Queen\'s University Engineering Society logo',
	href: 'https://engsoc.queensu.ca/',
	src: 'assets/engsoc.png'
};

const pandoraLogo = {
	alt: 'Pandora Internet Radio logo',
	href: 'http://pandora.com/about',
	src: 'assets/pandora_radio.png'
};

const qfctLogo = {
	alt: 'Queen\'s Fuel Cell Team logo',
	href: 'http://qfct.ca/',
	src: 'assets/qfct.png'
};

const apsciLogo = {
	alt: 'Queen\'s University Engineering and Applied Science logo',
	href: 'https://engineering.queensu.ca/',
	src: 'assets/queens_eng_logo.jpg'
};

const queensULogo = {
	alt: 'Queen\'s University logo',
	href: 'http://queensu.ca/',
	src: 'assets/Queens_U.png'
};

const bransonLogo = {
	alt: 'Branson High School logo',
	href: 'https://www.branson.org/',
	src: 'assets/branson.png'
};

const bsaLogo = {
	alt: 'Boy Scouts of America logo',
	href: 'http://www.scouting.org/',
	src: 'assets/scouts.png'
};

const wayke = {
	alt: 'Wayke logo',
	href: 'http://wayke.github.io',
	src: 'assets/wayke_logo.png'
};

const momagerLogo = {
	alt: 'Momager logo',
	href: 'http://momager.com',
	src: 'assets/momager.png'
};

/** Experiences **/
const serviceNowExperience = {
	title: 'ServiceNow Platform Sr. Software Engineer',
	dates: 'May 2016 - Present',
	image: serviceNowLogo,
	bullets: [
		'Worked closely with management and developers on his team to define technical requirements from user needs and develop world-class full-stack software used by Fortune 500 companies globally.',
		'Lead developer and architect of security-critical project. Leveraged industry-standard  cryptographic methods for the secure transmission of data between micro-services. Co-author on patent filing for the technology.',
		'Developed JavaScript test infrastructure for evaluating code coverage and reducing test execution time by 100x. Organizational adoption is in progress.',
		"Created and was responsible for a large amount of automated testing (JUnit, Selenium) around the core " +
			"functionality of various platform features",
		'Extensive work in JavaScript (Node.js), Java, React, API Design, web components, MySQL, NPM and Maven build systems.'
	]
};

const ucsfRLExperience = {
	title: 'HeadPulse Systems Platform Architect',
	dates: 'February 2017 - February 2021',
	image: ucsfLogo,
	bullets: [
		'Architected and executed a full-stack application for the research and remote usage of an experimental medical diagnostic device.',
		'The application, while still under non-disclosure, utilized big-data analyses to improve the well-being of both amateur and professional athletes.',
		'Developed an AWS-based web application, iOS mobile application and backend architecture utilizing AWS S3, EC2, RDS and Route 53, as well as Node.js, MySQL, HTML, CSS and Swift.'
	]
};

const essdevExperience = {
	title: 'Queen\'s Engineering Society Software Development Team Manager',
	dates: 'May 2016 - May 2018',
	image: queensEngSocLogo,
	bullets: [
		"Led small teams of members in the creation of websites and mobile applications that benefited Engineering Students.",
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
		"Taught core programming concepts of the C programming language to first year students.",
		"Responsible for answering questions, overseeing labs with other TAs and marking papers."
	]
};

const essdevMentor = {
	title: 'ESSDev Mentor',
	dates: 'September 2018 - May 2019',
	image: queensEngSocLogo,
	bullets: [
		"Mentored 10 students over the course of a year in software development fundamentals and architectural design.",
		"Worked in a variety of programming languages and frameworks including: Node.js, Python, React, Angular, " +
			"MongoDB, PHP, MySQL, and Java.",
		"Spearheaded the use of AGILE techniques to increase team efficiency and transparency.",
		"Ran tutorials on Git, Python, JavaScript, Web Development and Application Development Fundamentals."
	]
};

const queensEdu = {
	title: 'Queen\'s University',
	subtitle: 'BASc. Mechanical Engineering\nBCmp. Computer Science',
	dates: 'September 2014 - May 2019',
	image: queensULogo,
	bullets: [
		'BASc Mechanical Engineering - Biomechanical option [2014-2018], received an entrance scholarship for academic achievement, graduated with First Class Honors. H.G. Conn Award for distinguished extracurricular achievement.',
		'BComp Computer Science [2018-2019], graduated with honors.',
		'Activities: Engineering Society Software Development Team, Queen’s Fuel Cell team, Varsity Baseball Team, QHacks, Robogals, Queen’s University Engineering Conference on Industry and Resources (CIRQUE), Queen’s Space Conference (QSC).',
		'Dean’s List for Academic excellence 2014-2018 academic years.'
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
		"Participated in the Engineering Society's biannual Fix n' Clean event.",
		"The program coordinates sending students across Kingston to perform cleaning and basic repairs in the " +
			"homes of seniors or those disabled."
	]
};

const momagerProject = {
	title: 'Momager',
	dates: 'June 2019 - Present',
	image: momagerLogo,
	bullets: [
		'Architected, designed and implemented a website, API, desktop app and mobile app'
	]
};

const waykeProject = {
	title: 'Wayke',
	dates: 'February 2016',
	image: wayke,
	bullets: [
		"Helped to develop a desktop-based plugin for the Muse headband using python in order to perform complex data analysis on brainwaves.",
		"Developed a companion hardware component using Arduino, Cylon.js and Firebase.",
		"Helped to develop a full stack of operations in under 48 hours."
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
	// momagerProject,
	// waykeProject
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
