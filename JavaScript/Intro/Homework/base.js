// -=-=-=-=-=-=-=-=- [ TASK 1 ] -=-=-=-=-=-=-=-=-
alert("-=-=-=-=-=-=-=-=-=-=- [ TASK 1 ] -=-=-=-=-=-=-=-=-=-=-");
const currentYear = 2022;
let userBirthAge = +prompt("Enter the year of your birth:");
let userAge = currentYear - userBirthAge;
alert(`You are ${userAge} y.o.!`);

const fileSize = 820; //mb
let usbVolume = +prompt("Enter the volume of the flash drive in GB:");
// alert(`Your USB have ${usbVolume}GB = ${usbVolume * 1024}mb!`);
let filesAmount = (file, usb) => {
    let usedDriveVolume = 0;
    let count = 0;
    while (usedDriveVolume < usb) {
        usedDriveVolume += file;
        if (usedDriveVolume < usb) {
            count++;
        }
    }
    return count;
}
alert(`You can write ${filesAmount(fileSize, usbVolume * 1024)} files with size ${fileSize}mb on ${usbVolume}GB USB drive!`);

// -=-=-=-=-=-=-=-=- [ TASK 2 ] -=-=-=-=-=-=-=-=-
alert("-=-=-=-=-=-=-=-=-=-=- [ TASK 2 ] -=-=-=-=-=-=-=-=-=-=-");
let num = +prompt("Enter number to get a symbol:");
let getSymbol = (number) => {
    let sym = null;
    switch (number) {
        case 1:
            sym = "!"; 
            break;
        case 2:
            sym = "@"; 
            break;
        case 3:
            sym = "#"; 
            break;
        case 4:
            sym = "$"; 
            break;
        case 5:
            sym = "%"; 
            break;
        case 6:
            sym = "^"; 
            break;
        case 7:
            sym = "&"; 
            break;
        case 8:
            sym = "*"; 
            break;
        case 9:
            sym = "("; 
            break;
        case 0:
            sym = ")"; 
            break;
        default:
            sym = "Input ERROR!"
            break;
    }
    return sym;
}
alert(`${num} = ${getSymbol(num)}`);

// -=-=-=-=-=-=-=-=- [ TASK 3 ] -=-=-=-=-=-=-=-=-
alert("-=-=-=-=-=-=-=-=-=-=- [ TASK 3 ] -=-=-=-=-=-=-=-=-=-=-");
let firstNum = +prompt("Enter first number:");
let secondNum = +prompt("Enter second number:");
let calcRange = (start, end) => {
    let sumResult = start;
    let numbersCounter = 0;
    for (let i = start; i <= end; i++) {
        sumResult += i;
        numbersCounter++;
    }
    return [sumResult, numbersCounter];
}
alert(`Sum of all numbers from range [${firstNum}; ${secondNum}] is ${calcRange(firstNum, secondNum)[0]}!\nAmount of numbers from given range is ${calcRange(firstNum, secondNum)[1]}!`);

let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let liveAnotherDay = true;
let dayCounter = 0;
while (liveAnotherDay) {
    liveAnotherDay = confirm(`${daysOfWeek[dayCounter]}`);
    if (liveAnotherDay) {
        if(dayCounter + 1 <= 6){
            dayCounter++;
        }
        else{
            dayCounter = 0;
        }
    }    
}
