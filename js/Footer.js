'use strict';

class Footer extends _BaseDOM {
	connectedCallback() {
		this.styles.push('css/footer.css');
		this.createStyles();

		const footer = createElement('footer');
		footer.appendChild(Footer.getQuestionLink());
		Footer.appendIcons(footer);
		footer.appendChild(Footer.getCopyright());

		this.root.appendChild(footer);
	}

	static getQuestionLink() {
		const questionLink = createElement(elements.DIV);
		const link = createElement(elements.A);
		link.setAttribute(HREF, EMAIL);
		link.innerText = "Questions? Contact Me!";
		questionLink.appendChild(link);
		return questionLink;
	}

	static getCopyright() {
		const text = createElement(elements.DIV);
		text.innerText = "© Michael Albinson 2019-2020";
		return text;
	}

	static appendIcons(footer) {
		const footerIconClasses = 'header-img inverted';
		_BaseDOM.addChildrenToElement(footer, icons, createIcon);

		function createIcon(iconDetails) {
			return new IconLinkElement(iconDetails.src, iconDetails.href, iconDetails.alt, footerIconClasses,
				iconDetails.hoverClass);
		}
	}
}

customElements.define('page-footer', Footer);