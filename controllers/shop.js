const Product = require("../models/product");
const mongoose = require("mongoose"); // Required for ObjectId

// Get all products
exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      console.log(products);
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "All Products",
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// Get a single product by ID
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;

  // Validate the product ID to avoid casting errors
  if (!mongoose.Types.ObjectId.isValid(prodId)) {
    return res.status(400).send("Invalid product ID");
  }

  Product.findById(prodId)
    .then((product) => {
      if (!product) {
        return res.status(404).send("Product not found");
      }
      res.render("shop/product-detail", {
        product: product,
        pageTitle: product.title,
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

// Get index page with all products
exports.getIndex = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// Get cart items
exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then((products) => {
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: products,
      });
    })
    .catch((err) => console.log(err));
};

// Add product to cart
exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;

  // Validate the product ID before querying
  if (!mongoose.Types.ObjectId.isValid(prodId)) {
    return res.status(400).send("Invalid product ID");
  }

  Product.findById(prodId)
    .then((product) => {
      if (!product) {
        return res.status(404).send("Product not found");
      }
      return req.user.addToCart(product);
    })
    .then((result) => {
      console.log(result);
      res.redirect("/cart");
    })
    .catch((err) => console.log(err));
};

// Delete product from cart
exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;

  // Validate the product ID
  if (!mongoose.Types.ObjectId.isValid(prodId)) {
    return res.status(400).send("Invalid product ID");
  }

  req.user
    .deleteItemFromCart(prodId)
    .then((result) => {
      res.redirect("/cart");
    })
    .catch((err) => console.log(err));
};

// Place an order
exports.postOrder = (req, res, next) => {
  req.user
    .addOrder()
    .then((result) => {
      res.redirect("/orders");
    })
    .catch((err) => console.log(err));
};

// Get orders
exports.getOrders = (req, res, next) => {
  req.user
    .getOrders()
    .then((orders) => {
      res.render("shop/orders", {
        path: "/orders",
        pageTitle: "Your Orders",
        orders: orders,
      });
    })
    .catch((err) => console.log(err));
};
