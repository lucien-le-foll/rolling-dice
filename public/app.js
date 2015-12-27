angular.module('diceRoller', [])
    .controller('mainController', function(){
        var vm = this;
    })
    .controller('diceController', function(){
        var vm = this;

        vm.dices = [
            {type : 6, score : 2}
        ];

        vm.relaunch = function(dice){
            var range = dice.type + 1;

            dice.score = Math.floor(Math.random()*(range - 1) + 1);
            console.log(dice);
            return dice;
        };

        vm.addDice = function(wType){
            vm.dices.push({type : wType, score : Math.floor(Math.random()*(wType - 1) + 1)});
            vm.diceNumber = vm.dices.length;
        };

        vm.diceNumber = vm.dices.length;
    });