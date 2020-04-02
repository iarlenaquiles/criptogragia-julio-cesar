require("dotenv").config();

const sha1 = require("node-sha1");
const uploder = require("./uploader.js");
const hash = require("./hash.js");
const service = require("./service.js");

main();

async function main() {
  try {
    // salvar o conteudo no arquivo json
    const result = await service.getInfoToEncrypt();
    uploder.createOrUpdateFile("./answer.json", JSON.stringify(result));

    // Decifrar o texto e atualizar o arquivo
    const textDecrypted = hash.cesarDecrypt(
      result.cifrado,
      result.numero_casas
    );
    const updatedJson = { ...result, decifrado: textDecrypted };
    uploder.createOrUpdateFile("./answer.json", JSON.stringify(updatedJson));

    // encriptar o texto com sha1
    const encryptText = sha1(updatedJson.decifrado);
    const updateJsonSha1 = {
      ...updatedJson,
      resumo_criptografico: encryptText
    };
    uploder.createOrUpdateFile("./answer.json", JSON.stringify(updateJsonSha1));

    // enviar dados pra api
    const response = await service.sendData("./answer.json");
    console.log(response);
  } catch (e) {
    console.error(e);
  }
}
