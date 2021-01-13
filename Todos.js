import fs from "fs";
import Todo from "./Todo.js";

class ToDos {
  toDosList = [];
  fileOfTodos = [];
  content = fs.readFileSync("todo-list.json", "utf-8");
  fileOfTodos = JSON.parse(this.content);

  getFile() {
    return this.fileOfTodos;
  }
  addToList(index, name) {
    this.fileOfTodos.push(new Todo(index, name));
    this.writeFile();
    console.log(name + "  hozzáadva");
  }
  getStatus() {
    return this.status;
  }
  setStatus(index) {
    for (let i = 0; i < this.fileOfTodos.length; i++) {
      if (i === index - 1) {
        this.fileOfTodos[i].status = true;
      }
    }
    this.writeFile();
    console.log(`${this.fileOfTodos[index - 1].name}: elvégezve`);
  }
  delete(index) {
    console.log(`${this.fileOfTodos[index - 1].name}: törölve`);
    this.fileOfTodos.splice(index - 1, 1);
    this.writeFile();
  }
  readOutFiles() {
    let file = fs.readFileSync("todo-list.json", "utf-8");
    let read = JSON.parse(file);
    return read;
  }
  checkStatus() {
    this.fileOfTodos.forEach((todo, i) => {
      if (todo.status === true) {
        console.log(`${i + 1} - [${"x"}] ${todo.name}`);
      } else {
        console.log(`${i + 1} - [${" "}] ${todo.name}`);
      }
    });
  }
  writeFile() {
    fs.writeFileSync(
      "todo-list.json",
      JSON.stringify(this.fileOfTodos, null, 2)
    );
  }
}
export default ToDos;
