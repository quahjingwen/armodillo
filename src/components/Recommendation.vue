<template>
  <div>
    <div class="header">
      <h3>Recommendation of Modules</h3>
      <button class="button-right" @cick="signOut">Sign Out</button>
    </div>
    <br>
    <div class="display">
      <div class="analysis">
        <div class="analysis-header">
          <img
            class="header-image"
            src="../assets/analysis.png"
            alt="analysis picture"
            height="100px"
          >
          <h3 class="header-text">
            <strong>Analysis</strong>
          </h3>
        </div>
        <div class="analysis-text">
          <p>
            The following modules have been taken by more than
            70% of your seniors in y2s1:
          </p>
          <br>
        </div>
        <b-list-group-item class="list" v-for="mod in mods" :key="mod.id">
          <a href="#">{{ mod.code }}</a>
        </b-list-group-item>
      </div>
      <div class="statistics">
        <div class="statistics-header">
          <img class="statistics-img" src="../assets/pie-chart.png" height="100px">
          <h3 class="statistics-text">
            <strong>Statistics</strong>
          </h3>
        </div>
        <p>Here are the statistics</p>
        <p v-for="info in modInfo" :key="info.id">{{modInfo.Department}}</p>
      </div>
    </div>
    <br>

  </div>
</template>
<script>
import modRef from "../firebase.js"

export default {
  name: "Recommendation",
  data() {
    return {
      labels: ["React", "Vanilla JS", "JQuery", "VueJS"],
      dataset: [5, 10, 15, 25],
      recoMods: {
        code: "BT2101",
        title: "Decision making visualisation and tools"
      },
      mods: [
        { code: "CS2010", code2: "IS3103(48%)" },
        { code: "BT2102", code2: "BT3102(44%)" },
        { code: "ST2334", code2: "BT3103(42%)" },
        { code: "IS2101", code2: "IS4302(33%)" },
        { code: "IS3103" }
      ]
    };
  },
    firebase: function () {
    return {
      modInfo: modRef
    }
  },
  methods: {
    signOut: function() {
      //console.log("pushed")
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style scoped>
.header h3 {
  float: left;
}
.header button-right {
  float: right;
}
.reco {
  border: solid;
  border-color: black;
  margin-left: 50px;
  margin-right: 50px;
  display: inline;
  overflow: auto;
}
.list:hover {
  background-color: gray;
}

.analysis {
  border: solid;
  border-color: rgb(148, 148, 148);
  display: inline-block;
  vertical-align: top;
  float: left;
  width: 49%;
  height: 460px;
}

.statistics {
  border: solid;
  border-color: rgb(148, 148, 148);
  display: inline-block;
  vertical-align: top;
  float: center;
  text-align: center;
  width: 49%;
  height: 460px;
}

.statstics-text {
  display: inline-block;
}

.statistics-img {
  display: inline-block;
}

.header-image {
  display: inline-block;
}

.header-text {
  display: inline-block;
}

</style>