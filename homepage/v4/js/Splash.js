'use strict';

class Splash extends _BaseDOM {
	constructor(props) {
		super(props);

		this.styles.push(BOOTSTRAP4);
		this.styles.push('./css/splash.css');
		this.createStyles();

		let container = createElement('section');
		container.appendChild(Splash.getHeadline());
		container.appendChild(Splash.getAboutSection());
		this.root.appendChild(container);
	}

	static getAboutSection() {
		const container = createElement(elements.DIV);
		container.id = 'about';
		container.style.alignItems = 'center';

		const img = createElement(elements.IMG);
		img.src = '../../assets/IMG_5235.JPG';
		img.setAttribute(CLASS, 'profile');
		img.setAttribute(ALT, 'Michael Albinson')
		container.appendChild(img);
		container.appendChild(new CustomHR(CustomHR.widths.quarter));

		const textContainer = createElement(elements.DIV);
		textContainer.setAttribute('class', 'about-text');

		let p = createElement('p');
		p.innerText = "Hey, looks like you found my site! Welcome!";
		textContainer.appendChild(p);

		p = createElement('p');
		p.style.textAlign = 'justify';
		p.innerHTML = bio;
		textContainer.appendChild(p);
		container.appendChild(textContainer);

		return container;
	}

	static getHeadline() {
		let headline = createElement('header');
		let topLine = createElement('h1');
		topLine.innerText = 'Michael Albinson';

		headline.appendChild(topLine);
		headline.appendChild(new CustomHR());
		let subtitle = createElement('span');
		subtitle.innerText = 'Software Engineer • Mechatronics Engineer';
		headline.appendChild(subtitle);
		return headline;
	}
}

customElements.define('page-splash', Splash);