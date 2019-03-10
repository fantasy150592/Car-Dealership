//hide preloader

window.addEventListener('load', () => document.querySelector('.preloader').classList.add('hidePreloader'))



const CreateCars = (() => {
    //car data1
    const cars = [];
    // car class

    class Car {
        constructor(make, country, img, special, model, price, type, trans, gas) {
            this.make = make;
            this.country = country;
            this.img = img;
            this.special = special;
            this.model = model;
            this.price = price;
            this.type = type;
            this.trans = trans;
            this.gas = gas;
        }
    }

    // car creation function
    function makeCar(make, country, img = '/Car-Dealership/images/car-american-01.jpg', special = true, model = 'new model', price = 10000, type = 'sedan', trans = 'automatic', gas = '50') {
        const car = new Car(make, country, img, special, model, price, trans, gas);
        cars.push(car);
    }
    // produce cars
    function produceCars() {
        makeCar('chevy', 'american');
        makeCar('mercedes', 'german', '/Car-Dealership/images/Mercedes-01.jpg', true);
        makeCar('mercedes', 'german', '/Car-Dealership/images/Mercedes-02.jpg');
        makeCar('mercedes', 'german', '/Car-Dealership/images/Mercedes-03.jpg', false, 'some model');
        makeCar('mercedes', 'german', '/Car-Dealership/images/Mercedes-04.jpg', undefined, 'other model');
        makeCar('bmw', 'german', '/Car-Dealership/images/bmw-01.jpg', false);
        makeCar('chevy', 'american', '/Car-Dealership/images/car-american-02.jpg');
        makeCar('chevy', 'american', '/Car-Dealership/images/car-american-03.jpg', false);
        makeCar('chevy', 'american', '/Car-Dealership/images/car-american-04.jpg', false);
        makeCar('chevy', 'american', '/Car-Dealership/images/car-american-05.jpg', false);
    }
    produceCars();
    //console.log(cars);
    // special cars
    const specialCars = cars.filter(car => car.special === true);
    //console.log(specialCars);

    return {
        cars,
        specialCars
    }
})();

const DisplaySpecialCars = ((CreateCars) => {

    const specialCars = CreateCars.specialCars;
    //console.log(specialCars);
    const info = document.querySelector('.featured-info');

    // document loaded event
    document.addEventListener('DOMContentLoaded', () => {
        info.innerHTML = '';

        let data = '';

        specialCars.forEach(item => {
            data += `<!-- single item -->
            <div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
                <span data-img="${item.img}" class="featured-icon mr-2">
                    <i class="fas fa-car"></i>
                </span>
                <h5 class="font-weight-bold mx-1">${item.make}</h5>
                <h5 class="mx-1">${item.model}</h5>
            </div>
            <!-- end of single item -->`;
        });
        info.innerHTML = data;
    });


})(CreateCars);
// console.log(CreateCars.cars);
// console.log(CreateCars.specialCars);

// // reveal pattern
// // life immediately invoked function expression


// //function declaration
// function sayHi() {
//     console.log('hello');
// }

// //invoke the function 
// //sayHi();

// // function expression
// var person = function(name) {
//     console.log(`Hello I'm ${name}`);
// };

// //call the function
// //person('john');

// //immediately invoked function 
// // does not need to be invoked separately
// // variables not is global scope
// (function() {
//     //private variable not in the global scope
//     // var name = 'john';
//     // console.log(name);
//     // console.log('hello');
// })();

// //console.log(john);

// //out modules
// var Module = (function() {

//     //private variable
//     var counter = 0;

//     function addCount() {
//         counter++;
//     }

//     function show() {
//         console.log(ounter);
//     }

//     return {
//         addCount: addCount,
//         show: show
//     }
// })();

// //Module.addCount()
// //Module.addCount()
// //Module.addCount()
// //Module.show()

// //console.log(counter);


// const ES6Module = (() => {

//     // private variable
//     let counter = 0;

//     function addCount() {
//         counter++;
//     }

//     function show() {
//         console.log(counter);
//     }

//     return {
//         addCount,

//     }
// })