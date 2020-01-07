'use strict';

class TechSection extends _BaseDOM {
	constructor(title, cards, cardStyle, id) {
		super();

		const _id = id || title.toLowerCase().replace(' ', '-');

		if (cards.length < 1)
			return;

		this.styles.push(BOOTSTRAP4);
		this.styles.push('./css/tech-section.css');
		this.createStyles();

		const container = createElement(elements.SECTION);
		container.setAttribute(CLASS, 'tech-container');
		container.setAttribute(ID, _id);

		const h3 = createElement('h3');
		h3.innerText = title;
		container.appendChild(h3);
		container.appendChild(new CustomHR());

		container.appendChild(TechSection.getCards(cards, cardStyle));

		_BaseDOM.addListener('subsection#' + _id, () => {
			container.scrollIntoView();
			window.scrollBy(0, -75);
		});

		this.root.appendChild(container);
	}

	/**
	 * @param cardData {[{title: string, image: object, dates: string, bullets: array, subtitle: string}]}
	 * @param cardStyle {string}
	 */
	static getCards(cardData, cardStyle) {
		const getNewRow = () => {
			let row = createElement(elements.DIV);
			row.setAttribute(CLASS, 'row align-items-start');
			return row;
		};

		let isSecond = false;
		const container = createElement(elements.DIV);

		let row = getNewRow();
		for (let cardIndex in cardData) {
			if (!cardData.hasOwnProperty(cardIndex))
				continue;

			let card = cardData[cardIndex];
			if (!card.bullets || card.bullets.length === 0 || card.bullets[0].toLowerCase() === 'todo')
				continue;

			let cardContainer = createElement(elements.DIV);
			cardContainer.setAttribute(CLASS, 'col-md');
			cardContainer.appendChild(
				new ExperienceCard(
					card.title, card.image.src, card.image.href,
					card.image.alt, card.dates, card.bullets,
					cardStyle || TechSection.cardStyles.TEACH,
					card.subtitle
				)
			);

			row.appendChild(cardContainer);

			if (isSecond) {
				container.appendChild(row);
				row = getNewRow();
				// isSecond = false;
			} else
				isSecond = true
		}

		// in case we only have one card in a row, make sure we append it
		if (isSecond)
			container.appendChild(row);

		return container;
	}
}

TechSection.cardStyles = {
	EDU: 'edu',
	CS: 'cs',
	MECH: 'mech',
	TEACH: 'teach'
};

customElements.define('tech-section', TechSection);
