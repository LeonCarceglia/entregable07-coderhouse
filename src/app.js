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
const connection = await mongoose.connect(config.MONGODB_URL)

app.use(
    session({
      store: new MongoStore({
        mongoUrl:
          config.MONGODB_URL,
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

const httpServer = app.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}!`)
})