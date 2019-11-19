'use strict';

class SkillTicker extends _BaseDOM {
	connectedCallback() {
		this.styles.push('./css/ticker.css');
		this.createStyles();

		var tickerWrap = createElement(elements.DIV);
		tickerWrap.setAttribute(CLASS, 'ticker-wrap');
		var ticker = createElement(elements.DIV);
		ticker.setAttribute(CLASS, 'ticker');

		_BaseDOM.addChildrenToElement(ticker, tickerItems, (t) => {
			var tickerItem = createElement(elements.DIV);
			tickerItem.innerText = t;
			tickerItem.setAttribute(CLASS, 'ticker__item');
			return tickerItem;
		});

		tickerWrap.appendChild(ticker);
		this.root.appendChild(tickerWrap);
	}
}

customElements.define('skill-ticker', SkillTicker);