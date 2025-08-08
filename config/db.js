const { default: mongoose } = require("mongoose");


const db = async () => {
    try {
        await mongoose.connect('mongodb+srv://soaibshaikh10:12345@cluster0.88r43oc.mongodb.net/Book');
        console.log('Connected to the database successfully');
    } catch (error) {
        console.log('Error connecting to the database:', error);
        
    }
}

module.exports = db;