class BootstrapButton extends _BaseDOM {
	constructor(title, classList, onClick) {
		super();

		this.styles.push(BOOTSTRAP4);
		this.styles.push('./css/button-classes.css');
		this.createStyles();

		this._title = title;
		this._classList = classList;
		this._onClick = onClick;
	}

	connectedCallback() {
		var button = createElement('button');
		button.innerText = this._title || this.getAttribute('title');
		button.setAttribute(CLASS, 'btn ' + (this._classList || this.getAttribute('classList') || 'btn-default'))
		button.addEventListener('click', this._onClick);

		this.root.appendChild(button);
	}
}

customElements.define('btn-default', BootstrapButton);