(function(){
    angular.module('costAnswer.core.standard.services',[]);
    angular.module('costAnswer.core.standard.services')
    .factory('standardService', ['$rootScope', '$localStorage', '$http', 'API_PREFIX', 'DataModel', function($rootScope, $localStorage, $http, API_PREFIX, DataModel){
        return {
            productsList: function(uuid) {
                var config = {
                    method: 'GET',
                    url: API_PREFIX + '/products/1/'+uuid
                }
                return $http(config);
            },
            productPropeties: function() {
                return [
                    {"id": 1, "name": "Product Settings", "sref": "property.settings", "iconClass": "ion-settings"},
                    {"id": 2, "name": "Inventory", "sref": "property.inventory", "iconClass": "ion-ios-box"},
                    {"id": 3, "name": "Production Plan", "sref": "property.pp", "iconClass": "ion-social-buffer"},
                    {"id": 4, "name": "Sales Plan", "sref": "property.sp", "iconClass": "ion-connection-bars"},
                    {"id": 5, "name": "WIP Beginning", "sref": "property.wb", "iconClass": "ion-ios-alarm-outline"},
                    {"id": 6, "name": "Direct Materials", "sref": "property.dm", "iconClass": "ion-paintbucket"},
                    {"id": 7, "name": "Direct Labor", "sref": "property.dl", "iconClass": "ion-ios-people"},
                    {"id": 8, "name": "Variable Overhead", "sref": "property.vo", "iconClass": "ion-ios-pie"},
                    {"id": 9, "name": "Machine Hours", "sref": "property.mh", "iconClass": "ion-ios-cog"},
                    {"id": 10, "name": "WIP Ending", "sref": "property.we", "iconClass": "ion-ios-alarm"},
                    {"id": 11, "name": "Mark Up", "sref": "property.mu", "iconClass": "ion-pricetags"},
                    {"id": 12, "name": "Report", "sref": "property.report", "iconClass": "ion-clipboard"}
                ]
            }
        }
    }]);
}());