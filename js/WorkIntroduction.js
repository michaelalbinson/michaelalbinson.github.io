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
		parent.appendChild(new BootstrapButton('Click to View Full List', 'btn-primary read-on', () => {
			const _root = new ElementFactory(elements.DIV, 'row');
			const col1 = new ElementFactory(elements.DIV, 'col-md');
			col1.appendChild(new ElementFactory(elements.H4, '', 'Technical Skills'));
			const techlist = new ElementFactory(elements.UL);
			technicalSkills.forEach(skill => techlist.appendChild(new ElementFactory(elements.LI, '', skill)));
			col1.appendChild(techlist);
			_root.appendChild(col1);

			const col2 = new ElementFactory(elements.DIV, 'col-md');
			col2.appendChild(new ElementFactory(elements.H4, '', 'Professional Skills'));
			const profList = new ElementFactory(elements.UL);
			professionalSkills.forEach(skill => profList.appendChild(new ElementFactory(elements.LI, '', skill)));
			col2.appendChild(profList);
			_root.appendChild(col2);
			new ALBModal('Skills', _root, true).open();
		}));

		this.root.appendChild(parent);
	}
}

customElements.define('work-intro', WorkIntroduction);
