'use strict';


class _BaseDOM extends HTMLElement {
	constructor() {
		super();
		this.root = this.attachShadow({ mode: 'open' });
		this.styles = [];
		this.scripts = [];
	}

	createStyles() {
		_BaseDOM.addChildrenToElement(this.root, this.styles, getStyleElement);

		function getStyleElement(href) {
			var style = createElement('link');
			style.setAttribute('rel', 'stylesheet');
			style.setAttribute(HREF, href);
			style.setAttribute(TYPE, 'text/css');
			return style;
		}
	}

	createScripts() {
		_BaseDOM.addChildrenToElement(this.root, this.scripts, getScriptElement);

		function getScriptElement(src) {
			var script = createElement('script');
			script.setAttribute(SRC, src);
			script.setAttribute(TYPE, 'text/javascript');
			return script;
		}
	}

	/**
	 *
	 * @param rootElement {HTMLElement}
	 * @param iterator {array|object}
	 * @param createElementFn {function} (object) => HTMLElement predicate
	 */
	static addChildrenToElement(rootElement, iterator, createElementFn) {
		for (let index in iterator) {
			if (!iterator.hasOwnProperty(index))
				continue;

			let child = createElementFn(iterator[index], index);
			rootElement.appendChild(child);
		}
	}

    /**
     * @param eventName {string}
     * @param callback {function}
     */
	static addListener(eventName, callback) {
		document.body.addEventListener(eventName, callback);
	}

    /**
     * @param eventName {string}
     */
	static invokeEvent(eventName) {
		let evt = new Event(eventName);
		document.body.dispatchEvent(evt);
	}
}
