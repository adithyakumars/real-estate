import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '93fcd5c71fmsh3678b87ca6dee06p11f147jsnf9efe9752de3',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}