<script lang="ts">
  import TodoItem from 'src/lib/TodoItem.svelte';
  
  const tabs:string[] = ['All', 'Active', 'Completed'];
  let selectedTab:string = 'All';
  
  let todoItems: TodoType[] = [
    { title: 'Complete online JavaScript course', isCompleted: true },
    { title: 'Jog around the park 3x', isCompleted: false },
    { title: '10 minutes meditation', isCompleted: false },
    { title: 'Read for 1 hour', isCompleted: false },
    { title: 'Pick up groceries', isCompleted: false },
    { title: 'Complete Todo App on Frontend Mentor', isCompleted: false }
  ];

  $: incompleteItems = todoItems.filter(item => item.isCompleted === false).length;
</script>

<div class="todo-list">
  <div class="todo-list-scroller">
    {#each todoItems as todo}
      <TodoItem todoItem={todo}/>
    {/each}
  </div>
  <div class="status-bar">
    <span>{incompleteItems} item{incompleteItems === 1 ? '' : 's'} left</span>
    <span class="tabs">
      {#each tabs as tab}
        <button type="button" class:active={selectedTab === tab}>{tab}</button>
      {/each}
    </span>
    <button type="button">Clear Completed</button>
  </div>
</div>

<style lang="scss">
  .todo-list {
    background-color: $card-bg-color;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 35px 50px -15px $shadow-color;
    @include transition($properties: box-shadow);
    .status-bar {
      padding: 16px 24px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: $text-color-secondary;
      background-color: $card-bg-color;
      border-top: 1px solid $border-color;
      @include font-size-px-to-rem(14);
      @include transition($properties: (color, background-color, border-color));
      span.tabs {
        button {
          font-weight: bold;
          padding: 0 9px;
          &.active {
            color: $just-blue;
          }
        }
      }
      button {
        appearance: none;
        border: 0;
        color: inherit;
        background-color: transparent;
        font-family: inherit;
        font-size: inherit;
        cursor: pointer;
      }
    }
  }
</style>
