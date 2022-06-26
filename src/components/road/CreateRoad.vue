<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group mb-2">
        <label for="title">District</label>
        <select class="form-select" aria-label="Default select example" name="district_id"
                v-model="road.district_id">
          <option v-for="district in districts" :value="district.id" :key="district.id">{{ district.name }}</option>
        </select>
      </div>
      <div class="form-group mb-2">
        <label for="title">Status</label>
        <select class="form-select" aria-label="Default select example" name="status"
                v-model="road.status">
          <option value="1">ACTIVE</option>
          <option value="0">UNDER_CONSTRUCTION</option>
          <option value="-1">UNDER_REPAIR</option>
          <option value="-2">UNDEFINED</option>
        </select>
      </div>
      <div class="form-group mb-2">
        <label for="title">Name</label>
        <input
            type="text"
            class="form-control"
            id="title"
            required
            v-model="road.name"
            name="name"
        />
      </div>
      <div class="form-group mb-2">
      <label for="description">Road Establishment Date</label>
      <input
          type="date"
          class="form-control"
          id="date"
          required
          v-model="road.roadEstablishmentDate"
          name="roadEstablishmentDate"
      />
    </div>
      <div class="form-group mb-2">
        <label for="description">Description</label>
        <input
            type="text"
            class="form-control"
            id="description"
            required
            v-model="road.description"
            name="description"
        />
      </div>

      <button @click="saveRoad" class="btn btn-primary mt-3">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newProduct">Add</button>
    </div>
  </div>
</template>

<script>
import RoadService from "../services/RoadService";
import DistrictService from "../services/DistrictService";
export default {
  name: "CreateRoad",
  created() {
    this.getDistrict()
  },
  data() {
    return {
      roads: [],
      road: {
        name: "",
        district_id: null,
        roadEstablishmentDate: "",
        status: null,
        description:  ""
      },
      districts: [],
      submitted: false
    };
  },
  methods: {
    saveRoad() {
      console.log("dư lieu gui len: " + this.road.name)
      RoadService.createRoad(this.road)
          .then(response => {
            console.log("du lie tra ve: " +response.data);
            this.submitted = true;
            this.$router.push({path: '/roads'});
          })
          .catch(e => {
            console.log(e);
          });
    },
    newProduct() {
      this.submitted = false;
    },
    getDistrict() {
      DistrictService.getDistrict().then((response) => {
        this.districts = response.data;
      })
    }
  }
}
</script>

<style scoped>

</style>
