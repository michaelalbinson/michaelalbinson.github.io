'use strict';

const EMAIL = 'mailto:michael@albinson.ca';
const LINKEDIN = 'https://www.linkedin.com/in/michaelalbinson';
const GITHUB = "https://github.com/michaelalbinson";

const icons = [
	{
		href: 'https://www.linkedin.com/in/michaelalbinson',
		src: 'assets/linkedin.png',
		alt: 'Linkedin logo',
		hoverClass: 'linkedin'
	},
	{
		href: EMAIL,
		src: 'assets/email.png',
		alt: 'A letter',
		hoverClass: 'email'
	},
	{
		href: GITHUB,
		src: 'assets/github_cat.png',
		alt: 'Github mascot',
		hoverClass: 'github'
	},
];

const workExperience = [
	{ text: 'Software Engineering', link: '#swe' },
	{ text: 'Mechatronics Engineering', link: '#mech' },
	// { text: 'Projects', link: '#projects' },
	{ text: 'Teaching', link: '#teaching' },
	{ text: 'Education', link: '#education' }
];

const personalExperience = [
	{ text: 'About Me', link: '#about' },
	{ text: 'Volunteering', link: '#volunteering' }
	// { text: 'Interests', link: '#interests' },
	// { text: 'Strength and Weaknesses', link: '#strengths' },
	// { text: 'How I Can Contribute to Your Team', link: '#contribute' }
];

const technicalSkills = [
	'Javascript', 'Node.js', 'React', 'Angular', 'Accessible Website Design',
	'AWS EC2', 'AWS RDS',
	'HTML', 'CSS', 'Java', 'Arduino', 'Data Analysis', 'Python', 'Matlab', 'C',
	'Solid Edge', 'Ruby'
];

const professionalSkills = [
	'Leadership', 'Technical Report Writing', 'Teaching', 'Teamwork', 'AGILE Development',
	'Public Speaking', 'Failure Mode and Effect Analysis', 'Time Management',
	'Platform as a Service', 'Software as a Service'
];

const interests = [
	{ title: 'Music', snack: '(I play both the guitar and banjo)' },
	{ title: 'Environmental Issues', snack: '' },
	{ title: 'Photography', snack: '' },
	{ title: 'Painting', snack: '' },
	{ title: 'Game Design', snack: '(you can check out some of my work here)', href: '../../more-about-me/' },
	{ title: 'Running', snack: '(I am also a triathelete)' },
	{ title: 'Baseball', snack: 'I used to play on the Queen\'s Varsity Team' },
];

const strengthsAndWeaknesses = [];

const contributorFacts = [
	'A high impact, hard working team member',
	'Efficient and effective organization and communication',
	'Three years of industry-standard software enigneering training',
	'Two years of electrical engineering training',
	'Extensive experience in electrical prototyping using microcontrollers',
	'Extensive experience in accessible web design',
	'A highly interdisciplinary approach to tough projects'
];

const careerGoals = [
	'Work on the bleeding edge of a technology poised to make dramatic change',
	'Constantly challenging and invigorating problems to work on',
	'Working with a hardworking, committed team',
	'A positive impact on the people who use the result of our work',
	'A positive impact on the global community as a whole'
];

const tickerItems = technicalSkills.concat(professionalSkills);

const bio = "My name is Michael Albinson dual degree Biomechanical Engineering and Computing student from Queen's " +
	"University, currently working as a full-stack Software Engineer for ServiceNow. I thrive when working in teams, " +
	"am very self directed, and am a fast learner. I am willing to put my nose to the grindstone in order to excel and " +
	"deliver. Challenges that other people shy away from are my bread and butter. I love to take on the new, " +
	"the demanding, and the seemingly impossible. I've worked on ideas big and small, " +
	"projects in software, electronics and mechatronics. Got an idea? <a href='" + LINKEDIN + "'> Let's Talk</a>";
