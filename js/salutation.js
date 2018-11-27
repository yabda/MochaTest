
module.exports = function(chaine){
	if (typeof(chaine)!=="string" || chaine ==="")
		throw new Error("invalid input, not a string");
	return "bonjour, "+chaine;
}

