/// <reference path="../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../../node_modules/@types/angular-material/index.d.ts" />
/// <reference path="../../node_modules/flatpickr/dist/index.d.ts" />

var app = angular.module("myApp", ["ADM-dateTimePicker", "ngMaterial"]);

app.controller("DatePickersDemoCtrl", [
  () => {
    flatpickr("#flatpickrDateRange", { dateFormat: "d.m.Y", mode: "range" });
    flatpickr("#flatpickrDate", {
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "d.m.Y"
    });
  }
]);

app.config(($mdDateLocaleProvider: any) => {
  $mdDateLocaleProvider.firstDayOfWeek = 1;
});
