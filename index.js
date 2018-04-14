/*

custom-rpc/index.js

the only nodejs file in this project

written by superwhiskers, licensed under gnu agpl.
if you want a copy, go to http://www.gnu.org/licenses/

*/

// get some modules
const yaml = require("js-yaml"),
      rpc = require("discord-rich-presence"),
      fs = require("fs")

// config placeholder variable
var cfg

// read the config file
try {

    // parse and load the config file
    cfg = yaml.safeLoad(
        fs.readFileSync(
            "config.yaml",
            "utf8"
        )
    )

} catch (err) {

    // show the error
    console.log("[err]: error while loading config.yaml. check if it exists.")
    console.log("       if it does, then check the validity of the contents")
    console.log(`       error: ${ err }`)

    // then exit
    process.exit()

}

// now, if we successfully loaded it, then get the key from it
var client = rpc(cfg["key"])

// show the user that we have started
console.log("it should be working now ~~")

// and set an interval to update it
setInterval(() => {

    client.updatePresence(cfg["presence"])

}, 15e3)