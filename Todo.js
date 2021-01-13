class Todo {
  index;
  name;
  status;
  constructor(index, name, status = false) {
    this.index = index;
    this.name = name;
    this.status = status;
  }
}
export default Todo;
