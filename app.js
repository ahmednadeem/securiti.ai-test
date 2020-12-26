var axios = require('axios');
// function getCounts(s, p) {
//     let url = "https://jsonmock.hackerrank.com/api/countries/search?name=" + s;
//     axios.get(url)
//         .then(response => {
//             let data = response.data;
//             let countryCount = 0;
//             if (data.total_pages > 1) {
//                 console.log('i ran greater')
//                 for (let i = 1; i <= data.total_pages; i++) {
//                     let urll = "https://jsonmock.hackerrank.com/api/countries/search?name=" + s;
//                     urll = urll + "&page=" + i;
//                     const resp = await axios.get(urll)
//                         .then(response => {
//                             let newData = response.data;
//                             //console.log("=============================")
//                             //console.log(newData.data)
//                             newData.data.map(element => {
//                                 if (element["population"] > p) {
//                                     countryCount++;
//                                 }
//                             })
//                         });
//                 }
//             } else {
//                 console.log('i ran less')
//                 data.data.map(element => {
//                     if (element["population"] > p) {
//                         countryCount++;
//                     }
//                 })
//             }
//             console.log(countryCount);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

async function getCounts(s, p) {
    let url = "https://jsonmock.hackerrank.com/api/countries/search?name=" + s;
    const firstresp = await axios.get(url);
    let countryCount = 0;
    if (firstresp.data.total_pages > 1) {
        console.log('i ran greater')
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
        console.log('i ran less')
        firstresp.data.data.map(element => {
            if (element["population"] > p) {
                countryCount++;
            }
        })
    }
    console.log(countryCount);
}

async function getStream(url) {
    console.log(url)
    axios.get(url)
        .then(response => {
            console.log('res')
            return response;
        })
        .catch(error => {
            console.log(error);
        });
}

getCounts('ni', 10000000);