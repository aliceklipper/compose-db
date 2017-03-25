# simplest

 >  My webpack 2 template for static websites.

TODO:

 *  [ ] Check this list for completed tasks.
 *  [ ] Write `start` script with `NODE_ENV` support.
     >  _What?_
 *  [ ] Write post-install script.
 *  [ ] Open browser in `development`.
 *  [ ] Add Redux support.
 *  [ ] Add `test` environment support.
 *  [ ] Add `__PROD__` and `__TEST__` global variables.
 *  [ ] Add `__ENV__` global variable.
 *  [ ] Add support for auto deploy to Git
        in `production` environment.
 *  [ ] Add testing support.
     *  [ ] Choose right testing framework.
     *  [ ] **How to test React components?**
 *  [ ] Test `async`/`await` support:
     *  [ ] In Babel.
 *  [ ] Write EditorConfig.
 *  [ ] Finish `start` script with `0` code on `Ctrl+C`.
     *  [ ] Check if `concurrently` passes `Ctrl+C`
            to subsequent tasks.
     *  [ ] If passes, end webpack and WDS correctly.
 *  [ ] Add names to concurrently tasks.
 *  [ ] Add linters:
     *  [ ] TS.
     *  [ ] LESS.
     *  [ ] Pug?
     *  [ ] JSON?
 *  [ ] Add `imagemin` support.
 *  [ ] Add `@font-face` generator.
 *  [ ] Add font subsetting support.
 *  [ ] Fix source maps.
 *  [ ] Configure debugging in IDEA.
     *  [ ] Configure profiling in IDEA?
 *  [ ] Check `await-loader` compat w/ webpack 2.
     *  [ ] Fix plugin if incompatible.
 *  [ ] Fix issue with HUSL colors in LESS.
 *  [ ] Configure typings for dependencies.
 *  [ ] Get rid of extra config files:
     *  [ ] `.babelrc`.
     *  [ ] `postcss.config.js`.
     *  [ ] `tsconfig.json`.
 *  [ ] Licensing:
     *  [ ] Check dependencies licenses.
     *  [ ] Choose right license.
 *  [ ] Write font subset analyzer script:
     *  [ ] Server:
         *  `/put`:
             *  `project : string`.
             *  `stack : string`.
             *  `weight : number = 400`.
             *  `style : string = 'normal'`.
             *  `variant : string = 'normal'`.
             *  `stretch : string = 'normal'`.
             *  `symbols : string`.
             *  Returns `void`.
         *  `/get`:
             *  `project : string`.
             *  Returns array of:
                 *  `stack : string`.
                 *  `weight : number`.
                 *  `style : string`.
                 *  `varianr : string`.
                 *  `stretch : string`.
                 *  `symbols : string`.
     *  [ ] Client:
         *  [ ] Describe client API.
