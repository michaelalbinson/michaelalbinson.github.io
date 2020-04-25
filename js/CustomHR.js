'use strict';

class CustomHR extends _BaseDOM {
	constructor(className) {
		super();

		this.styles.push(BOOTSTRAP4);
		this.styles.push('css/hr.css');
		this.createStyles();

		var hr = createElement('hr');
		hr.setAttribute(CLASS, className || CustomHR.widths.half);
		this.root.appendChild(hr);
	}
}

CustomHR.widths = {
	quarter: 'quarter-width',
	half: 'half-width'
};

customElements.define('custom-hr', CustomHR);
