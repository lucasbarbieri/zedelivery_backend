const yup = require("yup");
const {
  validateCobertura,
  validateAddress
} = require("../../helpers/validators");

yup.addMethod(yup.string, "cobertura", function(message) {
  return yup
    .mixed()
    .test("cobertura", message || "Cobertura inválida", value =>
      validateCobertura(value)
    );
});

yup.addMethod(yup.string, "address", function(message) {
  return yup
    .mixed()
    .test("address", message || "Endereço inválido", value =>
      validateAddress(value)
    );
});

exports.store = async function(data) {
  let schema = yup.object().shape({
    tradingName: yup.string().required(),
    ownerName: yup.string().required(),
    documento: yup.string().required(),
    cobertura: yup.string().cobertura(),
    address: yup.string().address()
  });

  return await schema
    .validate(data)
    .then(function() {
      return { valid: true, message: "" };
    })
    .catch(function(err) {
      return { valid: false, message: err.message };
    });
};
