<template>
  <div class="hau hau-dot-elastic"></div>
</template>

<style lang="scss">
$indicator-color: #202024;
$circle-radius: 8px;

.hau.hau-dot-elastic {
  margin-left: 20px;
  position: relative;
  width: $circle-radius;
  height: $circle-radius;
  border-radius: 5px;
  background-color: $indicator-color;
  color: $indicator-color;
  animation: dotElastic 1s infinite linear;
}

.hau.hau-dot-elastic::before,
.hau.hau-dot-elastic::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
}

.hau.hau-dot-elastic::before {
  left: -15px;
  width: $circle-radius;
  height: $circle-radius;
  border-radius: 5px;
  background-color: $indicator-color;
  color: $indicator-color;
  animation: dotElasticBefore 1s infinite linear;
}

.hau.hau-dot-elastic::after {
  left: 15px;
  width: $circle-radius;
  height: $circle-radius;
  border-radius: 5px;
  background-color: $indicator-color;
  color: $indicator-color;
  animation: dotElasticAfter 1s infinite linear;
}

@keyframes dotElasticBefore {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1.5);
  }
  50% {
    transform: scale(1, 0.67);
  }
  75% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}

@keyframes dotElastic {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1, 1.5);
  }
  75% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}

@keyframes dotElasticAfter {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1, 0.67);
  }
  75% {
    transform: scale(1, 1.5);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
