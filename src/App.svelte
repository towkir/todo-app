<script lang="ts">
  import DynamicBackground from 'src/lib/DynamicBackground.svelte';
  import Header from 'src/lib/Header.svelte';
  import TodoInput from 'src/lib/TodoInput.svelte';
  import TodoList from 'src/lib/TodoList.svelte';
</script>

<main>
  <DynamicBackground />
  <Header />
  <TodoInput />
  <TodoList />
</main>

<style lang="scss">
</style>
