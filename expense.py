expenses = []

while True:
    print("\n💰 Expense Tracker")
    print("1. Add Expense")
    print("2. View Expenses")
    print("3. View Total Spent")
    print("4. Exit")

    choice = input("Choose an option: ")

    if choice == "1":
        amount = float(input("Enter amount: "))
        category = input("Enter category: ")
        date = input("Enter date (YYYY-MM-DD): ")

        expense = {
            "amount": amount,
            "category": category,
            "date": date
        }

        expenses.append(expense)
        print("Expense added.")

    elif choice == "2":
        if not expenses:
            print("No expenses recorded.")
        else:
            print("\nYour Expenses:")
            for i, e in enumerate(expenses, start=1):
                print(f"{i}. ₹{e['amount']} | {e['category']} | {e['date']}")

    elif choice == "3":
        total = sum(e["amount"] for e in expenses)
        print(f"Total Spent: ₹{total}")

    elif choice == "4":
        print("Goodbye!")
        break

    else:
        print("Invalid choice. Try again.")

