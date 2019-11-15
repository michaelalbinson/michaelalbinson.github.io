const BOOTSTRAP4 = '../../css/bootstrap4.css';

const EMAIL = 'mailto:michael@albinson.ca';
const LINKEDIN = 'https://www.linkedin.com/in/michaelalbinson';

const icons = [
	{
		href: 'https://www.linkedin.com/in/michaelalbinson',
		src: '../../assets/linkedin.png',
		alt: 'Linkedin logo'
	},
	{
		href: LINKEDIN,
		src: '../../assets/github_cat.png',
		alt: 'Github mascot'
	},
	{
		href: EMAIL,
		src: '../../assets/email.png',
		alt: 'A letter'
	},
];

const workExperience = [
	{ text: 'Software Engineering', link: '#swe' },
	{ text: 'Mechatronics Engineering', link: '#mech' },
	{ text: 'Projects', link: '#projects' },
	{ text: 'Teaching', link: '#teaching' },
	{ text: 'Education', link: '#education' },
	{ text: 'Volunteering', link: '#volunteering' }
];

const personalExperience = [
	{ text: 'About Me', link: '#about' },
	{ text: 'Interests', link: '#interests' },
	{ text: 'Strength and Weaknesses', link: '#strengths' },
	{ text: 'How I Can Contribute to Your Team', link: '#contribute' }
];

const technicalSkills = [
	'Javascript', 'React', 'Angular', 'Accessible Website Design',
	'HTML', 'CSS', 'Java', 'Arduino', 'Data Analysis', 'Python', 'Matlab', 'C',
	'Solid Edge', 'Ruby'];

const professionalSkills = [
	'Leadership', 'Technical Report Writing', 'Teaching', 'Teamwork', 'AGILE Development',
	'Public Speaking', 'Failure Mode and Effect Analysis', 'Time Management',
	'Platform as a Service', 'Software as a Service'
];

const bio = "My name is Michael Albinson dual degree Biomechanical Engineering and Computing student from Queen's " +
	"University, currently working as a Software Engineer for ServiceNow. I thrive when working in teams, " +
	"am very self directed, and am a fast learner. I am willing to put my nose to the grindstone in order to excel and " +
	"deliver. Challenges that other people shy away from are my bread and butter. I love to take on the new, " +
	"the demanding, and the seemingly impossible. I've worked on ideas big and small, " +
	"projects in software, electronics and mechanics. Got an idea? <a href='" + LINKEDIN + "'> Let's Talk</a>";

const tickerItems = technicalSkills.concat(professionalSkills);