import express from "express"
import session from "express-session"
import handlebars from "express-handlebars"
import mongoose from "mongoose"
import MongoStore from "connect-mongo"
import passport from "passport"
import initializePassport from "./config/passport.config.js"

import viewsRouter from "./routes/views.router.js"
import productsRouter from "./routes/products.router.js"
import cartsRouter from "./routes/carts.router.js"
import sessionsRouter from "./routes/session.router.js"

import __dirname from "./utils.js"
import config from "./config/config.js"

const app = express()
const connection = await mongoose.connect("mongodb+srv://leoncarceglia:coder@cluster0.ipkw6cl.mongodb.net/")

app.use(
    session({
      store: new MongoStore({
        mongoUrl:
          "mongodb+srv://leoncarceglia:coder@cluster0.ipkw6cl.mongodb.net/",
        ttl: 3600,
      }),
      secret: "CoderS3cretFelis",
      resave: false,
      saveUninitialized: false,
    })
)

app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + "/views")
app.set("view engine", "handlebars")

app.use(express.json())
app.use(express.static(__dirname + "/public"))

initializePassport()
app.use(passport.initialize())
app.use(passport.session())

app.use("/", viewsRouter)
app.use("/api/products", productsRouter)
app.use("/api/carts", cartsRouter)
app.use("/api/sessions", sessionsRouter)

const httpServer = app.listen(8000, () => {
    console.log("Server is listening on port " + 8000)
})