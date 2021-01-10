'use strict';

class AppRoot extends _BaseDOM {
	constructor() {
		super();

		let layout = createElement(elements.DIV);
		layout.appendChild(new MenuBar());
		layout.appendChild(new Splash());
		layout.appendChild(new SectionHeader('Work Experience', 'experience', 'divider'));
		layout.appendChild(new WorkIntroduction());
		layout.appendChild(new TechSection('Software Engineering', sweExperience, TechSection.cardStyles.CS, 'swe'));
		layout.appendChild(new TechSection('Mechatronics Engineering', mechanicalExperiences, TechSection.cardStyles.MECH, 'mech'));
		layout.appendChild(new TechSection('Projects', projectExperiences, TechSection.cardStyles.TEACH, 'projects'));
		layout.appendChild(new TechSection('Teaching and Mentoring', teachingExperiences, TechSection.cardStyles.TEACH, 'teaching'));
		layout.appendChild(new TechSection('Education', educationExperiences, TechSection.cardStyles.EDU, 'education'));
		layout.appendChild(new SectionHeader('Personal Experience', 'personal', 'divider-personal'));
		layout.appendChild(createElement('br'));
        layout.appendChild(new TechSection('Volunteering', volunteerExperiences, TechSection.cardStyles.VOLUNTEER, 'volunteering'));
		// layout.appendChild(new TechSection('Interests', [], TechSection.cardStyles.CS, 'interests'));
		// layout.appendChild(new TechSection('Strengths and Weaknesses', [], TechSection.cardStyles.CS, 'strengths'));
		// layout.appendChild(new TechSection('What I can Contribute to Your Team', [], TechSection.cardStyles.CS, 'contribute'));
		// layout.appendChild(new TechSection('Career Goals', [], TechSection.cardStyles.CS, 'goals'));
		layout.appendChild(new Footer());

		this.root.appendChild(layout);

		setTimeout(AppRoot.scrollIfNeeded, 50);
	}

	static scrollIfNeeded() {
        const url = document.location.href;
		if (!url.includes('#'))
			return;

        const loc = url.slice(url.indexOf('#'));
        _BaseDOM.invokeEvent('section' + loc);
        _BaseDOM.invokeEvent('subsection' + loc);

	}
}

customElements.define('app-root', AppRoot);
