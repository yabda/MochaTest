module.exports = function(chaine){
	key = parseInt(chaine.substring(13,15));
	rest = parseInt(chaine.substring(0,13));

	return (chaine.length==15 && (97-(rest%97))==key)
}