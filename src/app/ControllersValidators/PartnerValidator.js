const yup = require("yup");
const {
  validateCoverageArea,
  validateAddress,
  validateCNPJ,
} = require("../../helpers/validators");

yup.addMethod(yup.string, "coverageArea", function (message) {
  return yup
    .mixed()
    .test("coverageArea", message || "Invalid coverage area", (value) =>
      validateCoverageArea(value)
    );
});

yup.addMethod(yup.string, "address", function (message) {
  return yup
    .mixed()
    .test("address", message || "Endereço inválido", (value) =>
      validateAddress(value)
    );
});

yup.addMethod(yup.string, "cnpj", function (message) {
  return yup
    .mixed()
    .test("cnpj", message || "CNPJ inválido", (value) => validateCNPJ(value));
});

exports.store = async function (data) {
  let schema = yup.object().shape({
    tradingName: yup.string().required(),
    ownerName: yup.string().required(),
    document: yup.string().cnpj(),
    coverageArea: yup.string().coverageArea(),
    address: yup.string().address(),
  });

  return await schema
    .validate(data)
    .then(function () {
      return { valid: true, message: "" };
    })
    .catch(function (err) {
      return { valid: false, message: err.message };
    });
};
