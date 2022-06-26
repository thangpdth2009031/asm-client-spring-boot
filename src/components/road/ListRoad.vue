<template>
  <div class="container">
    <form class="row" v-on:submit.prevent="getFilteredUser">
      <div class="col-md-3">
        <div class="form-group">
          <label>Enter name</label>
          <input type="text" class="form-control mb-3" placeholder="Enter order id" v-model="name"/>
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <label>District</label>
          <select class="form-select" aria-label="Default select example" name="district_id"
                  v-model="districtId">
            <option v-for="district in districts" :value="district.id" :key="district.id">{{ district.name }}</option>
          </select>
        </div>
      </div>
    </form>
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">District</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in data" :key="index">
        <th>{{ index + 1 }}</th>
        <td>{{ item.name }}</td>
        <td>{{ item.district_id }}</td>
        <td>{{ item.status }}</td>
        <td><a href="#">Edit</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DistrictService from "../services/DistrictService";

export default {
  name: "ListRoad",

  created() {
    this.getFilteredUser(),
        this.getDistrict()
  },
  data() {
    return {
      data: [],
      name: "",
      districtId: "",
      districts: [],
    }
  },

  methods: {
    async getFilteredUser() {
      console.log("du lieu gui len: " + this.name, this.districtId)
      const filteredUser = await fetch(`https://asm-pdt.herokuapp.com/api/v1/roads?district_id=${this.districtId}&name=${this.name}`);
      this.data = await filteredUser.json();
    },
    getDistrict() {
      DistrictService.getDistrict().then((response) => {
        this.districts = response.data;
      })
    }
  },
}
</script>

<style scoped>

</style>
