exports.getLogin = (req, res, next) => {
  const isLoggedIn = req.get("Cookie");
  console.log(req.session.isLoggedIn);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
  console.log(isLoggedIn);
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  res.redirect("/");
};
