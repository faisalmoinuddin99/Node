const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const mimeTypes = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  png: "image/png",
  jpeg: "image/jpeg",
  jpg: "image/jpg",
};
