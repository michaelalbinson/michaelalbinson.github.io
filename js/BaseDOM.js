'use strict';


class _BaseDOM extends HTMLElement {
	constructor() {
		super();
		this.root = this.attachShadow({ mode: 'open' });
		this.styles = [];
		this.scripts = [];

		this._provider = window.top.__alb_js ? window.top.__alb_js.provider : null;
	}

	createStyles() {
		_BaseDOM.addChildrenToElement(this.root, this.styles, _BaseDOM._getStyleElement);
	}

	addStyle(stylePath) {
		this.root.appendChild(_BaseDOM._getStyleElement(stylePath));
	}

	appendChild(newChild) {
		this.root.appendChild(newChild);
	}

	static _getStyleElement(href) {
		const style = new ElementFactory('link');
		style.setAttribute(ATTRS.REL, 'stylesheet');
		style.setAttribute(ATTRS.HREF, href);
		style.setAttribute(ATTRS.TYPE, 'text/css');
		return style;
	}

	createScripts() {
		_BaseDOM.addChildrenToElement(this.root, this.scripts, getScriptElement);

		function getScriptElement(src) {
			var script = new ElementFactory('script');
			script.setAttribute(ATTRS.SRC, src);
			script.setAttribute(ATTRS.TYPE, 'text/javascript');
			return script;
		}
	}

	bootstrapStyles(create) {
		this.styles.push(_BaseDOM.BOOTSTRAP_STYLE);
		this.styles.push('css/index.css');
		if (create)
			this.createStyles();
	}

	/**
	 *
	 * @param rootElement {HTMLElement|ShadowRoot}
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
	 * @param emitter {object}
	 * @param data {object=}
	 */
	static invokeEvent(eventName, emitter, data) {
		let evt = new Event(eventName);
		evt.ampu_emitter = emitter;
		evt.data = data;
		document.body.dispatchEvent(evt);
	}

	getCssRoot() {
		return window.top.__alb_shim.cssRoot;
	}

	getAlbCssRoot() {
		return window.top.__alb_shim.albRoot;
	}
}

// default the css and alb roots
window.top.__alb_shim = window.top.__alb_shim || {
	cssRoot: '',
	albRoot: ''
};

_BaseDOM.BOOTSTRAP_STYLE = 'css/bootstrap4.css';
