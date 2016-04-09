module.exports = {
    entry: [
        "./source/quickstyle.js"
    ],
    output: {
        path: __dirname + "/dist/",
        publicPath: "/dist/",
        filename: "quickstyle.min.js"
    }
};
