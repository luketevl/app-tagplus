const mapaAccentsHex 	= {
	a : /[\xE0-\xE6]/g,
  A : /[\xC0-\xC6]/g,
  e : /[\xE8-\xEB]/g,
  E : /[\xC8-\xCB]/g,
  i : /[\xEC-\xEF]/g,
  I : /[\xCC-\xCF]/g,
  o : /[\xF2-\xF6]/g,
  O : /[\xD2-\xD6]/g,
  u : /[\xF9-\xFC]/g,
  U : /[\xD9-\xDC]/g,
  c : /\xE7/g,
  C : /\xC7/g,
  n : /\xF1/g,
  N : /\xD1/g,
	};

export const replace_accents = text => {
  let string = text;
  for ( const letter in mapaAccentsHex ) {
		const RegularExpression = mapaAccentsHex[letter];
		string = string.replace( RegularExpression, letter );
	}

	return string;
};


const _calcEanDv = value => {
	
	let pares = 0 ;
	let impares = 0;
	
	const cod = value.replace('-','');
	
	/* verificando se tem todos os digitos, caso nao haja criando-o e fazendo verificacao caso tenha */
	if(cod.length <= 11) return false;

	/* fazendo verificacao*/
	for (let i=0; i <= 11; i++){
		if( i%2 == 0 ){
			pares += parseInt(value[i]);
		}else{
			impares += parseInt(value[i]) * 3;
		}	
	}

	const dv = 10 - ((impares + pares) % 10);
	return (dv > 9) ? 0 : dv;
}

export const generateEan = () => {
	let cod 	= ((Math.floor((Math.random() * 99999 + 1))) * new Date().getTime()).toString();
	cod = "20"+cod.substr(-10);
	cod += _calcEanDv(cod);
	return cod;
};

