<template>
  <div class="lamp-container">
    <b-row align-h="center">
      <b-col sm="4">
        <div class="lightner">
          <b-card title="Welcome" class="mb-2 mt-2">
            <div class="name">{{ lamp.enlightenerName }}</div>
            <img
              class="mb-2 mt-2"
              :src="baseURLForProfilePicture + lamp.porfilePic"
            />
            <!-- <img src="../assets/BrendonMacalom.jpg" /> -->

            <b-card-text>
              Hi {{ lamp.enlightenerName }}. <br />
              Please click the button to light up Oil lamp.
            </b-card-text>

            <b-button
              :disabled="lamp.status"
              @click="lightUPLamp()"
              class="mb-2"
              variant="warning"
              >Light Up</b-button
            >
          </b-card>
        </div>
      </b-col>

      <b-col sm="4">
        <div class="lamp">
          <div
            class="flame"
            :class="{ 'hide-flame': !lamp.status, 'show-flame': lamp.status }"
          >
            <img src="../assets/flame.gif" alt="" />
          </div>
          <div class="base">
            <img src="../assets/lamp.png" alt="" />
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { getLamp, updateLamp } from "../services/data.service";
export default {
  name: "Lightner",
  created() {
    this.setLampData();

    this.baseURLForProfilePicture =
      "https://murmuring-sierra-06674.herokuapp.com/api/images/porfilePics/";
  },
  props: {
    id: {
      type: [Number, String],
    },
  },
  data() {
    return {
      lamp: {},
      baseURLForProfilePicture: "",
    };
  },
  methods: {
    setLampData() {
      getLamp(this.id)
        .then((result) => {
          this.lamp = result.data;
        })
        .catch((err) => {
          console.log(err);
          this.lamp = this.lamp ?? {};
        });
    },

    lightUPLamp() {
      this.lamp.status = true;
      updateLamp(this.id, this.lamp)
        .then((result) => {
          this.lamp = result.data;
        })
        .catch((err) => {
          console.log(err);
          this.lamp = this.lamp ?? {};
        });
    },
  },
};
</script>

<style scoped>
.lightner img {
  border-radius: 50%;
}

.lightner {
  position: relative;
  top: 100px;
}

.lamp {
  position: relative;
  top: 100px;
}

.lamp .flame img {
  position: relative;
  z-index: 2;
  top: 100px;
  height: 110px;
  /* height: 100px;
  right: -3px; */
}

.hide-flame {
  visibility: hidden;
}

.show-flame {
  visibility: visible;
}
</style>
