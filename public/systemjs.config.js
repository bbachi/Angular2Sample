/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': '/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/router/upgrade': 'npm:@angular/router/bundles/router-upgrade.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',
      'angular2-google-maps': 'npm:angular2-google-maps',
      'ng2-file-upload' : 'npm:ng2-file-upload',
      'ngx-bootstrap' : 'npm:ngx-bootstrap',
      'momemt': 'npm:momemt',
      'web-animations-js':'npm:web-animations-js',
      'ngx-facebook':'npm:ngx-facebook',

      // other libraries
      'rxjs': 'npm:rxjs',
      'mydatepicker': 'npm:mydatepicker/bundles/mydatepicker.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-google-maps/core': {    
        "defaultExtension": "js",
        "main": "index.js"
      },
      /** Configuration for ng2-file-upload */
      'ng2-file-upload' : { 
        main: './ng2-file-upload.js',
        defaultExtension: 'js'
      },
      'web-animations-js':{
        main: 'web-animations-min.js',
        defaultExtension: 'js'
      },
      /** Configuration for ng2-file-upload */
       /** Configuration for ng2-file-upload */
      'ngx-bootstrap': { 
        format:'cjs',
        main: 'bundles/ngx-bootstrap.umd.js',
        defaultExtension: 'js'
      },
      'momemt':{
        main: 'momemt.js',
        defaultExtension: 'js'
      },
      'ngx-facebook': {    
        "defaultExtension": "js",
        "main": "dist/umd/index.js"
      }
      /** Configuration for ng2-file-upload */
    }
  });
})(this);