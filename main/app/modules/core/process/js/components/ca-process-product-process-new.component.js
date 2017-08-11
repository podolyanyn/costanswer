(function(){
    'use strict';
    angular.module('costAnswer.core.process.components')
        .component('caProcessProductProcessNew', {
            restrict: 'E',
            templateUrl: 'app/modules/core/process/views/ca-process-product-process-new.html',
            controller: caProcessProductProcessNewController
        });
    function caProcessProductProcessNewController($log) {
        var vm = this;
        vm.$onInit = function() {
            vm.settings = [
                {
                  fieldGroup: [
                      {
                          key: 'name',
                          type: 'input',
                          ngModelElAttrs: {
                              class: 'form-control costanswer'
                          },
                          templateOptions: {
                              type: 'text',
                              label: 'Name',
                              placeholder: 'Name',
                              required: true,
                              errorText: 'Please, fill in process name'
                          }
                      },
                      {
                          key: 'department',
                          type: 'input',
                          ngModelElAttrs: {
                              class: 'form-control costanswer'
                          },
                          templateOptions: {
                              type: 'text',
                              label: 'Department',
                              placeholder: 'unit',
                              required: false
                          }
                      }
                  ]
                }
            ];
            vm.formOptions = {};
        };
        vm.onSave = function() {
           console.log('form submitted:', vm.process, vm);
        };
        vm.process = {};
        vm.buttonText = 'Save';
        vm.formDisabled = false;
    }
    caProcessProductProcessNewController.$inject = ['$log'];
}());