const User = require('../models/user');
const { body , validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');


const registerUser = async (req, res) => {
  try {
    // Input Validation
    await body('name', 'name is required').notEmpty().run(req);
    await body('email', 'A valid Email is required').isEmail().run(req);
    await body('password', 'Password must be at least 8 characters').isLength({ min: 8 }).run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    // Check if user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = new User({
      name: name,
      email: email,
      password: password,
    });

    // Save user to the database
    await newUser.save();

    // Generate JWT Token
    const token = jwt.sign(
      { id: newUser._id },                // Payload (user ID)
      process.env.JWT_SECRET,             // Secret key (must be in .env)
      { expiresIn: '1h' }                 // Token expiration time
    );

    res.status(201).json({ message: 'User registered successfully', 
        token: token,
        user: {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
        },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


// Login Controller
const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;


    if(!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email/. Try again' });
    }

   
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password. Try again.' });
    }
  

    // Generate JWT Token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Return success response
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


module.exports = {
  registerUser: registerUser,
  loginUser: loginUser,
};
