(function() {
    'use strict';

    function ToastrPage() {
        var toastrContainer = element(by.css('#toast-container')),
            toastrTitle = toastrContainer.element(by.css('.toast-title')),
            toastrMessage = toastrContainer.element(by.css('.toast-message')),

            multipleToastrContainers = element(by.css('#toast-container'));

            var toastrPage =  {
                isToastrPresent: isToastrPresent,
                getToastrTitle: getToastrTitle,
                getToastrMessage: getToastrMessage,
                isToastrPresentbyIndex: isToastrPresentbyIndex,
                getToastrTitleByIndex: getToastrTitleByIndex,
                getToastrMessageByIndex: getToastrMessageByIndex,
                dismissToastr: dismissToastr
            };

        function isToastrPresent() {
            return toastrContainer.isDisplayed();
        }

        function getToastrTitle() {
            return toastrTitle.getText();
        }

        function getToastrMessage() {
            return toastrMessage.getText();
        }

        function isToastrPresentbyIndex(index) {
            return multipleToastrContainers.get(index).isDisplayed();
        }

        function getToastrTitleByIndex(index) {
            return multipleToastrContainers.get(index).element(by.css('.toast-title')).getText();
        }

        function getToastrMessageByIndex(index) {
            return multipleToastrContainers.get(index).element(by.css('.toast-message')).getText();
        }

        function dismissToastr() {
            return toastrContainer.click();
        }

        return toastrPage;
    }

    module.exports = new ToastrPage();
})();
