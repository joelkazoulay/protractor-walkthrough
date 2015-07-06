(function () {
   'use strict';

    var q = require('q');

    function BrowserBehaviour() {
        var browserBehaviour = {
            setup: setup
        };

        function setBrowserWindow () {
            return browser.driver.manage().window().maximize();
        }

        //HotTowel
        function getHT () {
            return browser.get('');
        }

        function setup () {
            return q.all([
                setBrowserWindow(),
                getHT()
            ]);
        }

        return browserBehaviour;
    }

    module.exports = new BrowserBehaviour();
});
