/* Import builtin modules */
const { join } = require('path');

/* Import webpack */
const webpack = require('webpack');

/* Import webpack plugins */
const HtmlWebpackPlugin           = require('html-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

/* Import other plugins */
const husl = require('less-husl');

/* Define shortcuts for some webpack plugins */
//noinspection JSUnresolvedVariable
const DefinePlugin       = webpack.DefinePlugin;
//noinspection JSUnresolvedVariable
const UglifyJsPlugin     = webpack.optimize.UglifyJsPlugin;
//noinspection JSUnresolvedVariable
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

// TODO: Set up optimization plugins.

const dev = () => !process.env.NODE_ENV || !process.env.NODE_ENV.startsWith('prod');

/*
 * Config options
 */

/* Target configuration */
const target = () => 'web';

/* Context configuration */
const context = () => process.cwd();

/* Entry point configuration */
const entry = () => [
    './src/index.tsx',
].filter(_ => _);

/* Output configuration */
const output = () => ({
    chunkFilename : '[id].index.js',
    filename      : 'index.js',
    path          : join(process.cwd(), 'build'),
    pathinfo      : dev(),
    publicPath    : '/',
});

/* Source maps configuration */
const devtool = () => dev() ? 'inline-source-map' : undefined;

/* Development server configuration */
const devServer = () => dev() ? {
        compress           : !dev(),
        host               : '127.0.0.1',
        port               : process.env.PORT || 1337,
        // https              : true, // TODO: Configure `https` right way.
        contentBase        : join(process.cwd(), 'build'), // TODO: Configure `contentBase` right way.
        historyApiFallback : true,
        // lazy               : true,
        // filename           : 'index.js',
        publicPath         : '/',
        // watchContentBase : true,
        quiet              : true,
        staticOptions      : {}, // TODO: Configure `staticOptions` right way.
    } : undefined;

/* Watch configuration */
const watch = () => dev();

/* Node configuration */
const node = () => {};

/* Performance configuration */
const performance = () => ({
    hints             : dev() ? 'warning' : 'error',
    maxEntrypointSize : dev() ? 3000000 : 300000,
    maxAssetSize      : dev() ? 5000000 : 700000,
});

/* Stats configuration */
const stats = () => ({});

/* Externals configuration */
const externals = () => ({
    'react'     : 'React',
    'react-dom' : 'ReactDOM',
});

/* Resolving configurations */
const resolve = () => ({
    extensions : [
        '',
        '.tsx',
        '.ts',
        '.js',
        '.json',
    ].filter(_ => _),
    alias      : {},
    plugins    : [
        DirectoryNamedWebpackPlugin({
            honorIndex   : false,
            honorPackage : [
                'browser',
                'main',
            ].filter(_ => _),
        }),
    ].filter(_ => _),
});

/*
 * Plugins
 */

const envPlugin    = () => new DefinePlugin({ __DEV__ : JSON.stringify(dev()) });
const uglifyPlugin = () => dev() ? null : new UglifyJsPlugin();
const htmlPlugin   = () => dev() ? new HtmlWebpackPlugin({
        inject     : false,
        template   : '!pug-loader!./page.pug',
        title      : 'simplest',
        appMountId : 'mount',
        window     : {
            route             : '/',
        },
    }) : new HtmlWebpackPlugin({
        inject     : false,
        template   : '!pug-loader!./page.pug',
        title      : 'simplest',
        appMountId : 'mount',
        window     : {
            route : '/',
        },
    });

/*
 * Rules
 */

const tsRule = () => ({
    test    : /\.tsx?$/,
    exclude : /node_modules/,
    use     : [
        // {
        //     loader  : 'babel-loader',
        //     options : {
        //         presets : [
        //             'latest',
        //         ].filter(_ => _),
        //         // plugins : [
        //         //     'transform-runtime',
        //         // ].filter(_ => _),
        //     },
        // },
        {
            loader  : 'ts-loader', // TODO: Configure typings.
            options : { // TODO: Configure TypeScript options in webpack config.
                silent          : true,
                compilerOptions : {
                    module            : 'commonjs',
                    target            : 'es6',
                    noImplicitAny     : true,
                    noImplicitReturns : true,
                    removeComments    : !dev(),
                    inlineSourceMap   : dev(),
                    sourceMap         : false,
                    jsx               : 'react',
                },
            },
        },
    ].filter(_ => _),
});

const lessRule = () => ({
    test    : /\.less$/,
    exclude : /node_modules/,
    use     : [
        {
            loader : 'style-loader/useable',
        },
        {
            loader : 'css-loader',
        },
        // { // TODO: Configure PostCSS and autoprefixer.
        //     loader : 'postcss-loader', // TODO: Configure PostCSS options in webpack config.
        // },
        {
            loader  : 'less-loader', // TODO: Configure LESS options in webpack config.
            options : {
                noIeCompat  : true,
                lessPlugins : [ // TODO: Configure LESS plugins.
                    husl,
                ].filter(_ => _),
            },
        },
    ].filter(_ => _),
});

const pugRule = () => ({
    test    : /\.pug$/,
    exclude : /node_modules/,
    use     : [
        {
            loader : 'pug-loader',
        },
    ].filter(_ => _),
});

const jsonRule = () => ({
    test    : /\.json$/,
    exclude : /node_modules/,
    use     : [
        {
            loader : 'json-loader',
        },
    ].filter(_ => _),
});

const fileRule = () => ({
    test    : /\.(png|jpe?g|gif|svg|ttf|woff|woff2|eot)$/,
    exclude : /node_modules/,
    use     : [
        {
            loader : 'file-loader',
        },
    ].filter(_ => _),
});

/*
 * Generate and export config
 */

module.exports = [
    {
        target      : target(),
        context     : context(),
        entry       : entry(),
        output      : output(),
        devtool     : devtool(),
        devServer   : devServer(),
        watch       : watch(),
        node        : node(),
        performance : performance(),
        stats       : stats(),
        externals   : externals(),
        resolve     : resolve(),
        plugins     : [
            envPlugin(),
            uglifyPlugin(),
            htmlPlugin(),
        ].filter(_ => _),
        module      : {
            rules : [
                tsRule(),
                lessRule(),
                pugRule(),
                jsonRule(),
                fileRule(),
            ].filter(_ => _),
        },
    },
].filter(_ => _);
