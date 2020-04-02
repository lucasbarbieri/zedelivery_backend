exports.validateCobertura = function(data) {
  /** Empty and Type Validation */
  if (
    typeof data !== "object" ||
    !data.type ||
    typeof data.type !== "string" ||
    typeof data.coordenadas !== "object"
  ) {
    return false;
  }

  /** Check if have minimum level necessary */
  if (
    typeof data.coordenadas[0] === "undefined" ||
    typeof data.coordenadas[0][0] === "undefined" ||
    typeof data.coordenadas[0][0][0] === "undefined" ||
    typeof data.coordenadas[0][0][0][0] === "undefined"
  ) {
    return false;
  }

  /** Check if the first item is equal the last */
  const coordInfoArr = data.coordenadas[0][0];
  const firstPosition = {
    x: coordInfoArr[0][0],
    y: coordInfoArr[0][1]
  };
  const lastPosition = {
    x: coordInfoArr[coordInfoArr.length - 1][0],
    y: coordInfoArr[coordInfoArr.length - 1][1]
  };

  if (
    firstPosition.x !== lastPosition.x ||
    firstPosition.y !== lastPosition.y
  ) {
    return false;
  }

  return true;
};

exports.validateAddress = function(data) {
  if (
    !data.type ||
    typeof data.type !== "string" ||
    typeof data.coordenates !== "object"
  ) {
    return false;
  } else {
    return true;
  }
};
