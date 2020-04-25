(function() {
	'use strict';

	const message =
`●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●
                      Hi!
                      
                    __INSERT__
                    
          Thanks for checking out my source!
                 Like it?  Hate it?
                  Give me a shout!
                michael@albinson.ca
●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●`;

	const frames = [
		"^(^_^)^",
		"-('-')-",
		"(>'-')>",
		"<('_'<)",
		"<( '-')>",
		"<('-' )>",
		"-('_')^",
		"^('_')-",
		"~('_')~",
		"^(^_^)^",
		"m(-_-)m"
	];

	let index = 0;
	const lilDance = () => {
		console.clear();
		console.log(message.replace('__INSERT__', frames[index]));

		if (index >= frames.length - 1)
			index = 0;

		index++;
	};

	lilDance();
	if (!window.location.href.includes('file://')) {
		const danceInt = setInterval(lilDance, 500);

		// overwrite error function so we stop clearing the console if there's a problem
		const err = console.error;
		console.error = (...args) => {
			clearInterval(danceInt);
			console.error = err;
			console.error(...args);
		};
	}
})();
