<script lang="ts">
  import type { ComponentEvents } from 'svelte';
  import DynamicBackground from 'src/lib/DynamicBackground.svelte';
  import Header from 'src/lib/Header.svelte';
  import TodoInput from 'src/lib/TodoInput.svelte';
  import TodoList from 'src/lib/TodoList.svelte';

  let todoItems: TodoType[] = [
    { title: 'Complete Todo App on Frontend Mentor', isCompleted: false },
    { title: 'Pick up groceries', isCompleted: false },
    { title: 'Read for 1 hour', isCompleted: false },
    { title: '10 minutes meditation', isCompleted: false },
    { title: 'Jog around the park 3x', isCompleted: false },
    { title: 'Complete online JavaScript course and Complete online JavaScript course', isCompleted: true }
  ];

  function getReversedIndex(index: number): number {
    // since the array is rendered in reverse and we add the last todo item on the top of the list
    return (todoItems.length - 1) - index;
  }

  function addTodo(event: ComponentEvents<TodoInput>['add']): void {
    let todoList = todoItems;
    const todo: TodoType = {
      title: event.detail,
      isCompleted: false,
    };
    todoList.push(todo);
    todoItems = todoList;
  }

  function toggleTodoItem(event: ComponentEvents<TodoList>['toggle']) {
    let todoList = todoItems;
    todoList[getReversedIndex(event.detail.index)].isCompleted = event.detail.status;
    todoItems = todoList;
  }

  function deleteTodoItem(event: ComponentEvents<TodoList>['delete']) {
    let todoList = todoItems;
    todoList.splice(getReversedIndex(event.detail), 1)
    todoItems = todoList;
  }
</script>

<main>
  <DynamicBackground />
  <Header />
  <TodoInput on:add={addTodo} />
  <TodoList items={todoItems} on:toggle={toggleTodoItem} on:delete={deleteTodoItem} />
</main>

<style lang="scss">
</style>
