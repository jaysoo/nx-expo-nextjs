// @generated: @expo/next-adapter@4.0.4
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const { withExpo } = require('@expo/next-adapter');
const withNx = require('@nrwl/next/plugins/with-nx');

module.exports = withNx(withExpo({
  projectRoot: __dirname,
}));
