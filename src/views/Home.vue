<template>
  <div class="home">
    <CovidRaceBar />
  </div>
</template>

<script>
// @ is an alias to /src
import CovidRaceBar from "@/components/CovidRaceBar.vue";
export default {
  name: "Home",
  components: {
    CovidRaceBar
  }
};
</script>
