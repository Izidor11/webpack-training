module.exports = (env, argv) => {
    function isDevelopment() {
        return argv.mode === 'development';
    }
    var config = {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js'
        },
        devtool: isDevelopment() ? 'eval-cheap-module-source-map' : 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                [
                                    '@babel/preset-react',
                                    {
                                        "pragmaFrag": "React.Fragment",
                                        "pragma": "React.createElement",
                                        "development": isDevelopment()
                                    }
                                ]
                            ]
                        }
                    }
                }
            ]
        }
    }
    return config;
}



