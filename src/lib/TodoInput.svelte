<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  let todoText: string = '';

  function emitText(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      dispatch('add', todoText);
      todoText = '';
    }
  }
</script>

<label class="todo-input-wrapper" for="todo-input">
  <span class="circle"></span>
  <input
    type="text"
    id="todo-input"
    bind:value={todoText}
    on:keypress={emitText}
    placeholder="Create a new todo…"
  />
</label>

<style lang="scss">
.todo-input-wrapper {
  color: $text-color-secondary;
  background-color: $card-bg-color;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 20px 24px;
  margin-bottom: 24px;
  box-shadow: 0 35px 50px -15px $shadow-color;
  @include transition($properties: (color, background-color, box-shadow));
  .circle {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid $border-color;
    box-sizing: border-box;
    margin-right: 24px;
    @include transition($properties: border);
  }
  #todo-input {
    border: 0;
    display: block;
    width: calc(100% - 48px);
    color: $text-color;
    background-color: transparent;
    font-family: inherit;
    font-size: inherit;
    caret-color: $just-blue;
    &::placeholder {
      color: $text-color-secondary;
      @include transition($properties: color);
    }
    @include transition($properties: (color, background-color));
    &:focus {
      outline: none;
    }
  }
}
</style>
