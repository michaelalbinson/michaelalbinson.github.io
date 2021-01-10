'use strict';


/**
 * Borrowed from albinsonium
 */
class ALBModal extends _BaseDOM {
	constructor(title, body, isHTML) {
		super();

		this.bootstrapStyles();
		this.styles.push('css/modal.css');
		this.createStyles();

		this._title = title;
		if (isHTML)
			this._htmlBody = body;
		else
			this._body = body;

		this._openHandlers = [];
		this._closeHandlers = [];

		this._buttons = [];

		this.getFrame();
	}

	/**
	 *
	 */
	getFrame() {
		const div = ElementFactory(elements.DIV, 'modal-background');
		div.setAttribute(ATTRS.ROLE, 'dialog');
		div.setAttribute(ATTRS.TABINDEX, '-1');

		const modalFrame = ElementFactory(elements.DIV, 'modal-frame');
		modalFrame.setAttribute(ATTRS.ROLE, 'document');

		const content = ElementFactory(elements.DIV, 'modal-content');
		// let scripts dynamically change what they'd like to in the modal content
		this._modalFrame = content;

		modalFrame.appendChild(content);
		div.appendChild(modalFrame);
		this.root.appendChild(div);
	}

	/**
	 *
	 * @param title
	 */
	getHeader(title) {
		const modalHeader = ElementFactory(elements.DIV, 'modal-header');
		const headerText = ElementFactory(elements.H2, '', title);
		const closeButton = ElementFactory(elements.BUTTON, 'btn btn-default close');
		closeButton.setAttribute(ATTRS.ARIA_LABEL, 'Close');

		const ariaText = ElementFactory(elements.SPAN, '', '&times;', null, {html: true});
		ariaText.setAttribute(ATTRS.ARIA_HIDDEN, 'true');

		closeButton.appendChild(ariaText);
		closeButton.addEventListener(EVENTS.CLICK, this.close.bind(this));

		modalHeader.appendChild(headerText);
		modalHeader.appendChild(closeButton);
		this._modalFrame.appendChild(modalHeader);
	}

	/**
	 *
	 * @param body
	 */
	getBody(body) {
		const modalBody = ElementFactory(elements.DIV, 'modal-body');
		if (this._body)
			modalBody.appendChild(new ElementFactory(elements.P, '', body));
		else
			modalBody.appendChild(this._htmlBody);

		this._modalFrame.appendChild(modalBody);
	}

	/**
	 *
	 */
	getFooter() {
		const modalFooter = ElementFactory(elements.DIV, 'modal-footer');
		const includeCloseButton = this.getFooterButtons(modalFooter);
		this.getAddedButtons(modalFooter);
		if (includeCloseButton) {
			const button = ElementFactory(elements.BUTTON, 'btn btn-primary', 'Close');
			button.addEventListener(EVENTS.CLICK, this.close.bind(this));
			modalFooter.appendChild(button);
		}

		this._modalFrame.appendChild(modalFooter);
	}

	/**
	 *
	 */
	focusTrap() {
		const KEY_CODE_TAB = 9;
		const focusableElements = this.root.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
		const firstFocusable = focusableElements[0];
		const lastFocusable = focusableElements[focusableElements.length - 1];

		firstFocusable.focus();

		this.root.addEventListener(EVENTS.KEY_DOWN, (e) => {
			console.log('keydown!', e.target);
			const isTabPressed = (e.key === 'Tab' || e.keyCode === KEY_CODE_TAB);
			if (!isTabPressed)
				return;

			/* shift + tab */
			if (e.shiftKey) {
				if (document.activeElement === firstFocusable) {
					lastFocusable.focus();
					e.preventDefault();
				}
			} else /* tab */ {
				if (document.activeElement === lastFocusable) {
					firstFocusable.focus();
					e.preventDefault();
				}
			}
		});
	}

	/**
	 *
	 * @param parent
	 * @return {boolean}
	 */
	getFooterButtons(parent) {
		return true;
	}

	/**
	 *
	 * @param parent
	 */
	getAddedButtons(parent) {
		this._buttons.forEach(button => {
			const html = button.type === 'link' ?
				new ElementFactory(elements.A, 'btn btn-primary', button.href, button.label) :
				new ElementFactory(elements.BUTTON, 'btn btn-primary', button.label);

			if (button.callback)
				html.addEventListener(EVENTS.CLICK, button.callback);

			parent.appendChild(html);
		});
	}

	/**
	 * Add a function to call when the modal is opened
	 * @param fn {function}
	 */
	addOpenListener(fn) {
		this._openHandlers.push(fn);
	}

	/**
	 * Add a function to call when the modal is closed
	 * @param fn {function}
	 */
	addCloseListener(fn) {
		this._closeHandlers.push(fn);
	}

	/**
	 *
	 * @param event
	 * @param fn
	 */
	addActionListener(event, fn) {

	}

	/**
	 *
	 * @param buttonObj {{label: string, type: string=, href: string=, callback: function=}}
	 * @return {ALBModal}
	 */
	addButton(buttonObj) {
		this._buttons.push(buttonObj);
		return this;
	}

	/**
	 * Open the modal and call attached open listeners
	 */
	open() {
		this.getHeader(this._title);
		this.getBody(this._body);
		this.getFooter();

		// only one modal can be open at a time!
		if (ALBModal.currentModal)
			ALBModal.currentModal.close();

		this._openHandlers.forEach(fn => fn(this));

		document.body.style.overflowY = 'hidden';
		document.body.appendChild(this);
		setTimeout(() => this.focusTrap(), 50);
		ALBModal.currentModal = this;
	}

	/**
	 * Close the modal and call attached close handlers
	 */
	close() {
		this._closeHandlers.forEach(fn => fn(this));

		this.remove();
		document.body.style.overflowY = 'scroll';
		ALBModal.currentModal = null;
	}
}

ALBModal.currentModal = null;

customElements.define('alb-modal', ALBModal);
