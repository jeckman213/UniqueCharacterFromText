const text = "If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50. For example: [‘H’, ‘i’, ‘!’, ‘ ’]"

const minLength = 50;

// Function to get unique array from a given text and how much of that text should remain
// NOTE: Text should always be a type string; minLength should always be type number
function getUniqueArray(text, minLength = 0) {
	// Split paragraph text into an array of char
	splitText = text.split("");
  
  // Creation of result array for holding output
  // Creation of remainingLimit variable for holding how many characters can be cycled through
  var result = [],
  		remainingLimit = splitText.length - minLength;
  
  // Loop for cycling through split text
  // Determines if the character is already in the result array or not
  // If not inserts character
  splitText.forEach(char => {
		if (result.includes(char))
    	remainingLimit--;
    else if (remainingLimit > 0) {
    	result.push(char);
      remainingLimit--;
    }
	});
  
  // Prints out result
  console.log(result);
  
}

getUniqueArray(text, minLength);