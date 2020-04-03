<template>
  <v-app class="my-app">
    <v-content>
      <div class="text-center">
        <h1 class="mt-3">Covid-19 Spread in The World</h1>
        <div>
          Data source:
          <a href="https://ourworldindata.org/coronavirus-source-data"
            >Our World In Data
          </a>
        </div>
        <v-container>
          <v-row>
            <v-col cols="6" md="3" lg="3">
              <v-select
                :items="dataCsv"
                item-text="text"
                item-value="value"
                label="Data Type"
                v-model="csvUrl"
                hide-details
              ></v-select>
            </v-col>
            <v-col cols="6" md="3" lg="3">
              <v-select
                :items="dispCnt"
                item-text="text"
                item-value="value"
                label="Display Count"
                v-model="topN"
                hide-details
              ></v-select>
            </v-col>
            <v-col cols="6" md="3" lg="3">
              <v-select
                :items="speeds"
                item-text="text"
                item-value="value"
                label="Play Speed"
                v-model="playSpeed"
                hide-details
              ></v-select>
            </v-col>
            <v-col cols="6" md="3" lg="3">
              <v-checkbox
                v-model="excludeChina"
                label="Exclude China"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-container>

        <CovidRaceBar
          :key="chartKey"
          :csvUrl="csvUrl"
          :topN="topN"
          :interval="playSpeed"
          :excludeChina="excludeChina"
        />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import CovidRaceBar from "./components/CovidRaceBar";

export default {
  name: "App",
  components: {
    CovidRaceBar
  },
  data() {
    return {
      chartKey: 1,
      csvUrl: "https://covid.ourworldindata.org/data/ecdc/total_cases.csv",
      dataCsv: [
        {
          text: "Total Case",
          value: "https://covid.ourworldindata.org/data/ecdc/total_cases.csv"
        },
        {
          text: "Total Deaths",
          value: "https://covid.ourworldindata.org/data/ecdc/total_deaths.csv"
        }
      ],
      topN: 10,
      dispCnt: [
        {
          text: "Top 10",
          value: 10
        },
        {
          text: "Top 20",
          value: 20
        }
      ],
      playSpeed: 1000,
      speeds: [
        {
          text: "0.5x",
          value: 1500
        },
        {
          text: "1x",
          value: 1000
        },
        {
          text: "1.5x",
          value: 500
        },
        {
          text: "2x",
          value: 250
        }
      ],
      excludeChina: true
    };
  },
  watch: {
    excludeChina(val) {
      this.chartKey++;
    },
    csvUrl(val) {
      this.chartKey++;
    },
    topN(val) {
      this.chartKey++;
    },
    playSpeed(val) {
      this.chartKey++;
    }
  }
};
</script>
<style>
.my-app.theme--light.v-application {
  background-color: #f9fbe7;
}
</style>
