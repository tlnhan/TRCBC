const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/TRCBC")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log("failed");
    })


const newSchema = new mongoose.Schema({

    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const customers = mongoose.model("customers", newSchema)

module.exports = customers