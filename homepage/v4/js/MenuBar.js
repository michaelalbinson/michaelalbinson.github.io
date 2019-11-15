'use strict';

class MenuBar extends _BaseDOM {
	constructor() {
		super();

		this.styles.push(BOOTSTRAP4);
		this.styles.push('./css/menu-bar.css');
		this.createStyles();

		const container = createElement(elements.DIV);
		container.setAttribute(CLASS, 'row centered menu-bar-container');
		container.appendChild(
			MenuBar.getMenuBarCol('Work Experience', '#experience', workExperience)
		);

		container.appendChild(
			MenuBar.getMenuBarCol('Personal Experience', '#personal', personalExperience)
		);

		container.appendChild(MenuBar.getIconCol());

		this.root.appendChild(container);
	}

	/**
	 *
	 * @param title {string}
	 * @param titleLink {string}
	 * @param items {array}
	 * @returns {HTMLElement}
	 */
	static getMenuBarCol(title, titleLink, items) {
		const container = createElement(elements.DIV);
		container.setAttribute(CLASS, 'col-sm');
		container.appendChild(new DropdownMenu(title, titleLink, items));
		return container;
	}

	/**
	 *
	 * @returns {HTMLElement}
	 */
	static getIconCol() {
		const headerIconClasses = 'header-img';
		const container = createElement(elements.DIV);
		container.setAttribute(CLASS, 'col-sm right-align');
		_BaseDOM.addChildrenToElement(container, icons, createIcon);
		return container;

		function createIcon(iconDetails) {
			return new IconLinkElement(iconDetails.src, iconDetails.href, iconDetails.alt, headerIconClasses);
		}
	}
}

customElements.define('menu-bar', MenuBar);