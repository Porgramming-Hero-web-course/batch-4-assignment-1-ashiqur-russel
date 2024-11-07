const countWordOccurrences = (text: string, word: string): number => {
  const splittedWords = text.toLowerCase().split(" ");

  const matchedWords = splittedWords.filter(
    (currentWord) => currentWord === word
  );
  return matchedWords.length;
};

countWordOccurrences("I Love typescript", "typescript");
