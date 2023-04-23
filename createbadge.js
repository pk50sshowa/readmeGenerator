module.exports = function (license) {

    if (license !== "None") {
        return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`;
    }
    return "";
}