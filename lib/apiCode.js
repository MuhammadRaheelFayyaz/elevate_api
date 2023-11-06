const node = (a) => {
  console.log("test", a);
  return `
    const axios = require('axios');
    const options = {
    method: 'GET',
    url: 'https://odds.p.rapidapi.com/v4/sports',
    params: {all: 'true'},
    headers: {
        'X-RapidAPI-Key': '140cc54476msh6e5a5a628deda36p15f5ebjsn78cc5faf6eb8',
        'X-RapidAPI-Host': 'odds.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }`;
};

export default {
  "Node.js": node,
};
