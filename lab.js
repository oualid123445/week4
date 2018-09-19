window.alert('Beantwoord de volgende vragen alleen met \'ja\' of \'nee\'')

var vraag = prompt('Is de kaas geel?');
var antwoord1;
var antwoord2;

if(vraag == 'ja'){
    antwoord1 = prompt('Zitten er gaten in?')
} else if(vraag == 'nee'){
    antwoord2 = prompt('Heeft de kaas blauwe schimmels?')
} 

var antwoord4;
var antwoord3;

if(antwoord1 == 'ja'){
    antwoord3 = prompt('is de kaas belachelijk duur?')
} else if(antwoord1 == 'nee'){
    antwoord4 = prompt('is de kaas hard als steen?')
} 

var end1;
var end2;

if(antwoord3 == 'ja'){
    end1 = document.write('Emmenthaler')
} else if(antwoord3 == 'nee'){
    end2 = document.write('Leerdammer')
}

var end3;
var end4;

if(antwoord4 == 'ja'){
    end3 = document.write('pamigiano reggiano')
} else if(antwoord4 == 'nee'){
    end4 = document.write('goudse kaas')
}

var antwoord5;
var antwoord6;

if(antwoord2 == 'ja'){
    antwoord5 = prompt("heeft de kaas een korst")
} else if(antwoord2 == 'nee'){
    antwoord6 =  prompt("heeft de kaas een korst")
}



var end5;
var end6;

if(antwoord5 == 'ja'){
    end5 = document.write('Blue de Rochbaron')
} else if(antwoord5 == 'nee'){
    end6 = document.write('Foumme d\'Ambert')
}

var end7;
var end8;

if(antwoord6 == 'ja'){
    end7 = document.write('Camembert')
} else if(antwoord6 == 'nee'){
    end8 = document.write('Mozzarella')
}


