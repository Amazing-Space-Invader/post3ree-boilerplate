/**
 * Created by x22a on 25.02.16.
 */
require('babel-core/register');
require.extensions['.gif'] = function() {
    return;
};
require('babel-polyfill');
require('css-modules-require-hook/preset');
require('./server.js');