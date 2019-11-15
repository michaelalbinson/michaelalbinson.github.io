class SectionHeader extends _BaseDOM {
	constructor(title, id, classList) {
		super();

		this._title = title;
		this._id = id;
		this._classList = classList;
	}

	connectedCallback() {
		this.styles.push(BOOTSTRAP4);
		this.styles.push('./css/section-header.css');
		this.createStyles();

		var parent = createElement(elements.DIV);
		parent.setAttribute(CLASS, this._classList || this.getAttribute(CLASS));
		parent.setAttribute('id', this._id || this.getAttribute('id'));

		var blur = createElement(elements.DIV);
		blur.setAttribute(CLASS, 'divider-blur d-flex align-items-center');

		var title = createElement('h2');
		title.innerText = this._title || this.getAttribute('section-title');

		blur.appendChild(title);
		parent.appendChild(blur);
		this.root.appendChild(parent);
	}

	get id() {
		return this.getAttribute('id');
	}

	get title() {
		return this.getAttribute('section-title');
	}

	get classList() {
		return this.getAttribute('class-list');
	}
}

customElements.define('section-header', SectionHeader);