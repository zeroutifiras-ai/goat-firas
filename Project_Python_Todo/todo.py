tasks = []

def show_tasks():
    print("\nTasks:")
    for i, task in enumerate(tasks, 1):
        print(f"{i}. {task}")
    print()

while True:
    print("1. Add Task\n2. Show Tasks\n3. Exit")
    choice = input("Choose: ")
    if choice == "1":
        task = input("Enter task: ")
        tasks.append(task)
    elif choice == "2":
        show_tasks()
    elif choice == "3":
        break
    else:
        print("Invalid choice!")
