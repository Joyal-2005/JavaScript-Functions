const capitalizeWords = sentence =>
  sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
    console.log(capitalizeWords("electronics and communication engineering"));