<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let index: number;
  export let todoItem: TodoType;

  function toggleTodoStatus(): void {
    dispatch('toggle', { index, status: !todoItem.isCompleted });
  }

  function deleteTodo(): void {
    dispatch('delete', index);
  }
</script>

<div class="todo-item" class:completed={todoItem.isCompleted} on:click={toggleTodoStatus}>
  <span class="indicator">
    <span class="inner"></span>
  </span>
  <p>{todoItem.title}</p>
  <button type="button" class="delete-btn" on:click|stopPropagation={deleteTodo}>
    <img src="src/assets/icons/icon-cross.svg" />
  </button>
</div>

<style lang="scss">
  .todo-item {
    padding: 20px 24px;
    color: $text-color;
    background-color: $card-bg-color;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px solid $border-color;
    @include transition($properties: (color, background-color, border-color));
    &:hover {
      button.delete-btn {
        opacity: 1;
      }
    }
    &:hover, &.completed {
      .indicator {
        background-position: -72px -72px;
      }
    }
    &.completed {
      .indicator {
        .inner {
          background-color: transparent;
          &::before {
            opacity: 1;
          }
        }
      }
      p {
        color: $text-color-muted;
        &::before {
          width: 100%;
          background-color: $text-color-muted;
        }
      }
    }
    .indicator {
      display: inline-block;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-right: 24px;
      background-image: linear-gradient(-45deg, #C058F3 0px, #55DDFF 24px, #55DDFF 34px, transparent 72px);
      background-color: $border-color; // yes, this element is decorative
      background-size: 96px 96px;
      background-repeat: no-repeat;
      @include transition($properties: (background-color, background-position));
      .inner {
        position: relative;
        display: inline-block;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: $card-bg-color;
        margin: 1px;
        @include transition($properties: background-color);
        &::before {
          content: '';
          display: inline-block;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-image: url("src/assets/icons/icon-check.svg");
          background-repeat: no-repeat;
          background-position: center;
          opacity: 0;
          @include transition($properties: opacity);
        }
      }
    }
    p {
      position: relative;
      color: $text-color;
      text-wrap: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 15px;
      @include transition($properties: color);
      &::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        width: 0;
        height: 1px;
        background-color: $text-color;
        @include transition($properties: (width, background-color));
      }
    }
    button.delete-btn {
      appearance: none;
      border: none;
      background-color: transparent;
      margin-left: auto;
      cursor: pointer;
      opacity: 0;
      @include transition($properties: opacity);
    }
  }
</style>
