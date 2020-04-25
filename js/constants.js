'use strict';

const BOOTSTRAP4 = 'css/bootstrap4.css';

const CLASS = "class";
const HREF = 'href';
const SRC = 'src';
const TYPE = 'type';
const ALT = 'alt';
const ID = 'id';

const elements = {
	DIV: 'div',
	SPAN: 'span',
	A: 'a',
	IMG: 'img',
	SECTION: 'section',
	BUTTON: 'button',
	P: 'p'
};

const createElement = elType => document.createElement(elType);
