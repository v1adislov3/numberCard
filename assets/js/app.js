
let masterArr = [51, 55, 222100, 272099];
let maestroArr = ['5018', '5020', '5038', '5893', '6304', '6759', '6761', '6762', '6763', '0604', '6390'];

class Card{
    constructor(numberCard){
        this.card = numberCard;
    }
    convert(){
        let newArr = this.card.split('').reverse().map(i =>+i)
        return newArr;
    }
    numberTwo(){
        return this.convert().reverse().splice(0,2).join("");
    }
    numberFour(){
        return this.convert().reverse().splice(0,4).join("");
    }
    numberSix(){
        return this.convert().reverse().splice(0,6).join("");
    }
    isCorrect(){
        let sum = 0 ;
        this.convert().map( (item,i) =>{
            if (i % 2 == 0) {
                sum = sum + this.convert()[i];
            }else{
                let double = this.convert()[i] * 2;
                sum = sum + (double > 9 ? double - 9: double);
            }
            
        });
        return sum % 10 == 0;
    }
    visa(){
        return (this.convert().reverse()[0] == 4 && this.convert().length >=13 && this.convert().length <= 19? true : false);
    }
    maestro(){
        if (this.convert().length >= 12 && this.convert().length <= 19 ) {
            
            return (maestroArr.find( item =>  this.numberFour() == item)) ? true: false;
        }
    }
    masterCard() {
        if (this.convert().length == 16) {
            if (this.numberTwo() >= masterArr[0] && this.numberTwo() <= masterArr[1]) {
                return true;
            } else if (this.numberSix() >= masterArr[2] && this.numberSix() <= masterArr[3]) {
                return true
            }else{
                return false
            }
        }
    }
    result(){
        if (this.isCorrect()) {
            switch(true){
                case this.visa(): 
                    alert (`Карта: ${this.card} visa`);
                    break;
                case this.maestro(): 
                    alert (`Карта: ${this.card} maestro`);
                    break;
                case this.masterCard(): 
                    alert (`Карта: ${this.card} mastercard`);
                    break;                
            }
        }else{
            alert (`Неверный номер карты`);
        }
    }
}


let inputCard = prompt('Введите номер карты');
let a = new Card(inputCard);
a.result();