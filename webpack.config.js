module.exports = (env, argv) => {
    var config = {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js'
        },
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
                                        "development": argv.mode === 'development'
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



