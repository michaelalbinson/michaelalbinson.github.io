function switchSections(toSection){
	document.getElementsByClassName('compassForm')[0].style.display = 'none';
	document.getElementsByClassName('speedForm')[0].style.display = 'none';
	document.getElementsByClassName('toxicForm')[0].style.display = 'none';

	document.getElementsByClassName('leftButton')[0].style.border = 'none';
	document.getElementsByClassName('centerButton')[0].style.border = 'none';
	document.getElementsByClassName('rightButton')[0].style.border = 'none';

	document.getElementsByClassName('leftButton')[0].style.padding = '3px';
	document.getElementsByClassName('centerButton')[0].style.padding = '3px';
	document.getElementsByClassName('rightButton')[0].style.padding = '3px';

	switch(toSection){
		case 'left':
			document.getElementsByClassName('compassForm')[0].style.display = 'block';
			document.getElementsByClassName('leftButton')[0].style.border = 'inset';
			document.getElementsByClassName('leftButton')[0].style.padding = '0';
			document.getElementsByClassName('optionHeader')[0].innerHTML = 'currentStage = ';
			break;
		case 'center':
			document.getElementsByClassName('speedForm')[0].style.display = 'block';
			document.getElementsByClassName('centerButton')[0].style.border = 'inset';
			document.getElementsByClassName('centerButton')[0].style.padding = '0';
			document.getElementsByClassName('optionHeader')[0].innerHTML = 'textSpeedOptions = ';
			break;
		case 'right':
			document.getElementsByClassName('toxicForm')[0].style.display = 'block';
			document.getElementsByClassName('rightButton')[0].style.border = 'inset';
			document.getElementsByClassName('rightButton')[0].style.padding = '0';
			document.getElementsByClassName('optionHeader')[0].innerHTML = 'advancedOptions = ';
			break;
		default:
			console.log('uncaught exception: unable to switch sections');
	}
}