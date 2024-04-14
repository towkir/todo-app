<script lang="ts">
  export let todoItem: TodoType;
</script>

<div class="todo-item">
  <span class="indicator">
    <span class="inner"></span>
  </span>
  <p>{todoItem.title}</p>
</div>

<style lang="scss">
  .todo-item {
    padding: 20px 24px;
    color: $text-color;
    background-color: $card-bg-color;
    display: flex;
    align-items: center;
    @include transition($properties: (color, background-color));
    &:hover, &.completed {
      .indicator {
        background-image: linear-gradient(-45deg, #C058F3 0%, #55DDFF 100%);
      }
    }
    &.completed {
      .indicator {
        .inner {
          background-color: transparent;
        }
      }
    }
    .indicator {
      display: inline-block;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-right: 24px;
      background-image: linear-gradient(-45deg, $border-color 0%, $border-color 100%);
      @include transition($properties: background-image);
      .inner {
        display: inline-block;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: $card-bg-color;
        margin: 1px;
        @include transition($properties: background-image);
      }
    }
  }
</style>
