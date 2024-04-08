<script>

</script>

<header>
  <h1>TODO</h1>
  <div class="theme-toggler">
    <label for="theme-switcher">
      <input type="checkbox" id="theme-switcher">
      <span class="icon"></span>
    </label>
  </div>
</header>

<style lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    color: $header-color;
    @include px-to-rem(40)
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
          transition: background-position 0.3s ease-in-out;
        }
        &:checked + .icon {
          background-position-y: -52px, 0;
        }
      }
    }
  }
}
</style>
