import axios from 'axios'

const API_BASE_URL = 'https://asm-pdt.herokuapp.com/api/v1/roads'

class DistrictService {
    // getAllRoad() {
    //     return axios.get(API_BASE_URL);
    // }
    getAllRoad(districtId, name) {
        return axios.get(`${API_BASE_URL}?name=${name, require(false)}&district_id=${districtId, require(false)}`);
    }
    createRoad(data) {
        return axios.post(API_BASE_URL,data, {headers: {'Content-Type': 'application/json'}});
    }
}

export default new DistrictService();
