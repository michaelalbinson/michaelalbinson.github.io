'use strict';

class WorkIntroduction extends _BaseDOM {
	constructor() {
		super();

		this.styles.push('css/work-intro.css');
		this.createStyles();
	}

	connectedCallback() {
		const parent = createElement('section');
		const header = createElement('h3');
		header.innerText = 'Skills';
		parent.appendChild(header);
		parent.appendChild(new SkillTicker());
		parent.appendChild(new BootstrapButton('Click to View Full List', 'btn-default read-on', () => {}));

		this.root.appendChild(parent);
	}
}

customElements.define('work-intro', WorkIntroduction);