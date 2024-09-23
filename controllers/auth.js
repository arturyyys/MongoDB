exports.getLogin = (req, res, next) => {
  const isLoggedIn = req.get("Cookie");
  console.log(req.session);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: isLoggedIn,
  });
  console.log(isLoggedIn);
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  res.redirect("/");
};
