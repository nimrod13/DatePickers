"use strict";
var app = angular.module("myApp", ["ADM-dateTimePicker", "ngMaterial"]);
app.controller("DatePickersDemoCtrl", [
    function () {
        flatpickr("#flatpickrDateRange", { dateFormat: "d.m.Y", mode: "range" });
        flatpickr("#flatpickrDate", {
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "d.m.Y"
        });
    }
]);
app.config(function ($mdDateLocaleProvider) {
    $mdDateLocaleProvider.firstDayOfWeek = 1;
});
