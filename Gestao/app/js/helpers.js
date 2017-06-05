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