class IconLinkElement extends _BaseDOM {
	connectedCallback() {
		this.styles.push('./css/icon-link.css');
		this.createStyles();

		var div = document.createElement('span');
		this.a = document.createElement('a');
		this.a.href = this.getAttribute('href');

		this.img = document.createElement('img');
		this.img.setAttribute('src', this.getAttribute('src'));
		this.img.setAttribute('class', this.getAttribute('class') || 'header-icon');
		this.img.setAttribute('alt', this.getAttribute('alt'));
		this.a.appendChild(this.img);

		div.appendChild(this.a);
		this.root.appendChild(div);
	}

	attributeChangedCallback(attrName, oldVal, newVal) {
		this[attrName] = newVal;
	}

	set class(value) {
		this.img.setAttribute('class', value || "");
	}

	set alt(value) {
		this.img.setAttribute('alt', value || "");
	}

	set src(value) {
		this.img.setAttribute('src', value || "");
	}

	set href(value) {
		this.a.setAttribute('href', value || "");
	}
}

customElements.define('icon-link', IconLinkElement);