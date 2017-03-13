"use strict";

var current = 0;
function toggleSelection(num) {
    hideAll();
    for (var i = 1; i <= num; i++)
        $('#color-' + i).removeClass('hidden');

    $('#resistor-' + num +'-band').removeClass('hidden');
    $('#' + num).addClass('active');
    $('#' + current).removeClass('active');
    current = num;
    $('#calc').removeClass('hidden');
    correctColors();
    showCalculations();
}

function hideAll() {
    for (var i = 1; i <= 6; i++) {
        var colorEl = $('#color-' + i);
        if (!colorEl.hasClass('hidden'))
            colorEl.addClass('hidden');

        var resEl = $('#resistor-'+ i + '-band');
        if (!resEl.hasClass('hidden'))
            resEl.addClass('hidden');
    }
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip({delay: { "show": 500, "hide": 100 }});
});

function calculate() {
    var currentBands = bands[current];
    var tol = $('#tolerance');
    var res = $('#resistance');
    if(!allAreFilled(current))
       return clearCalcs();

    switch(current) {
        case(1):
            tol.val('Not applicable');
            res.val(colors[currentBands['color-1']] + ' ' + decodeEntities('&#8486;'));
            break;
        case(2):
            tol.val('Not applicable');
            res.val(getNumberString(colors[currentBands['color-1']], colors[currentBands['color-2']]));
            break;
        case(3):
            tol.val('Not applicable');
            res.val(getNumberString(colors[currentBands['color-1']], colors[currentBands['color-2']],
                    multipliers[currentBands['color-3']]));
            break;
        case(4):
            tol.val(tolerance[currentBands['color-4']] ? tolerance[currentBands['color-4']] :'Not a valid tolerance');
            res.val(getNumberString(colors[currentBands['color-1']], colors[currentBands['color-2']],
                    multipliers[currentBands['color-3']]));
            break;
        case(5):
            tol.val(tolerance[currentBands['color-5']] ? tolerance[currentBands['color-5']] :'Not a valid tolerance');
            res.val(getNumberString(colors[currentBands['color-1']], colors[currentBands['color-2']],
                colors[currentBands['color-3']], multipliers[currentBands['color-4']]));
            break;
        case(6):
            break;
        default:
            break;
    }
}

function getNumberString(one, two, multiplier) {
    if (arguments.length < 3)
        return processNumber(one + two) + decodeEntities('&#8486;');
    else if (arguments.length == 3)
        return processNumber((one + two) * multiplier) + decodeEntities('&#8486;');
    else if (arguments.length == 4)
        return processNumber((one + two + multiplier) * arguments[3])+ decodeEntities('&#8486;');
}

function processNumber(num) {
    if (num >= 1000000)
        return num/1000000 + ' M';
    else if (num >= 1000)
        return num/1000 + ' k';
    else if (num <= 1)
        return (num).toFixed(2) + ' ';
    else
        return (num) + ' ';
}

var colors = {
    "black": '0',
    "brown": '1',
    "red": '2',
    "orange": '3',
    "yellow": '4',
    "green": '5',
    "blue": '6',
    "violet": '7',
    "grey": '8',
    "white": '9'
};

var multipliers = {
    "black": 1,
    "brown": 10,
    "red": 100,
    "orange": 1000,
    "yellow": 10000,
    "green": 100000,
    "blue": 1000000,
    "violet": 10000000,
    "gold": 0.1,
    "silver": 0.01
};

var tolerance = {
    "brown": "1%",
    "red": "2%",
    "green": "0.5%",
    "blue": "0.25%",
    "violet": "0.10%",
    "grey": "0.05%",
    "gold": "5%",
    "silver": "10%"
};

var bands = { //holds current band colors
    "1": {
        "color-1" : ""
    },
    "2": {
        "color-1" : "",
        "color-2" : ""
    },
    "3": {
        "color-1" : "",
        "color-2" : "",
        "color-3" : ""
    },
    "4": {
        "color-1" : "",
        "color-2" : "",
        "color-3" : "",
        "color-4" : ""
    },
    "5": {
        "color-1" : "",
        "color-2" : "",
        "color-3" : "",
        "color-4" : "",
        "color-5" : ""
    },
    "6": {
        "color-1" : "",
        "color-2" : "",
        "color-3" : "",
        "color-4" : "",
        "color-5" : "",
        "color-6" : ""
    }
};

function allAreFilled(curr) {
    var obj = bands[curr];
    for (var prop in obj) {
        if (!obj.hasOwnProperty(prop))
            continue;

        if (obj[prop] == "")
            return false
    }

    return true;
}

function clearCalcs() {
    $('#tolerance').val('');
    $('#resistance').val('');
}

function showCalculations() {
    $('#tolerance').parent().removeClass('hidden');
}

function correctColors() {
    for (var prop in bands[current]) {
        if (!bands[current].hasOwnProperty(prop))
            continue;

        if(bands[current][prop] != "")
            $('#selected-' + prop.replace('color-', '')).addClass(bands[current][prop]);
        else
            $('#selected-' + prop.replace('color-', '')).attr('class','');
    }
}

function activate(el) {
    var self = $(el);
    var parent = self.parent();
    var num = parent.attr('id').replace('color-', '');
    var selectBox = $('#selected-' + num);
    var band = $('#r' + current + '-band' + num);

    bands[current][parent.attr('id')] = self.attr('class'); // add current color to the band list

    band.removeClass().addClass(self.attr('class') + ' band'); // change resistor band color
    selectBox.removeClass().addClass(self.attr('class')); // change selectBox color
    calculate();
}

function decodeEntities(encodedString) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    return textArea.value;
}