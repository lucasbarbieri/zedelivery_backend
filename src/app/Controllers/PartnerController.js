const Model = require("../Models/Partners");
const Validators = require("../ControllersValidators/PartnerValidator");

exports.get = function (req, res, next) {
  let filters = {};

  if (req.query && req.query.lat && req.query.lng) {
    const lat = parseFloat(req.query.lat);
    const lng = parseFloat(req.query.lng);

    filters = {
      address: {
        $near: {
          $maxDistance: 5000,
          $minDistance: 100,
          $geometry: {
            type: "Point",
            coordinates: [lng, lat],
          },
        },
      },
    };
  }

  Model.find(filters, function (err, data) {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json(data);
  });
};

exports.getById = function (req, res, next) {
  Model.findById(req.params.id, function (err, data) {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json(data);
  });
};

exports.store = async function (req, res, next) {
  let postData = ({
    tradingName,
    ownerName,
    document,
    coverageArea,
    address,
  } = req.body);
  postData.document = postData.document.replace(/[^A-Z0-9]+/gi, "");
  const validator = await Validators.store(postData);

  if (!validator.valid) {
    console.log(validator.message);
    return res.status(422).json({ error: validator.message });
  }

  Model.create(postData, function (err, data) {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(201).json(data);
  });
};
