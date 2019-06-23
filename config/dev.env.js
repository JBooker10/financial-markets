"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  IEX_API: '"https://sandbox.iexapis.com/"',
  IEX_SECRET: '"Tpk_73b4feeccc8e4c6c8de07477a47181a6"'
});
