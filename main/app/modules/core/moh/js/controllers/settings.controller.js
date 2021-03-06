(function(){
    'use strict'
    //controller functions definitions
    function MohSettingsController($scope, $log, $localStorage, MOH_ALLOCATION_BASE, MOH_CALCULATION_BASE, DataModel, mohService) {
        var vm = this;
        vm.saveSettings =  function() {
            vm.mohSettings.por_rate = mohService.roundToTwo(vm.mohSettings.por_rate);
            if(!$localStorage.moh) {
                vm.buttonText = "Saving...";
                if(!$localStorage.uuid || vm.mohSettings.allocation_base_id == undefined || vm.mohSettings.calculation_base_id == undefined) return;
                var moh = new DataModel.Moh();
                moh.project_uuid = $localStorage.uuid;
                moh.calculation_base_id = vm.mohSettings.calculation_base_id;
                moh.allocation_base_id = vm.mohSettings.allocation_base_id;
                moh.por_rate = vm.mohSettings.por_rate;
                moh.por_divider = mohService.getAllocationBase(vm.mohSettings.allocation_base_id).multiplexor;
                moh.$saveWithUuid(function(response){
                    $localStorage.moh = response.id;
                    vm.buttonText = "Update";
                    $scope.$emit('MOH_CALCULATION_CHANGE', response.calculation_base_id);
                },
                function(err){
                    vm.buttonText = "Save";
                    $log.debug(err);
                });
            } else {
                if(!$localStorage.uuid || vm.mohSettings.allocation_base_id == undefined) return;
                    vm.buttonText = "Updating...";
                    var moh = {};
                    moh.project_uuid = $localStorage.uuid;
                    moh.allocation_base_id = vm.mohSettings.allocation_base_id;
                    moh.calculation_base_id = vm.mohSettings.calculation_base_id;
                    moh.por_rate = vm.mohSettings.por_rate;
                    moh.por_divider = mohService.getAllocationBase(vm.mohSettings.allocation_base_id).multiplexor;
                    DataModel.Moh.updateWithUuid(moh).$promise
                        .then(function(response){
                            $scope.$emit('MOH_CALCULATION_CHANGE', response.calculation_base_id);
                        })
                        .catch(function(err){
                            $log.debug(err);
                        })
                        .finally(function(){
                            vm.buttonText = "Update";
                        });
                }
            }
                function init() {
                    vm.porMultiplexor = 1;
                    vm.mohSettings = {};
                    vm.uuid = $localStorage.uuid;
                    vm.buttonText = $localStorage.moh ? "Update" : "Save";
                    if(vm.uuid != undefined) {
                        DataModel.Moh.getWithUuid({ uuid: vm.uuid }, function(response){
                            vm.mohSettings.calculation_base_id = parseInt(response.calculation_base_id);
                            vm.mohSettings.allocation_base_id = parseInt(response.allocation_base_id);
                            vm.mohSettings.por_rate = mohService.roundToTwo(parseFloat(response.por_rate));
                            vm.porPlaceholder = mohService.getAllocationBase(vm.mohSettings.allocation_base_id).measures;
                            $scope.$emit('MOH_CALCULATION_CHANGE', vm.mohSettings.calculation_base_id);
                        });
                    }
                    vm.moh_allocation_base = MOH_ALLOCATION_BASE;
                    vm.moh_calculation_base = MOH_CALCULATION_BASE;
                };
                init();
            vm.changePlaceholder = function() {
                //show correct placeholder and set divider if allocation_base changes
                var allocationBaseSettings = mohService.getAllocationBase(vm.mohSettings.allocation_base_id);
                vm.porPlaceholder = allocationBaseSettings.measures;
                vm.porMultiplexor = allocationBaseSettings.multiplexor;
            }
    }
    //dependencies injection block
    MohSettingsController.$inject = ['$scope', '$log', '$localStorage', 'MOH_ALLOCATION_BASE', 'MOH_CALCULATION_BASE', 'DataModel', 'mohService'];
    //controller function linking
    angular.module('costAnswer.core.moh.controllers')
        .controller('MohSettingsController', MohSettingsController)
}());