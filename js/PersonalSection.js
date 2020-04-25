'use strict';

class PersonalSection extends _BaseDOM {
	constructor(title, points) {
		super();

		const container = createElement(elements.DIV);
		container.setAttribute(CLASS, 'row align-items-start');



		this.root.appendChild(container);
	}
}

customElements.define('personal-section', PersonalSection);