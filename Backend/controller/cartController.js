const Cart = require("../models/cart");
const Product = require("../models/Product");

// get /api/cart/
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


// post /api/cart/add
exports.addCart = async (req, res) => {
  try {
    const userId = req.user.id; 
    const { productId } = req.body;

    //Find the product details
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    //Check if the cart already exists
    let cart = await Cart.findOne({ userId });

    const productData = {
      productId: product._id,
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.image
    };

    if (!cart) {
      // Create new cart
      cart = new Cart({
        userId,
        items: [productData]
      });
    } else {
      // Add new item to existing cart
      cart.items.push(productData);
    }

    await cart.save();

    res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

// delete /api/cart/delete
exports.deleteCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    // Filter out the product by productId
    cart.items = cart.items.filter(item => item.productId.toString() !== productId);

    await cart.save();

    res.status(200).json({ message: "Product removed from cart", cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};