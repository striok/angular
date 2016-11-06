(function(){

    'use strict';

    function TaskController(HelloAngularDAO)
    {
        var ctrl = this;

        this.products = [];
        this.product = [];

        ctrl.id = 1;

        // this.load = function (id){
        //     return HelloAngularDAO.getProductById(id).then(function (data)
        //     {
        //         ctrl.product = data;
        //         console.log(ctrl.product);
        //     });
        // };

        (function init(){
            return HelloAngularDAO.getProducts().then(function (data){
                ctrl.products = data;
                console.log(ctrl.products);
            })
        })();
    }

    angular.module('helloAngular').controller('TaskController',[ 'HelloAngularDAO', TaskController ]);

})();