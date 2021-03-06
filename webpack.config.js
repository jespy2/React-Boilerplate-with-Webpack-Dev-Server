const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  "mode": "development",
  "entry": "./src/index.js",
  "output": {
    "path": __dirname + '/dir',
    "filename": "bundle.js"
  },
  "devtool": "source-map",
  "module": {
    "rules": [
      {
        "enforce": "pre",
        "test": /\.js$/,
        "exclude": /node_modules/,
        "loader": "eslint-loader",
        "options": {
          "emitWarning": true,
          "failOnError": false,
          "failOnWarning": false
        }
      },
      {
        "test": /\.(js|jsx)$/,
        "use": {
          "loader": "babel-loader"
        }
      },
      {
        "test": /\.html$/,
        "use": [
          {
            "loader": "html-loader"
          }
        ]
      }
    ]
  },
  "plugins": [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
}