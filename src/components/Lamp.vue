<template>
  <div>
    This is Lamp Component

    <div class="oil-lamp-container">
      <b-row align-h="center">
        <b-col v-for="lamp in lamps" :key="lamp._id.oid" sm="3">
          <FlameComponent :lamp="lamp" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import FlameComponent from "../components/Flame.vue";
import pusher from "../pusher/index.js";
import { getLamps } from "../services/data.service";
export default {
  name: "Lamp",
  components: { FlameComponent },
  created() {
    this.subscribeToPusher(), this.getLampsDataFromAPI();
  },
  data() {
    return {
      $channel: null,
      lamps: [],
    };
  },
  methods: {
    getLampsDataFromAPI() {
      getLamps()
        .then((result) => {
          this.lamps = result?.data ?? [];
        })
        .catch((err) => {
          this.lamps = [];
          console.log(err);
        });
    },
    subscribeToPusher() {
      this.$channel = pusher.subscribe("lamps");
      this.$channel.bind(
        "update",
        function (data) {
          console.log(`lamp data update : ${data.desc}`);
          this.getLampsDataFromAPI();
        },
        this
      );
    },
  },
  destroyed() {
    this.$channel = null;
  },
};
</script>
<style scoped>
.oil-lamp-container {
  position: relative;
  top: 100px;
}
</style>
