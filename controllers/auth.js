const User = require("../models/user"); // Ensure the correct path to your User model

// GET Login
exports.getLogin = (req, res, next) => {
  const isLoggedIn = req.session.isLoggedIn; // Correctly fetch session info
  console.log(req.session.isLoggedIn); // Log the session state

  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: isLoggedIn || false, // Pass session status to the template
  });
  console.log(isLoggedIn);
};

// POST Login
exports.postLogin = (req, res, next) => {
  User.findById("66ec5f1262daf7eeff91e6f8")
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      return req.session.save((err) => {
        // Ensure session is saved before redirect
        if (err) {
          console.error(err);
        }
        res.redirect("/");
      });
    })
    .catch((err) => console.error(err));
};

// POST Logout
exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    // Pass a callback function with error handling
    if (err) {
      console.error(err); // Correct error logging
    }
    res.redirect("/"); // Redirect after session destruction
  });
};
