<script lang="ts">
  import { onMount } from 'svelte';

  let currentTheme: string = localStorage.getItem('todo-app-theme') || 'light';
  function isDarkThemeApplied(theme: string): boolean {
    return theme === 'dark';
  }
  $: darkThemeApplied = isDarkThemeApplied(currentTheme);
  function applyThemeToPage(): void {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }
  function saveThemeSettings(theme: string): void {
    currentTheme = theme;
    localStorage.setItem('todo-app-theme', theme);
  }
  function changeTheme(toDark: boolean): void {
    saveThemeSettings(toDark ? 'dark': 'light');
    applyThemeToPage();
  }

  onMount(() => {
    applyThemeToPage();
  })
</script>

<header>
  <h1>TODO</h1>
  <div class="theme-toggler">
    <label for="theme-switcher">
      <input type="checkbox" id="theme-switcher"
        bind:checked={darkThemeApplied}
        on:change={(event) => changeTheme(event.target.checked)}>
      <span class="icon"></span>
    </label>
  </div>
</header>

<style lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  h1 {
    color: $header-color;
    @include font-size-px-to-rem(40);
    letter-spacing: 15px;
  }
  .theme-toggler {
    label {
      display: inline-block;
      width: 26px;
      height: 26px;
      overflow: hidden;
      cursor: pointer;
      input[type="checkbox"] {
        display: none;
        & + .icon {
          display: inline-block;
          width: 26px;
          height: 26px;
          background-image: url("src/assets/icons/icon-moon.svg"), url("src/assets/icons/icon-sun.svg");
          background-repeat: no-repeat;
          background-size: 26px;
          background-position-x: center, center;
          background-position-y: 0, 52px;
          @include transition($properties: background-position);
        }
        &:checked + .icon {
          background-position-y: -52px, 0;
        }
      }
    }
  }
}
</style>
