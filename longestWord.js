const longestWord = sentence => {
  const words = sentence.split(" ");
  return words.reduce((longest, word) =>
    word.length > longest.length ? word : longest, ""
  );
};
console.log(longestWord("Practice makes a programmer better"));