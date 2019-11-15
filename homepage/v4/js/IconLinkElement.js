class IconLinkElement extends _BaseDOM {
	constructor(source, link, alt, classList) {
		super();

		this.source = source;
		this.link = link;
		this.alt = alt;
		this.classList = classList;
	}

	connectedCallback() {
		this.styles.push('./css/icon-link.css');
		this.createStyles();

		var div = createElement(elements.SPAN);
		this.a = createElement(elements.A);
		this.a.href = this.link || this.getAttribute(HREF);

		this.img = createElement(elements.IMG);
		this.img.setAttribute(SRC, this.source || this.getAttribute(SRC));
		this.img.setAttribute(CLASS, this.classList || this.getAttribute(CLASS) || 'header-icon');
		this.img.setAttribute(ALT, this.alt || this.getAttribute(ALT));
		this.a.appendChild(this.img);

		div.appendChild(this.a);
		this.root.appendChild(div);
	}

	attributeChangedCallback(attrName, oldVal, newVal) {
		this[attrName] = newVal;
	}
}

customElements.define('icon-link', IconLinkElement);