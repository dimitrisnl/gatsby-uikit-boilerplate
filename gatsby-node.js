const path = require('path');

exports.modifyWebpackConfig = ({ config, _stage }) => {
  return config.merge({
    resolve: {
      alias: {
        Blocks: path.resolve(config._config.context, 'src/components/Blocks'),
        Layout: path.resolve(config._config.context, 'src/components/Layout'),
      },
    },
  });
};
