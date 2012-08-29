c2capp
======

This app aims at easily adding outings to http://www.camptocamp.org from your smartphone.

building css file
=================
 * you need sass http://sass-lang.com/
 * run scripts/build-css.sh is used to build css file
 * built file is included in sources anyway

running locally
===============
 * you need nodejs installed http://nodejs.org/
 * run node scripts/web-server.js
 * browse to http://localhost:9000/index.html
 * use ripple to emulate phonegap features if needed http://ripple.tinyhippos.com/ http://emulate.phonegap.com/

running tests
=============
 * unit tests
   * run scripts/test-server.sh
   * browse to http://localhost:9876 and select strict mode
   * run scripts/test.sh
 * e2e tests
   * run node scripts/web-server.js
   * browse to http://localhost:9000/test/e2e/runner.html

tools and libraries
===================
 * phonegap & phonegap build http://phonegap.com/ https://build.phonegap.com/
 * angularjs http://angularjs.org/
 * zepto.js http://zeptojs.com/
 * sass http://sass-lang.com/

todo
======
 * i18n
 * test canvas
 * test GPS
 * splash screen / icons
 * ldpi / mdpi etc
 * exif thumbnail
 * analytics?
 * oauth??
 * travis-ci ?
 * normalize.css
