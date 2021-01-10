'use strict';

class DropdownMenu extends _BaseDOM {
	constructor(title, titleLink, listItems) {
		super();

		this.styles.push('css/dropdown.css');
		this.createStyles();

		let dropdown = createElement(elements.DIV);
		dropdown.setAttribute(CLASS, 'dropdown');
		dropdown.appendChild(DropdownMenu.getHeader(title, titleLink));

		let dropdownContent = createElement(elements.DIV);
		dropdownContent.setAttribute(CLASS, 'dropdown-content');
		DropdownMenu.getListItems(dropdownContent, listItems);
		dropdown.appendChild(dropdownContent);

		this.root.appendChild(dropdown);
	}

	static getHeader(title, titleLink) {
		let dropdownHeader = createElement(elements.SPAN);
		dropdownHeader.setAttribute(CLASS, 'dropdown-owner');

		let bold = createElement('strong');

		let link = createElement(elements.A);
		link.innerText = title;
		link.setAttribute(HREF, titleLink);
		link.addEventListener('click', () => {
			_BaseDOM.invokeEvent('section' + titleLink)
		});

		bold.appendChild(link);
		dropdownHeader.appendChild(bold);
		return dropdownHeader;
	}

	static getListItems(dropdownList, listItems) {
		_BaseDOM.addChildrenToElement(dropdownList, listItems, (item, index) => {
			let listItem = createElement(elements.A);
			listItem.setAttribute(HREF, item.link);
			listItem.addEventListener('click', () => {
				_BaseDOM.invokeEvent('subsection' + item.link);
			});

			let boldItem = createElement('strong');
			boldItem.innerText = item.text;

			listItem.appendChild(boldItem);

			if (Number(index) !== listItems.length - 1)
				listItem.appendChild(new CustomHR());

			return listItem;
		})
	}
}

customElements.define('dropdown-menu', DropdownMenu);
