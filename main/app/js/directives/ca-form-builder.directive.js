(function(){
    'use strict';
    angular.module('costAnswer.directives')
        .directive('caFormBuilder', caFormBuilder);

    function caFormBuilder() {
        return {
            link: linkFn,
            restrict: 'A',
            scope: {
                config: '=',
                model: '='
            }
        };
        function linkFn(scope, element, attrs){
            //main loop over config properties
            scope.config.properties.forEach(function(property,index,properties){
                var inputBlock = angular.element('<div></div>');
                var labelBlock = angular.element('<div></div>');
                inputBlock.attr('class',property.input.wrapperClass);
                labelBlock.attr('class',property.label.wrapperClass);
                var inputElement;
                switch (property.input.key) {
                    case "input":
                        inputElement = angular.element('<input></input>');
                        break;
                }
                for(var attribute in property.input.attributes) {
                    if(property.input.attributes.hasOwnProperty(attribute)) inputElement.attr(attribute, property.input.attributes[attribute]);
                }
                var labelElement = angular.element('<label></label>');
                for(var attribute in property.label.attributes) {
                    if(property.label.attributes.hasOwnProperty(attribute)) labelElement.attr(attribute, property.label.attributes[attribute]);
                }
                if(property.label.text !== undefined) labelElement.text(property.label.text);
                inputBlock.append(inputElement);
                labelBlock.append(labelElement);
                element.append(labelBlock);
                element.append(inputBlock);
            });
        }
    }
}());