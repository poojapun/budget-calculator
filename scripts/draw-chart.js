//Load google charts
google.charts.load('current', {'packages':['corechart']});


/* Get HTML Elements as JS objects */
const submit_button = document.getElementById('submit-button');
const income = document.getElementById('income');


/* Add event listener to button with callback function */
submit_button.addEventListener("click", drawChart);


function getExpenses(expense_data){
    var total_expense = 0;

    if(expenseView.hasChildNodes()){
        let children = expenseView.childNodes;

        for(let i=1; i < children.length; i++){
            const name = children[i].firstChild.querySelector("input").value;
            const cost = children[i].lastChild.querySelector("input").value;            

            expense_data[i] = [String(name), Number(cost)]
            total_expense += Number(cost);
        }
    }
    return total_expense;
}


function getSavings(total_expense, expense_data){
    const savings = Number(income.value) - Number(total_expense);
    expense_data.push(['Savings', Number(savings)]);

    return savings;
}


/* Callback function for event: Button click */
function drawChart(){
    var expense_data = [['Title', 'Money']];

    var total_expense = getExpenses(expense_data);
    var savings = getSavings(total_expense, expense_data);

    var data = google.visualization.arrayToDataTable(expense_data);
    var options = {'title':'Your budget', 'width':800, 'height':500};
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);

    addResults(savings);
}
