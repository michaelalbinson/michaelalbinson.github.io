"use strict";

var currentDel = 'schedule';
var currentPartner = 'sponsors-header';

function switchDelegateSec(toThis) {
	if (toThis === currentDel)
		return;

	switchVisible(currentDel, toThis);
	currentDel = toThis;
}

function switchPartnerSec(toThis) {
	if (toThis === currentPartner)
		return;

	switchVisible(currentPartner, toThis);
	currentPartner = toThis;
}

function switchVisible(from, to) {
	$('#' + from).addClass('hidden');
	$('#' + from + '-button').removeClass('active');
	$('#' + to).removeClass('hidden');
	$('#' + to + '-button').addClass('active');
}