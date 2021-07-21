<template>
  <b-row>
    <b-col v-for="lamp in lamps" :key="lamp._id.oid" sm="3">
      <b-card>
        <!-- <b-card-text> </b-card-text> -->
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: "Admin",
  created() {
    this.lamps = [
      {
        _id: {
          oid: "60f2eeeab304b51ab9ea3303",
        },
        enlightenerName: "Brendon Macalom",
        status: true,
        priority: 1,
        porfilePic: "BrendonMacalom.jpg",
      },
      {
        _id: {
          oid: "60f2ef87b304b51ab9ea3304",
        },
        enlightenerName: "Kevin Peterson",
        status: true,
        priority: 2,
        porfilePic: "KevinPeterson.jpg",
      },
      {
        _id: {
          oid: "60f2eff5b304b51ab9ea3305",
        },
        enlightenerName: "Elton Chikumbura",
        status: false,
        priority: 3,
        porfilePic: "EltonChikumbura.jpg",
      },
      {
        _id: {
          oid: "60f2f06fb304b51ab9ea3306",
        },
        enlightenerName: "Pelewakayano",
        status: false,
        priority: 4,
        porfilePic: "Pelewakayano.jpg",
      },
      {
        _id: {
          oid: "60f2ff2d7f098cf40b9b89b2",
        },
        enlightenerName: "Kaiso Rabada",
        status: false,
        priority: 5,
        porfilePic: "KaisoRabada.jpg",
      },
    ];
  },
  data() {
    return {
      lamps: [],
    };
  },
};
</script>
 <style scoped>
</style>