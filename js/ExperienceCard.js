'use strict';

class ExperienceCard extends _BaseDOM {
	constructor(title, image, imageLink, imageAlt, dates, bullets, cardStyle, subtitle) {
		super();
		// don't include incomplete cards dummy
		if (!bullets || !bullets[0] || bullets[0] === 'TODO')
			return;

		this.bullets = bullets;
		this.cardStyle = cardStyle;

		this.styles.push(BOOTSTRAP4);
		this.styles.push('css/paperclip.css');
		this.styles.push('css/experience-card.css');
		this.createStyles();

		const container = createElement('article');
		container.setAttribute(CLASS, 'card');

		const jobDiv = createElement(elements.DIV);
		jobDiv.setAttribute(CLASS, 'job-div');
		jobDiv.appendChild(this.getFormattedCompanyLogo(imageLink, image, imageAlt));

		// The company title
		const h4 = createElement('h4');
		h4.innerText = title;
		jobDiv.appendChild(h4);

		// subtitle, if required
		if (subtitle) {
			const cardSubtitle = createElement(elements.P);
			cardSubtitle.innerText = subtitle;
			jobDiv.appendChild(cardSubtitle);
		}

		// working dates
		const dateDOM = createElement('p');
		dateDOM.setAttribute(CLASS, 'date-dom');
		dateDOM.innerText = dates;
		jobDiv.appendChild(dateDOM);

		if (this.cardStyle === 'teach') {
			const paperclip = createElement(elements.DIV);
			paperclip.classList.add('paper-clip-icon');
			jobDiv.appendChild(paperclip);
		}

		jobDiv.appendChild(this.getBriefButton());

		jobDiv.appendChild(this.getBrief());
		container.appendChild(jobDiv);
		this.root.appendChild(container);
	}

	getBrief() {
		const container = createElement(elements.DIV);
		this.brief = container;

		container.setAttribute(CLASS, 'brief ' + this.cardStyle);
		const briefHeader = createElement('h5');
		briefHeader.innerText = 'Summary';
		if (TechSection.cardStyles.CS === this.cardStyle)
			briefHeader.innerText = '[Summary]';

		container.appendChild(briefHeader);

		const list = createElement('ul');
		for (let index in this.bullets) {
			if (!this.bullets.hasOwnProperty(index))
				continue;

			let listItem = createElement('li');
			listItem.innerText = this.bullets[index];
			list.appendChild(listItem);
		}

		container.appendChild(list);
		container.style.display = 'none';
		return container;
	}

	getFormattedCompanyLogo(imageLink, image, imageAlt) {
		const link = createElement(elements.A);
		link.setAttribute('href', imageLink);
		link.setAttribute('target', '_blank');

		const img = createElement(elements.IMG);
		img.setAttribute(SRC, image);
		img.setAttribute(ALT, imageAlt);
		img.setAttribute(CLASS, 'company-logo');
		link.appendChild(img);
		return link;
	}

	getBriefButton() {
		const button = createElement(elements.BUTTON);
		this.button = button;
		button.setAttribute(CLASS, 'brief-btn btn');
		button.addEventListener('click', this.showBrief.bind(this));
		const caratBtn = createElement(elements.IMG);
		button.setAttribute('aria-expanded', false);
		caratBtn.setAttribute(SRC, 'assets/down_arrow.png');
		caratBtn.setAttribute(ALT, 'Down button');
		button.appendChild(caratBtn);

		return button;
	}

	showBrief() {
		const ROTATE = "rotate(180deg)";
		const BLOCK = "block";
		const NONE = "none";
		let paperclip = this.parentNode.querySelector('.paper-clip-icon');

		if (this.button.style.transform) {
			this.button.setAttribute('aria-expanded', false);
			this.button.style.transform = "";
			this.brief.style.display = NONE;
			if (paperclip)
				paperclip.style.display = NONE;

		} else {
			this.button.setAttribute('aria-expanded', true);
			this.button.style.transform = ROTATE;
			this.brief.style.display = BLOCK;
			if (paperclip)
				paperclip.style.display = BLOCK;
		}
	}
}

customElements.define('experience-card', ExperienceCard);
