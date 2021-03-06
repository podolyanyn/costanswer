(function(){
    angular.module('costAnswer.core.services', [
        'costAnswer.core.moh.services',
        'costAnswer.core.standard.services'
        ]);
    angular.module('costAnswer.core.services')
    .factory('DataModel', ['$resource', 'API_PREFIX', function($resource, API_PREFIX){
        return {
            Project: $resource(API_PREFIX+'/projects/:id', { id: '@_id' }, {
                update: { method: 'PUT' },
                uuid: {
                    method: 'GET',
                    params: { uuid: '@uuid' },
                    url: API_PREFIX+'/projects/uuid/:uuid'
                },
                setName: { 
                    method: 'PUT',
                    params: { uuid: '@uuid' },
                    url: API_PREFIX+'/projects/name/:uuid'
                },
                saveAs: { 
                    method: 'POST',
                    params: { uuid: '@uuid' },
                    url: API_PREFIX+'/projects/clone/:uuid'
                },
                delete: {
                    method: 'DELETE',
                    params: { uuid: '@uuid' },
                    url: API_PREFIX+'/projects/:uuid'
                }
            }),
            Moh: $resource(API_PREFIX+'/moh/:id', { id: '@_id' }, {
                update: { method: 'PUT' },
                saveWithUuid: {
                    method: 'POST',
                    url: API_PREFIX+'/moh/uuid'
                },
                updateWithUuid: {
                    method: 'PUT',
                    url: API_PREFIX+'/moh/uuid'
                },
                getWithUuid: {
                    method: 'GET',
                    params: { uuid: '@uuid' },
                    url: API_PREFIX+'/moh/uuid/:uuid'
                },
                addMohComponent: {
                    method: 'POST',
                    params: { moh_id: '@moh_id', component: '@component' },
                    url: API_PREFIX+'/moh/:moh_id/:component'
                },
                updateMohComponent: {
                    method: 'PUT',
                    params: { id: '@id', component: '@component' },
                    url: API_PREFIX+'/:component/:id/'
                },
                deleteMohComponent: {
                    method: 'DELETE',
                    params: { id: '@id', component: '@component' },
                    url: API_PREFIX+'/:component/:id/'
                },
                addComponentParam: {
                    method: 'POST',
                    params: { component: '@component', component_id: '@component_id'},
                    url: API_PREFIX+'/:component/:component_id/params'
                },
                updateComponentParam: {
                    method: 'PUT',
                    params: { component: '@component', id: '@id'},
                    url: API_PREFIX+'/:component/:id/params'
                },
                getMohComponent: {
                    method: 'GET',
                    params: { id: '@id', component: '@component' },
                    url: API_PREFIX+'/:component/:id'
                },
                getMohComponents: {
                    method: 'GET',
                    params: { moh_id: '@moh_id', component: '@component' },
                    isArray: true,
                    url: API_PREFIX+'/moh/:moh_id/:component'
                }
            }),
            Product: $resource(API_PREFIX+'/products/:id', { id: '@_id' }, {
                update: { method: 'PUT' },
                saveWithUuid: {
                    method: 'POST',
                    url: API_PREFIX+'/products/uuid'
                },
                getInventory: {
                    method: 'GET',
                    isArray: true,
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/inventory'
                },
                saveInventory: {
                    method: 'POST',
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/inventory'
                },
                updateInventory: {
                    method: 'PUT',
                    params: { id: '@id' },
                    url: API_PREFIX+'/inventory/:id'
                },
                getWip: {
                    method: 'GET',
                    isArray: true,
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/wip'
                },
                saveWip: {
                    method: 'POST',
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/wip'
                },
                updateWip: {
                    method: 'PUT',
                    params: { id: '@id' },
                    url: API_PREFIX+'/wip/:id'
                },
                getMachineHours: {
                    method: 'GET',
                    isArray: true,
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/machinehours'
                },
                saveMachineHours: {
                    method: 'POST',
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/machinehours'
                },
                updateMachineHours: {
                    method: 'PUT',
                    params: { id: '@id' },
                    url: API_PREFIX+'/machinehours/:id'
                },
                getProductionPlan: {
                    method: 'GET',
                    isArray: true,
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/productionplan'
                },
                saveProductionPlan: {
                    method: 'POST',
                    isArray: true,
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/productionplan'
                },
                getSalesPlan: {
                    method: 'GET',
                    isArray: true,
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/salesplan'
                },
                saveSalesPlan: {
                    method: 'POST',
                    isArray: true,
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/salesplan'
                },
                getWipEnding: {
                    method: 'GET',
                    isArray: true,
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/wipending'
                },
                saveWipEnding: {
                    method: 'POST',
                    isArray: true,
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/wipending'
                },
                saveDirectMaterial: {
                    method: 'POST',
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/directmaterial'
                },
                getDirectMaterial: {
                    method: 'GET',
                    isArray: true,
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/directmaterial'
                },
                updateDirectMaterial: {
                    method: 'PUT',
                    params: { id: '@id' },
                    url: API_PREFIX+'/directmaterial/:id'
                },
                deleteDirectMaterial: {
                    method: 'DELETE',
                    params: { id: '@id' },
                    url: API_PREFIX+'/directmaterial/:id'
                },
                saveDirectLabor: {
                    method: 'POST',
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/directlabor'
                },
                getDirectLabor: {
                    method: 'GET',
                    isArray: true,
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/directlabor'
                },
                deleteDirectLabor: {
                    method: 'DELETE',
                    params: { id: '@id' },
                    url: API_PREFIX+'/directlabor/:id'
                },
                updateDirectLabor: {
                    method: 'PUT',
                    params: { id: '@id' },
                    url: API_PREFIX+'/directlabor/:id'
                },
                saveVariableOverhead: {
                    method: 'POST',
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/variableoverhead'
                },
                getVariableOverhead: {
                    method: 'GET',
                    isArray: true,
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/variableoverhead'
                },
                deleteVariableOverhead: {
                    method: 'DELETE',
                    params: { id: '@id' },
                    url: API_PREFIX+'/variableoverhead/:id'
                },
                updateVariableOverhead: {
                    method: 'PUT',
                    params: { id: '@id' },
                    url: API_PREFIX+'/variableoverhead/:id'
                },
                getMarkUp: {
                    method: 'GET',
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/markup'
                },
                saveMarkUp: {
                    method: 'POST',
                    params: { id: '@id' },
                    url: API_PREFIX+'/products/:id/markup'
                }
            })
        };
    }]);
}());