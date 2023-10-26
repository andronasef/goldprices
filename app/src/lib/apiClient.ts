import axios from 'axios';

const goldApiClient = axios.create({
	baseURL: 'https://andronasef-nextgoldprice-api.hf.space/api/'
});

export default goldApiClient;
