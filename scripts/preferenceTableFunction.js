function switchSections(toSection){
	document.getElementsByClassName('compassForm')[0].style.display = 'none';
	document.getElementsByClassName('speedForm')[0].style.display = 'none';
	document.getElementsByClassName('toxicForm')[0].style.display = 'none';

	document.getElementsByClassName('leftButton')[0].style.border = 'none';
	document.getElementsByClassName('centerButton')[0].style.border = 'none';
	document.getElementsByClassName('rightButton')[0].style.border = 'none';

	document.getElementsByClassName('leftButton')[0].style.padding = '4px';
	document.getElementsByClassName('centerButton')[0].style.padding = '4px';
	document.getElementsByClassName('rightButton')[0].style.padding = '4px';

	switch(toSection){
		case 'left':
			document.getElementsByClassName('compassForm')[0].style.border = 'block';
			document.getElementsByClassName('leftButton')[0].style.border = 'inset';
			document.getElementsByClassName('leftButton')[0].style.padding = '0';
			break;
		case 'center':
			document.getElementsByClassName('speedForm')[0].style.display = 'block';
			document.getElementsByClassName('centerButton')[0].style.border = 'inset';
			document.getElementsByClassName('centerButton')[0].style.padding = '0';
			break;
		case 'right':
			document.getElementsByClassName('toxicForm')[0].style.display = 'block';
			document.getElementsByClassName('rightButton')[0].style.border = 'inset';
			document.getElementsByClassName('rightButton')[0].style.padding = '0';
			break;
		default:
			console.log('uncaught exception: unable to switch sections');
	}
}