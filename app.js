var axios = require('axios');

async function getCounts(s, p) {
    let url = "https://jsonmock.hackerrank.com/api/countries/search?name=" + s;
    const firstresp = await axios.get(url);
    let countryCount = 0;
    if (firstresp.data.total_pages > 1) {
        for (let i = 1; i <= firstresp.data.total_pages; i++) {
            let urll = "https://jsonmock.hackerrank.com/api/countries/search?name=" + s;
            urll = urll + "&page=" + i;
            const resp = await axios.get(urll);
            resp.data.data.map(element => {
                if (element["population"] > p) {
                    countryCount++;
                }
            })
        }
    } else {
        firstresp.data.data.map(element => {
            if (element["population"] > p) {
                countryCount++;
            }
        })
    }
    console.log(countryCount);
}

getCounts('ni', 10000000);