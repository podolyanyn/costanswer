(function(){
    'use strict';
    angular.module('costAnswer.core.process.components')
        .component('caProcessProductProcessNew', {
            restrict: 'E',
            templateUrl: 'app/modules/core/process/views/ca-process-product-process-new.html',
            controller: caProcessProductProcessNewController
        });
    function caProcessProductProcessNewController($log, DataModel, $scope, $stateParams) {
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
            vm.process = {};
            vm.buttonText = 'Save';
            vm.formDisabled = false;
        };
        vm.onSave = function() {
            vm.formDisabled = true;
            vm.buttonText = "Saving...";
            var process = new DataModel.Process();
            process.name = vm.process.name;
            process.product_id = $stateParams.id;
            if(vm.process.department !== undefined) process.department = vm.process.department;
            process.$save()
                .then(function(response){
                    $scope.$emit('PROCESS_CREATED', response);
                    vm.buttonText = "Update";
                })
                .finally(function(){
                    vm.formDisabled = false;
                });
        };
    }
    caProcessProductProcessNewController.$inject = ['$log', 'DataModel', '$scope', '$stateParams'];
}());