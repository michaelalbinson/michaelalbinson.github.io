class AppRoot extends _BaseDOM {
	constructor() {
		super();

		let layout = createElement(elements.DIV);
		layout.appendChild(new MenuBar());
		layout.appendChild(new Splash());
		layout.appendChild(new SectionHeader('Work Experience', 'experience', 'divider'));
		layout.appendChild(new WorkIntroduction());
		layout.appendChild(new SectionHeader('Personal Experience', 'personal', 'divider-personal'));
		layout.appendChild(new Footer());

		this.root.appendChild(layout);
	}
}

customElements.define('app-root', AppRoot);