export const getAlphabetLetters = () => {
  const alphabet: string[] = []

  for (let i = 65; i <= 90; i++) {
    alphabet.push(String.fromCharCode(i))
  }

  return { alphabet }
}
