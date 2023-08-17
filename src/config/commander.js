import { Command } from "commander"

const program = new Command()

program
.option("-d, --debug", "output extra debugging", false)
.option("-port <port>", "specify port", 8080)
.option("--mode <mode>", "specify mode", "development")

program.parse()
