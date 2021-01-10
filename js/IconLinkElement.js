'use strict';

class IconLinkElement extends _BaseDOM {
	constructor(source, link, alt, classList, hoverClass) {
		super();

		this.styles.push('css/icon-link.css');
		this.createStyles();

		this.source = source;
		this.link = link;
		this.alt = alt;
		this.classList = classList;
		this.hoverClass = hoverClass;

		var div = createElement(elements.SPAN);
		this.a = createElement(elements.A);
		this.a.href = this.link || this.getAttribute(HREF);

		this.imgWrap = createElement(elements.DIV);
		this.imgWrap.classList.add('icon-link');
		if (this.hoverClass)
			this.imgWrap.classList.add(this.hoverClass);

		this.img = createElement(elements.IMG);
		this.img.setAttribute(SRC, this.source || this.getAttribute(SRC));
		this.img.setAttribute(CLASS, this.classList || this.getAttribute(CLASS) || 'header-icon');

		this.img.setAttribute(ALT, this.alt || this.getAttribute(ALT));
		this.imgWrap.appendChild(this.img);
		this.a.appendChild(this.imgWrap);

		div.appendChild(this.a);
		this.root.appendChild(div);
	}
}

customElements.define('icon-link', IconLinkElement);
