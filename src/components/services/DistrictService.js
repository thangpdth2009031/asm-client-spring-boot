import axios from 'axios'

const API_BASE_URL = 'https://asm-pdt.herokuapp.com/api/v1/districts'

class DistrictService {
    getDistrict() {
        return axios.get(API_BASE_URL);
    }
}

export default new DistrictService();
