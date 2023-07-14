const path = require('path');

module.exports = {
  // ... other configuration options

  module: {
    rules: [
      // ... other rules

      // Rule to handle image files
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      }
    ]
  }
};
