class SkillTicker extends _BaseDOM {
	connectedCallback() {
		this.styles.push('./css/ticker.css');
		this.createStyles();

		var tickerWrap = document.createElement('div');
		tickerWrap.setAttribute('class', 'ticker-wrap');
		var ticker = document.createElement('div');
		ticker.setAttribute('class', 'ticker');
		tickerItems.forEach((t) => {
			var tickerItem = document.createElement('div');
			tickerItem.innerText = t;
			tickerItem.setAttribute('class', 'ticker__item');
			ticker.appendChild(tickerItem);
		});

		tickerWrap.appendChild(ticker);
		this.root.appendChild(tickerWrap);
	}
}

customElements.define('skill-ticker', SkillTicker);