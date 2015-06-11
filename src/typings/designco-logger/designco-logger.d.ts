declare module "designco-logger" {
	export = Logger;
}

interface Logger {
	info(message: string): void;
	warn(message: string): void;
	error(message: string): void;
	debug(message: string): void;
}