'use strict';

class ExperienceCard extends _BaseDOM {
	constructor(title, image, imageLink, imageAlt, dates, bullets) {
		super();

		this.styles.push(BOOTSTRAP4);
		this.styles.push('./css/experience-card.css');
		this.createStyles();

		const container = createElement('article');
		container.setAttribute(CLASS, 'card');

		const jobDiv = createElement(elements.DIV);
		jobDiv.setAttribute(CLASS, 'job-div');

		const link = createElement(elements.A);
		link.setAttribute('href', imageLink);
		link.setAttribute('target', '_blank');

		const img = createElement(elements.IMG);
		img.setAttribute(SRC, image);
		img.setAttribute(ALT, imageAlt);
		img.setAttribute(CLASS, 'company-logo');
		link.appendChild(img);
		jobDiv.appendChild(link);

		const h4 = createElement('h4');
		h4.innerText = title;
		jobDiv.appendChild(h4);

		const dateDOM = createElement('p');
		dateDOM.setAttribute(CLASS, 'date-dom');
		dateDOM.innerText = dates;
		jobDiv.appendChild(dateDOM);

		const button = createElement(elements.BUTTON);
		button.setAttribute(CLASS, 'brief-btn btn');
		const caratBtn = createElement(elements.IMG);
		caratBtn.setAttribute(SRC, '../../assets/down_arrow.png');
		caratBtn.setAttribute(ALT, 'Down button');
		button.appendChild(caratBtn);
		jobDiv.appendChild(button);

		jobDiv.appendChild(ExperienceCard.getBrief(bullets));
		container.appendChild(jobDiv);
		this.root.appendChild(container);
	}

	static getBrief(bullets) {
		const container = createElement(elements.DIV);
		container.setAttribute(CLASS, 'brief');

		return container;
	}
}

customElements.define('experience-card', ExperienceCard);