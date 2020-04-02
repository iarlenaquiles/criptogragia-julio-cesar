const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

const encrypterLetter = (letter, step) => {
  const indexLetter = letters.indexOf(letter);

  if (indexLetter == -1) return letter;

  const sumEncryptIndex = indexLetter + step;

  const loopQty = Math.floor(sumEncryptIndex / letters.length);

  const encryptIndex =
    sumEncryptIndex > letters.length
      ? sumEncryptIndex - letters.length * loopQty
      : sumEncryptIndex;

  return letters[encryptIndex];
};

const decrypterLetter = (letter, step) => {
  const indexLetter = letters.indexOf(letter);

  if (indexLetter == -1) return letter;

  const sumEncryptIndex = indexLetter - step;

  const loopQty =
    sumEncryptIndex < 0
      ? Math.ceil(Math.abs(sumEncryptIndex) / letters.length)
      : 0;

  const encryptIndex = sumEncryptIndex + letters.length * loopQty;

  return letters[encryptIndex];
};

exports.cesarEncrypt = (text, step) =>
  text
    .split("")
    .map(letter => encrypterLetter(letter, step))
    .join("");

exports.cesarDecrypt = (text, step) =>
  text
    .split("")
    .map(letter => decrypterLetter(letter, step))
    .join();
