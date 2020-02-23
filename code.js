'use strict';

const MAX_LENGTH = 10;
let result = document.querySelector('.result');
let calculator = document.querySelector('.calculator');

let numOperation = '+-*/';

calculator.addEventListener('click', function(e) {
    let targetDataset = e.target.dataset;

    if(targetDataset.num) {
        getNumber(e.target.value);
    }
    if(targetDataset.c) {
        clear(e.target.value);
    }
    if(targetDataset.operation){
        getOperation(e.target.value);
    }
    if(targetDataset.result){
        getResult(result.value);
    }
    if(targetDataset.cOne){
        clearOne(result.value);
    }

    function getNumber(value){
        result.value == '0' ? result.value = value: result.value += value;
        if (result.value.length > MAX_LENGTH) {
            result.value = result.value.slice(0, MAX_LENGTH);
        }
    }

    function clear(value) {
        result.value = '0';
    }

    function getOperation(value) {
        if(numOperation.includes(result.value[result.value.length - 1])){
            return;
        }
        result.value += value;
    }

    function getResult(value) {
        if(eval(value) == 'Infinity'){
            return result.value = '0';
        }
        result.value = eval(value);
    }

    function clearOne(value){
        result.value = result.value.slice(0, result.value.length - 1);
        if(!result.value){
            result.value = '0';
        }
    }

});