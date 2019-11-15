class AppRoot extends _BaseDOM {
	constructor() {
		super();

		let layout = document.createElement('div');
		layout.appendChild(new SectionHeader('Work Experience', 'work', 'divider'));
		layout.appendChild(new WorkIntroduction());
		layout.appendChild(new SectionHeader('Personal Experience', 'personal', 'divider-personal'));
		layout.appendChild(new Footer());

		this.root.appendChild(layout);
	}
}

customElements.define('app-root', AppRoot);