/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 35;
var numDays = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculateCost the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function changeDayOfWeek(day) {
    
    const changeDayButton = document.getElementById(day);

    if (!changeDayButton.classList.contains('clicked')) {
        changeDayButton.classList.add('clicked');
        numDays++;
    } 
    
    else {
        !changeDayButton.classList.remove('clicked');
        numDays--;
    }

    recalculateCost();
}



document.getElementById('monday').addEventListener('click', function(){
    changeDayOfWeek('monday');
});


document.getElementById('tuesday').addEventListener('click', function(){
    changeDayOfWeek('tuesday');
});


document.getElementById('wednesday').addEventListener('click', function(){
    changeDayOfWeek('wednesday');
});


document.getElementById('thursday').addEventListener('click', function(){
    changeDayOfWeek('thursday');
});


document.getElementById('friday').addEventListener('click', function () {
    changeDayOfWeek('friday');
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
    const changeDayButtons = document.querySelectorAll('.blue-hover');
    changeDayButtons.forEach(function(changeDayButton){
        changeDayButton.classList.remove('clicked');
    });

    numDays = 0;
    recalculateCost();
}

document.getElementById('clear-button').addEventListener('click', function(){
    clearDays();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculateCost the total cost.
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculateCostd.

function changeRate(updatedCost) {
    costPerDay = updatedCost;

    const halfDayButton = document.getElementById('half');
    const fullDayButton = document.getElementById('full');


    if (updatedCost == 20) {

        halfDayButton.classList.add('clicked');
        fullDayButton.classList.remove('clicked');
    } 
    
    
    else {
        
        halfDayButton.classList.remove('clicked');
        fullDayButton.classList.add('clicked');
    }

    recalculateCost();
}

document.getElementById('half').addEventListener('click', function(){
    changeRate(20);


});


document.getElementById('full').addEventListener('click', function(){
    changeRate(35);

});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculateCost() {
    const totalCost = costPerDay * numDays;
    const totalCostElement = document.getElementById('calculated-cost');
    totalCostElement.innerHTML = totalCost;
}
