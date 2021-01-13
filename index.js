import ToDos from "./Todos.js";
import {
  instructionMessage,
  wrongArg,
  argA,
  withoutIndex,
  NotANumber,
  indexOutOfBound,
  noMoreTodos,
} from "./get-messages.js";
import minimist from "minimist";


const args = minimist(process.argv.slice(2));

if (
  args._.length > 0 ||
  !Object.keys(args).every((arg) => ["_", "l", "a", "r", "c"].includes(arg))
) {
  wrongArg();
  instructionMessage();
} else if (Object.keys(args).length === 1) {
  instructionMessage();
}
const todoList = new ToDos();
let readFile = todoList.getFile();
try{
if (args.l) {
  if (readFile.length === 0) {
    noMoreTodos();
  } else {
    todoList.checkStatus();
  }
}
if (args.a) {
  if (args.a === true || args.a !== "_") {
    argA();
  } else {
    todoList.addToList(todoList.length + 1, `${args.a}`);
  }
} else if (args.r) {
  if (args.r === true) {
    withoutIndex('eltávolítás');
  } else if (typeof args.r != "number") {
    NotANumber('eltávolítás');
  } else if (args.r > readFile.length) {
    indexOutOfBound('eltávolítás');
  } else {
    todoList.delete(args.r);
  }
} else if (args.c) {
  if (args.c === true) {
    withoutIndex('végrehajtás');
  } else if (typeof args.c != "number") {
    NotANumber('végrehajtás');
  } else if (args.c > readFile.length) {
    indexOutOfBound('végrehajtás');
  } else {
    todoList.setStatus(args.c);
  }
}
}
catch(err){
  console.error(err);
}
