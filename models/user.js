const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },

    
}, {timestamps: true})

userSchema.pre('save',  async function(next){
    if (!this.isModified('password'))  return next();

    try{
        const salt = await bcrypt.genSalt(10); 
        this.password = await bcrypt.hash(this.password, salt);
       return next();
    } catch(error){
       return next(error);
    }
});

userSchema.methods.comparePassword = async function (candidatePassword){
  const passwordMatch = await bcrypt.compare(candidatePassword, this.password);
  return passwordMatch;
 
};

const User = mongoose.model('User', userSchema);
module.exports = User;