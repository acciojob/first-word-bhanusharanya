function firstWord(s) {
  // Trim the string to remove leading and trailing white spaces
  s = s.trim();

  // Check if the string is empty
  if (s.length === 0) {
    return '';
  }

  const firstSpaceIndex = s.indexOf(' ');

  // If there are no spaces, return the entire string
  if (firstSpaceIndex === -1) {
    return s;
  }

  return s.substring(0, firstSpaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));