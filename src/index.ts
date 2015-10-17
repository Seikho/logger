import chalk = require("chalk");
import events = require('events');

var emitter = new events.EventEmitter();

export function info(message) {
    log("INFO", message, chalk.blue);
}

export function warn(message) {
    log("WARN", message, chalk.yellow);
}

export function error(message) {
    log("ERROR", message, chalk.red);
}

export function debug(message) {
    log("DEBUG", message, chalk.gray);
}

export function on(event: string, handler: Function) {
    emitter.on(event, handler);
}

function log(prefix: string, message: string, colour: Chalk.ChalkChain) {
    var timestamp = new Date().toTimeString().slice(0,8);
    emitter.emit(prefix.toLowerCase(), message);
    console.log("[%s] %s: %s", timestamp, colour(prefix), message);
}
