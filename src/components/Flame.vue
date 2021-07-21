<template>
  <div class="lamp-container">
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

    <div class="lightner">
      <img :src="getBaseURLForProfilePic + lamp.porfilePic" />
      <!-- <img src="../assets/BrendonMacalom.jpg" /> -->
      <div class="name">{{ lamp.enlightenerName }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Flame",
  props: {
    lamp: { type: Object, required: true },
  },
  computed: {
    getBaseURLForProfilePic() {
      return "https://murmuring-sierra-06674.herokuapp.com/api/images/porfilePics/";
    },
  },
};
</script>
<style scoped>
.lightner img {
  border-radius: 50%;
  height: 40px;
  position: relative;
  top: -120px;
  z-index: 1;
  /* border: 1px solid white; */
}
.name {
  position: relative;
  top: -120px;
  text-align: center;
  font-size: 10px;
  /* border-style: solid; */
}

.lamp-container {
  /* width: 250px; */
  /* border-style: solid; */
  margin: 5px;
  height: 200px;
}

.lamp {
  position: relative;
  top: -90px;
  width: 100%;
}

.lamp .base img {
  height: 100px;
  /* border-style: solid; */
}

.lamp .flame img {
  position: relative;
  z-index: 2;
  top: 65px;
  height: 100px;
  right: -3px;
}

.hide-flame {
  visibility: hidden;
}

.show-flame {
  visibility: visible;
}
</style>