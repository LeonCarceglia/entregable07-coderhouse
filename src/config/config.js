import dotenv from "dotenv"

const environment = "DEVELOPMENT"

dotenv.config({
  path: environment === "PRODUCTION" ? "./.env.development" : "./.env.production" 
})

console.log("Environment: ", environment)
console.log("MongoDB URL: ", process.env.MONGO_URL)
console.log("Port: ", process.env.PORT)

export default {
  PORT: process.env.PORT || 8080,
  MONGODB_URL: process.env.MONGO_URL,
}