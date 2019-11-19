'use strict';

class TechSection extends _BaseDOM {
	constructor(title, cards) {
		super();

		this.styles.push(BOOTSTRAP4);
		this.styles.push('./css/tech-section.css');
		this.createStyles();

		const container = createElement(elements.SECTION);
		container.setAttribute(CLASS, 'tech-container');
		container.setAttribute(ID, title.toLowerCase().replace(' ', '-'));

		const h3 = createElement('h3');
		h3.innerText = title;
		container.appendChild(h3);
		container.appendChild(new CustomHR());

		container.appendChild(TechSection.getCards(cards));

		this.root.appendChild(container);
	}

	/**
	 * @param cardData {[{title: string, image: object, dates: string, bullets: array}]}
	 */
	static getCards(cardData) {
		let count = 0;
		const container = createElement(elements.DIV);
		container.setAttribute(CLASS, 'row align-items-start');
		for (let cardIndex in cardData) {
			if (!cardData.hasOwnProperty(cardIndex))
				continue;

			let card = cardData[cardIndex];
			let cardContainer = createElement(elements.DIV);
			cardContainer.setAttribute(CLASS, 'col-md');
			cardContainer.appendChild(
				new ExperienceCard(
					card.title, card.image.src, card.image.href,
					card.image.alt, card.dates, card.bullets
				)
			);
			container.appendChild(cardContainer);

			count++;
		}

		return container;
	}
}

customElements.define('tech-section', TechSection);