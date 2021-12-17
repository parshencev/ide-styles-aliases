#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var app_root_path_1 = require("app-root-path");
var commander_1 = require("commander");
var package_json_1 = require("../package.json");
var path_1 = require("path");
var options = new commander_1.Command()
    .version(package_json_1.version)
    .description(package_json_1.description)
    .option('-w, --watch', 'Watch to tsconfig.json with extends and project files and add symbolic links automatically', false)
    .option('-t, --tsconfig <tsConfigPath>', 'Path to tsconfig.json', './tsconfig.json')
    .option('-s, --src <srcPath>', 'Path to code source. Ignore ./node_modules', './')
    .parse(process.argv)
    .opts();
console.log(app_root_path_1.path);
console.log(path_1["default"].resolve(app_root_path_1.path, options.src));
console.log(path_1["default"].resolve(app_root_path_1.path, options.tsconfig));
