<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in data" :key="index">
        <th>{{index+1}}</th>
        <td>{{item.name}}</td>
        <td><a href="#">Edit</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DistrictService from "../services/DistrictService";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ListDistrict",
  created(){
    this.getDistrict()
  },
  data() {
    return {
      data:[]
    }
  },

  methods: {
    getDistrict(){
      console.log("mo dau")
      DistrictService.getDistrict().then((response)=>{
        console.log("dulieu: " )
        console.log(response.data)
        this.data=response.data;
      })
    }
  },
}
</script>
