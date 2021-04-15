const add_expense_button = document.getElementById('add-button');
const expenseView = document.getElementById('expenses');
const resultsView = document.getElementById('results');

var expense_id = 1

add_expense_button.addEventListener("click", addExpenses);

function addExpenses(){
    const html = `<div class="mt-2"> <span>Expense #${expense_id} name</span> <input type="text"> </div> <div class="mt-2"> <span>Expense #${expense_id} cost</span> <input type="number"></div>`;
    var e = document.createElement('div');
    e.innerHTML = html;

   expenseView.appendChild(e);
   expense_id += 1
}

function addResults(savings){
    resultsView.innerHTML = `<h3>Your montly savings is ${savings}!</h3>`
}

