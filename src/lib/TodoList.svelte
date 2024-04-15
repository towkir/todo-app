<script lang="ts">
  import TodoItem from 'src/lib/TodoItem.svelte';
  
  let todoItems: TodoType[] = [
    { title: 'Complete online JavaScript course', isCompleted: true },
    { title: 'Jog around the park 3x', isCompleted: false },
    { title: '10 minutes meditation', isCompleted: false },
    { title: 'Read for 1 hour', isCompleted: false },
    { title: 'Pick up groceries', isCompleted: false },
    { title: 'Complete Todo App on Frontend Mentor', isCompleted: false }
  ];
</script>

<div class="todo-list">
  <div class="todo-list-scroller">
    {#each todoItems as todo}
      <TodoItem todoItem={todo}/>
    {/each}
  </div>
  <div class="status-bar"></div>
</div>

<style lang="scss">
  .todo-list {
    background-color: $card-bg-color;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 35px 50px -15px $shadow-color;
    @include transition($properties: box-shadow);
  }
</style>
