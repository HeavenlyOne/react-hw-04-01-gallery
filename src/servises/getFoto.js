import axios from "axios";

const ACCESS_KEY = 'mvoVH51ITLCuhKUJt81smJ2aIvByQ8WCRBIJHbN4vWo';
const BASIC_URL = 'https://api.unsplash.com/';

export default function getFoto(searchValue, page) {
    return axios.get(`${BASIC_URL}/search/photos`, {
      params: {
        query: searchValue,
        client_id: ACCESS_KEY,
        per_page: 15,
        page: page,
        orientation: 'landscape',
      },
    });
}