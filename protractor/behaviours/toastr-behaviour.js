(function() {
    'use strict';

    var q = require('q'),
        errorHandler = require('../handlers/error-handler.js'),
        toastrPage = require('./toastr-page.js');

    function ToastrHelper() {
        var toastrBehaviour = {
            toastr: {},
            gatherToastrValues: gatherToastrValues,
            gatherMultipleToastrValues: gatherMultipleToastrValues
        };

        function gatherMultipleToastrValues(toastrCount) {
            var toastrsDisplayed = [],
                toastrTitles = [],
                toastrMessages = [];

            _.forEach(toastrCount, function(index) {
                var isPresent = toastrPage.getToastrMessageByIndex(index),
                    title = toastrPage.getToastrMessageByIndex(index),
                    message = toastrPage.getToastrMessageByIndex(index);

                toastrsDisplayed.push(isPresent);
                toastrTitles.push(title);
                toastrMessages.push(message);
            });

            return q.all([toastrsDisplayed, toastrTitles, toastrMessages])
                .then(handleMultipleToastrValues());
        }

        function handleMultipleToastrValues(toastrValues) {
            console.log();
        }

        function gatherToastrValues() {
            return q.all([toastrPage.isToastrPresent(), toastrPage.getToastrTitle(), toastrPage.getToastrMessage()])
                .then(handleToastrValues, errorHandler);
        }

        function handleToastrValues(data) {
            toastrBehaviour.toastr = { isPresent: data[0], title: data[1], message: data[2] };

            return toastrPage.dismissToastr();
        }

        return toastrBehaviour;
    }

    module.exports = new ToastrHelper();
})();
