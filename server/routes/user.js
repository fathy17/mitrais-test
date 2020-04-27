const express = require("express");
const router = express.Router();
const User = require("../db/user");

function ValidateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}

function ValidatePhoneNumber(mobile) {
  if (/^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/.test(mobile)) {
    return true;
  }
  return false;
}

router.get("/:id", (req, res) => {
  if (!isNaN(req.params.id)) {
    User.getOne(req.params.id).then((user) => {
      if (user) {
        res.json(user);
      } else {
        resError(res, 404, "User Not Found");
      }
    });
  } else {
    resError(res, 500, "Invalid ID");
  }
});

router.post("/signup", (req, res) => {
  const user = {
    mobile: req.body.mobile,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    birth_date: req.body.birth_date,
    gender: req.body.gender,
    email: req.body.email,
  };

  if (
    ValidateEmail(req.body.email) &&
    ValidatePhoneNumber(req.body.mobile) &&
    req.body.first_name &&
    req.body.last_name
  ) {
    User.create(user)
      .then((id) => {
        res.json({
          id,
          message: "okeeee",
        });
      })
      .catch((err) => {
        if (err.constraint === "user_mobile_unique") {
          resError(res, 403, "Mobile phone number already exist");
        } else if (err.constraint === "user_email_unique") {
          resError(res, 403, "Email already exist");
        }
      });
  } else {
    if (!req.body.first_name) {
      resError(res, 400, "First name required");
    }
    if (!req.body.last_name) {
      resError(res, 400, "Last name required");
    }
    if (!req.body.email) {
      resError(res, 400, "Email required");
    }
    if (!req.body.mobile) {
      resError(res, 400, "Mobile Phone required");
    }
    if (!ValidateEmail(req.body.email)) {
      resError(res, 500, "invalid Email");
    }
    if (!ValidatePhoneNumber(req.body.mobile)) {
      resError(res, 500, "invalid phone number");
    }
  }
});

function resError(res, statusCode, message) {
  res.status(statusCode);
  res.json({ message });
}

module.exports = router;
