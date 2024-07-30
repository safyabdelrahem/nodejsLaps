const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 8,  
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(email) {
                return /^[a-zA-Z]{5,12}@(gmail|outlook)\.com$/.test(email);
            },
            message: props => `${props.value} is not a valid email`
        }
    },

    password: {
        type: String,
        required: true,
    },

    firstName: {
        type: String,
        required: true,
        minLength: 3,  
        maxLength: 15
    },
    role:{
        type:String,
        default:'User',
        enum:["User","Admon"]

    },

    lastName: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 15
    },
    dob: {
        type: Date,
        required: false
    },


},{timestamps:true})

userSchema.pre('save', async function (next) {
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword
    next();
})
const usersModel = mongoose.model('User', userSchema);
module.exports = usersModel;