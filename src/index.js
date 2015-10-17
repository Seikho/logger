var chalk = require("chalk");
var events = require('events');
var emitter = new events.EventEmitter();
function info(message) {
    log("INFO", message, chalk.blue);
}
exports.info = info;
function warn(message) {
    log("WARN", message, chalk.yellow);
}
exports.warn = warn;
function error(message) {
    log("ERROR", message, chalk.red);
}
exports.error = error;
function debug(message) {
    log("DEBUG", message, chalk.gray);
}
exports.debug = debug;
function on(event, handler) {
    emitter.on(event.toLocaleLowerCase(), handler);
}
exports.on = on;
function log(prefix, message, colour) {
    var timestamp = new Date().toTimeString().slice(0, 8);
    emitter.emit(prefix.toLowerCase(), message);
    console.log("[%s] %s: %s", timestamp, colour(prefix), message);
}
