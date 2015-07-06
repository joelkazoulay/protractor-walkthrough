(function() {
    'use strict';

    function DashboardPage() {
        var dashboardPage = {
            getDateText: getDateText
        };

        var dateSet = element(by.css('ul.today-dates li.blightblue div.datas-text.pull-right span'));

        function getDateText() {
            return dateSet.getText();
        }

        return dashboardPage;
    }

    module.exports = new DashboardPage();
})();
