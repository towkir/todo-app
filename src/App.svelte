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
    // since the array is rendered in reverse and we add the last todo item on the top of the list
    const reversedIndex: number = (todoList.length - 1) - event.detail.index;
    todoList[reversedIndex].isCompleted = event.detail.status;
    todoItems = todoList;
  }
</script>

<main>
  <DynamicBackground />
  <Header />
  <TodoInput on:add={addTodo} />
  <TodoList items={todoItems} on:toggle={toggleTodoItem} />
</main>

<style lang="scss">
</style>
