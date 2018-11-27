module.exports = function(banque, guichet, compte, clef){
	var txtBanque=Formater(banque);
	var txtGuichet=Formater(guichet);
	var txtCompte=Formater(compte);

	var txtBanqueSansLettre=FormaterRibNir(txtBanque);
	var txtGuichetSansLettre=FormaterRibNir(txtGuichet);
	var txtCompteSansLettre=FormaterRibNir(txtCompte);
    var cle = 97 - ( ( 89 * parseInt(txtBanqueSansLettre,10) + 15 * parseInt(txtGuichetSansLettre,10) + 3 * parseInt(txtCompteSansLettre,10) ) % 97);
	var txtCle=Formater(cle,2);
	return (clef==txtCle);

}

function FormaterRibNir(texte) {

	return strtr(texte.toString(),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","12345678912345678923456789");
}

function Formater(texte,longueur) {

	var resultat=(texte==null ? "" : texte.toString().toUpperCase().substr(0,longueur));
	while (resultat.length<longueur) resultat="0"+resultat;
	return resultat;
}

function strtr (str, from, to) {
    var fr = '', i = 0, j = 0, lenStr = 0, lenFrom = 0;
    var tmpFrom = [];
    var tmpTo   = [];
    var ret = '';
    var match = false;
    // Received replace_pairs?
    // Convert to normal from->to chars
    if (typeof from === 'object') {
        for (fr in from) {
            tmpFrom.push(fr);
            tmpTo.push(from[fr]);
        }
        from = tmpFrom;
        to = tmpTo;
    }
    // Walk through subject and replace chars when needed
    lenStr  = str.length;
    lenFrom = from.length;
    for (i = 0; i < lenStr; i++) {
        match = false;
        for (j = 0; j < lenFrom; j++) {
            if (str.substr(i, from[j].length) == from[j]) {
                match = true;
                // Fast forward
                i = (i + from[j].length)-1;
                break;
            }
        }
        if (false !== match) {
            ret += to[j];
        } else {
            ret += str[i];
        }
    }
    return ret;
}