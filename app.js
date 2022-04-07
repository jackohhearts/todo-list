let input = prompt("What would you like to do?");
const todos = ["Test", "Test 2"];
while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("******************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("******************")
    } else if (input === "new") {
        const newTodo = prompt("Okay, what's the new to-do?");
        todos.push(newTodo);
        console.log(`${newTodo} added to list!`)
    } else if (input === "delete") {
        const index = prompt("Okay, enter an index to delete!");
        const deleted = todos.splice(index, 1);
        console.log(`Okay, deleted ${deleted[0]}`);
    }

    input = prompt("What would you like to do?")
}

console.log("Okay, quitting the app!")