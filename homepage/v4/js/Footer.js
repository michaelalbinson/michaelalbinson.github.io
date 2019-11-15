class Footer extends _BaseDOM {
	connectedCallback() {
		this.styles.push('./css/footer.css');
		this.createStyles();

		var footer = document.createElement('footer');
		footer.appendChild(Footer.getQuestionLink());
		Footer.appendIcons(footer);
		footer.appendChild(Footer.getCopyright());

		this.root.appendChild(footer);
	}

	static getQuestionLink() {
		var questionLink = document.createElement('div');
		var link = document.createElement('a');
		link.setAttribute('href', 'mailto:michael@albinson.ca');
		link.innerText = "Questions? Contact Me!";
		questionLink.appendChild(link);
		return questionLink;
	}

	static getCopyright() {
		var text = document.createElement('div');
		text.innerText = "© Michael Albinson 2019";
		return text;
	}

	static appendIcons(footer) {
		_BaseDOM.addChildrenToElement(footer, icons, createIcon);

		function createIcon(iconDetails) {
			var icon = document.createElement('icon-link');
			icon.setAttribute('href', iconDetails.href);
			icon.setAttribute('src', iconDetails.src);
			icon.setAttribute('alt', iconDetails.alt);
			icon.setAttribute('class', 'header-img inverted');
			return icon;
		}
	}
}

customElements.define('page-footer', Footer);