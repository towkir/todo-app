<script lang="ts">
  import TodoItem from 'src/lib/TodoItem.svelte';
  export let items: TodoType[];
  
  const tabs: string[] = ['All', 'Active', 'Completed'];
  let selectedTab: string = 'All';

  $: reversedList = JSON.parse(JSON.stringify(items)).reverse();
  $: incompleteItems = items.filter(item => item.isCompleted === false).length;
</script>

<div class="todo-list">
  <div class="todo-list-scroller">
    {#each reversedList as todo, index}
      <TodoItem index={index} todoItem={todo}/>
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
