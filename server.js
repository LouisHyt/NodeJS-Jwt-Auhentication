import express from "express"
import 'dotenv/config'

const { PORT } = process.env;
const app = express()

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));


app.get("/", (req, res) => {
    res.render("index.ejs", {
        text: "Salut data"
    })
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})