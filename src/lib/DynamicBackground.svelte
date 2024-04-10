<div class="background-cover light-cover"></div>
<div class="background-cover dark-cover"></div>

<style lang="scss">
.background-cover {
  width: 100%;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  @include transition($properties: opacity);
  z-index: -1;
  &.light-cover {
    background-image: url("src/assets/images/light-background.png");
  }
  &.dark-cover {
    background-image: url("src/assets/images/dark-background.png");
  }
}

@media screen and (max-width: 570px) {
  .background-cover {
    &.light-cover {
      background-image: url("src/assets/images/light-background-sm.png");
    }
    &.dark-cover {
      background-image: url("src/assets/images/dark-background-sm.png");
    }
  }
}
</style>
