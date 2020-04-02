exports.validateCoverageArea = function(data) {
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
    typeof data.coordinates !== "object"
  ) {
    return false;
  } else {
    return true;
  }
};
