/* eslint-disable */
<template>
  <div id="show-modules">
    <h1>Search NUS Modules</h1>
    <input id="search" type= "text" v-model="search" placeholder="search modules"/>
    <div v-for="module in filteredModules" :key="module.id" class="single-module">
      <!--  <router-link :to="'/module/'+module['.key']"> <h2>{{ module[".key"] }} </h2> </router-link> -->
      <router-link :to="'/module/'+module.ModuleCode"> <h2>{{ module.ModuleCode }} </h2> </router-link>
        <h2>{{module.ModuleTitle}}</h2>
        <article>
        <table>
            <tr>
              <td class="p-left">
                Department: {{module.Department}}</td>
                <td class="p-right">Semester {{module['History']['0']['Semester']}}</td>
            </tr>
            <tr>
              <td class="p-left">
                Exam Date: {{module['History']['0']['ExamDate']}}</td>
              <td class="p-right">Module Credit: {{module.ModuleCredit}}</td>
            </tr>
            <tr> 
              <td class="p-left">Workload: {{module.Workload}}</td>
              <td class="p-right">SU: {{module.SU}}</td>
            </tr>
            <tr> 
              <td class="p-left">{{module.Webcast}} Available</td>
            </tr>
        </table>
        <table>
          <tr>
            <td>{{module.ModuleDescription}}</td>
          </tr>
        <tr><td>Preclusion: {{module.Preclusion}}</td></tr>
        <tr><td>Prerequisite: {{module.Prerequisite}}</td></tr>
        </table>
      </article>
    </div>
  </div>
</template>

<script>
import {db} from "@/firebase.js"
// import {seRef} from '@/firebase.js'
//import {modsInfo} from '@/firebase.js'

export default {
  name: 'searchModules',
  components: {
  },
  /*firebase: {
    // modules: seRef
  //  modules: modsInfo
  }, */
  data () {
    return {
      search: '',
      test: 123
    }
  },
  methods:{
      async getData() {
      this.data = await db
        .ref("/mods_info/data")
        .once("value")
        .then(function(snapshot) {
          // takes a snapshot of the data at that time
          var d = snapshot.val();
          // console.log("whewww")
          /*eslint-disable */
          console.log(d);
          return d;
        });
    },
  },
  computed: {
    async filteredModules() {
      await this.getData();
      /* eslint-disable */
      console.log(this.modules)
      return this.modules.filter((module) => {
        // return module['.key'].match(this.search.toUpperCase())
        return module.ModuleCode.match(this.search.toUpperCase())
      })
    }
  }
}
</script>

<style>


#show-modules {
  max-width: 950px;
  margin:0 auto;
}

.single-module {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}

table {
    width: 100%;
}
td {
    vertical-align: top;
}
.p-left {
    text-align: left;
}
.p-right {
    text-align:right;
}
.copy {
    visibility: hidden;
}
.copy, .p-right {
    white-space: nowrap;
}

.search input[type=text] {
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
}

</style>

