class WorkIntroduction extends _BaseDOM {
	constructor() {
		super();
	}

	connectedCallback() {
		const parent = document.createElement('section');
		const header = document.createElement('h3');
		header.innerText = 'Skills';
		parent.appendChild(header);
		parent.appendChild(new SkillTicker());
		parent.appendChild(new BootstrapButton('Click to View Full List', 'btn-default', () => {}));

		this.root.appendChild(parent);
	}
}

customElements.define('work-intro', WorkIntroduction);