let express = require("express")
let app = express()

app.get("/",(req,res)=> {
    res.json({sucess: true})
})

app.get("/cor/:pessoa", (req, res)=> {
    let pessoa = req.params.pessoa

    if(pessoa == "carlos"){
        res.json({cor:"roxo", color:"purple"})
    }
})


module.exports = app