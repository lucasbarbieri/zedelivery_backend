exports.validateCoverageArea = function (data) {
  /** Empty and Type Validation */
  if (
    typeof data !== "object" ||
    !data.type ||
    typeof data.type !== "string" ||
    typeof data.coordinates !== "object"
  ) {
    return false;
  }

  /** Check if have minimum level necessary */
  if (
    typeof data.coordinates[0] === "undefined" ||
    typeof data.coordinates[0][0] === "undefined" ||
    typeof data.coordinates[0][0][0] === "undefined" ||
    typeof data.coordinates[0][0][0][0] === "undefined"
  ) {
    return false;
  }

  /** Check if the first item is equal the last */
  const coordInfoArr = data.coordinates[0][0];
  const firstPosition = {
    x: coordInfoArr[0][0],
    y: coordInfoArr[0][1],
  };
  const lastPosition = {
    x: coordInfoArr[coordInfoArr.length - 1][0],
    y: coordInfoArr[coordInfoArr.length - 1][1],
  };

  if (
    firstPosition.x !== lastPosition.x ||
    firstPosition.y !== lastPosition.y
  ) {
    return false;
  }

  return true;
};

exports.validateAddress = function (data) {
  if (
    !data.type ||
    typeof data.type !== "string" ||
    typeof data.coordinates !== "object"
  ) {
    return false;
  } else {
    return true;
  }
};

exports.validateCNPJ = function (cnpj) {
  if (
    !cnpj ||
    cnpj.length != 14 ||
    cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999"
  ) {
    return false;
  }

  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  if (resultado != digitos.charAt(0)) {
    return false;
  }

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  if (resultado != digitos.charAt(1)) {
    return false;
  }

  return true;
};
