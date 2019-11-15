class BootstrapButton extends _BaseDOM {
	constructor(title, classList, onClick) {
		super();

		this._title = title;
		this._classList = classList;
		this._onClick = onClick;
	}

	connectedCallback() {
		this.styles.push(BOOTSTRAP4);
		this.createStyles();

		var button = document.createElement('button');
		button.innerText = this._title || this.getAttribute('title');
		button.setAttribute('class', 'btn ' + (this._classList || this.getAttribute('classList') || 'btn-default'))
		button.addEventListener('click', this._onClick);

		this.root.appendChild(button);
	}
}

customElements.define('btn-default', BootstrapButton);