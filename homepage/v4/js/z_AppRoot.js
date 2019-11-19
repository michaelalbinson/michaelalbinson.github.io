'use strict';

class AppRoot extends _BaseDOM {
	constructor() {
		super();

		let layout = createElement(elements.DIV);
		layout.appendChild(new MenuBar());
		layout.appendChild(new Splash());
		layout.appendChild(new SectionHeader('Work Experience', 'experience', 'divider'));
		layout.appendChild(new WorkIntroduction());
		layout.appendChild(new TechSection('Software Engineering', sweExperience));
		layout.appendChild(new TechSection('Mechatronics Engineering', []));
		layout.appendChild(new TechSection('Projects', []));
		layout.appendChild(new TechSection('Teaching and Mentoring', []));
		layout.appendChild(new TechSection('Education', []));
		layout.appendChild(new TechSection('Volunteering', []));
		layout.appendChild(new SectionHeader('Personal Experience', 'personal', 'divider-personal'));
		layout.appendChild(new TechSection('Interests', []));
		layout.appendChild(new TechSection('Strengths and Weaknesses', []));
		layout.appendChild(new TechSection('What I can Contribute to Your Team', []));
		layout.appendChild(new TechSection('Career Goals', []));
		layout.appendChild(new Footer());

		this.root.appendChild(layout);
	}
}

customElements.define('app-root', AppRoot);