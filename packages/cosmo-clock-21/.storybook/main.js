const path = require('path');

module.exports = {
    stories: ['../stories/**/*.stories.(ts|tsx)'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-docs'],
    webpackFinal: async (config) => {
        config.module.rules.push(
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, '../'),
            },
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: require.resolve('ts-loader'),
                        options: {
                            transpileOnly: true,
                        },
                    },
                    {
                        loader: require.resolve('react-docgen-typescript-loader'),
                    },
                ],
            });

        config.resolve.alias = {...config.resolve.alias, ...{ '@components': path.resolve(__dirname, "../src/ui") }}

        config.resolve.extensions.push('.ts', '.tsx');

        return config;
    },
};
