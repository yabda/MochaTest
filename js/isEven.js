module.exports = function (number){
	if (number % 1 !== 0)
		throw new Error("invalid input, not a integer"); 
	else
		return (number%2==0);
}