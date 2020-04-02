const Model = require("../Models/Partners");
const Validators = require("../ControllersValidators/PartnerValidator");

exports.get = function(req, res, next) {
  let filters = {};

  if (req.query && req.query.lat && req.query.lng) {
    const lat = parseFloat(req.query.lat);
    const lng = parseFloat(req.query.lng);

    Model.find({
      location: {
        $near: {
          $maxDistance: 1000,
          $geometry: {
            type: "Point",
            coordinates: [lng, lat]
          }
        }
      }
    }).find((error, results) => {
      if (error) console.log(error);
      return res.status(200).json(results);
    });
    return;

    // filters = {
    //   location: {
    //     $near: {
    //       $maxDistance: 1000,
    //       $geometry: {
    //         type: "Point",
    //         coordinates: [lng, lat]
    //       }
    //     }
    //   }
    // };
  }

  Model.find(filters, function(err, data) {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    return res.status(200).json(data);
  });
};

exports.getById = function(req, res, next) {
  Model.findById(req.params.id, function(err, data) {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    return res.status(200).json(data);
  });
};

exports.store = async function(req, res, next) {
  const { tradingName, ownerName, documento, cobertura, address } = req.body;
  const validator = await Validators.store(req.body);

  if (!validator.valid) {
    return res.status(422).send(validator.message);
  }

  Model.create(
    { tradingName, ownerName, documento, cobertura, address },
    function(err, data) {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      return res.status(200).json(data);
    }
  );
};
