const amountInput = document.getElementById("amountInput");
const categoryInput = document.getElementById("categoryInput");
const dateInput = document.getElementById("dateInput");
const expenseList = document.getElementById("expenseList");
const totalDisplay = document.getElementById("total");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

renderExpenses();

function formatAmount(amount) {
    return "₹" + amount.toLocaleString("en-IN");
}

function addExpense() {
    const amount = parseFloat(amountInput.value);
    const category = categoryInput.value.trim();
    const date = dateInput.value;

    if (!amount || amount <= 0 || category === "" || date === "") {
        alert("Please enter valid details");
        return;
    }

    expenses.push({ amount, category, date });
    saveAndRender();

    amountInput.value = "";
    categoryInput.value = "";
    dateInput.value = "";
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    saveAndRender();
}

function saveAndRender() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
}

function renderExpenses() {
    expenseList.innerHTML = "";
    let total = 0;

    expenses.forEach((e, index) => {
        total += e.amount;

        const li = document.createElement("li");

        const info = document.createElement("div");
        info.className = "info";
        info.textContent = `${e.category} | ${e.date}`;

        const amount = document.createElement("div");
        amount.className = "amount";
        amount.textContent = formatAmount(e.amount);

        const delBtn = document.createElement("button");
        delBtn.className = "delete-btn";
        delBtn.textContent = "Delete";
        delBtn.onclick = () => deleteExpense(index);

        li.appendChild(info);
        li.appendChild(amount);
        li.appendChild(delBtn);

        expenseList.appendChild(li);
    });

    totalDisplay.textContent = `Total Spent: ${formatAmount(total)}`;
}
