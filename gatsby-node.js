const path = require('path');

exports.modifyWebpackConfig = ({ config, _stage }) => {
  return config.merge({
    resolve: {
      alias: {
        Bits: path.resolve(config._config.context, 'src/components/Bits'),
        Blocks: path.resolve(config._config.context, 'src/components/Blocks'),
      },
    },
  });
};
