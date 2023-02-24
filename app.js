const express = require("express")
const customers = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())




app.get("/login", cors(), (req, res) => {

})


app.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
        const check = await customers.findOne({ email: email })

        if (check) {
            res.json("Đã tồn tại")
        }
        else {
            res.json("Hợp lệ")
        }
    }
    catch (e) {
        res.json("Hợp lệ")
    }

})

app.post("/register", async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    
    const data = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
    }

    try {
        const check = await customers.findOne({ email: email })

        if (check) {
            res.json("Đã tồn tại")
        }
        else {
            res.json("Hợp lệ")
            await customers.insertMany([data])
        }
    }
    catch (e) {
        res.json("Hợp lệ")
    }

})

app.listen(8080, () => {
    console.log("port connected");
})