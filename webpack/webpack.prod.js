const DotEnv = require('dotenv-webpack');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new DotEnv({
            path: './.env.prod',
            systemvars: true,
        })
    ],
}