"use strict";

// The following implementation comes from
// https://github.com/justinwoo/npm-psc-package-bin-simple/blob/4d4efa6a4e2008c8a0a71f0b189c14c31b88e47b/install.js

const request = require("request");
const tar = require("tar");
const version = "0.5.2";
const platform = { win32: "Windows", darwin: "macOS" }[process.platform] || "Linux";
const url = `https://github.com/coot/zephyr/releases/download/v${version}/${platform}.tar.gz`

request.get(url).pipe(tar.x({"C": './..'}));
