$(document).ready(function () {

    let id = navigator.geolocation.getCurrentPosition(succesCallback)

    function succesCallback(position) {
        let geoLat = position.coords.latitude
        let geoLong = position.coords.longitude

        $.get(
            'https://csunix.mohawkcollege.ca/tooltime/10244/api/api.php', {
                lat: geoLat,
                long: geoLong
            },

            function (data) {
                $('#spinner').hide(); // Hide the spinner
                let response = JSON.parse(data) // API returns json_encoded so we need to parse
                console.log(response)
                let businesses = response.businesses // response.businesss is an array of 20 businesses


                let container = document.getElementById('container')
                let loc;
                let name;
                let phone;
                // let category;


                businesses.forEach((business) => {
                    console.log(business.name)
                })

                //Loop through each business name
                businesses.forEach((business) => {
                    name = business.name
                })

                
                // businesses.forEach((business) => {
                //     category = business.categories[0].title
                //     console.log(business.categories[0].title)

                // })

                // businesses.forEach((category) => {
                //     aliases = category.alias
                //     console.log(category.aliases)
                // })


                //Loop through each business address
                businesses.forEach((business) => {
                    loc = business.location.address1
                })

                //Loop through each business address
                businesses.forEach((business) => {
                    phone = business.display_phone;
                })

                for (i = 0; i < businesses.length; i++) {
                    name = businesses[i].name;
                    phone = businesses[i].phone;

                    container.innerHTML += `<div id="img"><img src="${businesses[i].image_url}"></div>`
                    container.innerHTML += `<ul class="bullets">
                                            <li id="restoName"><h3>${name}</h3></li>
                                            <li><p>${businesses[i].categories[0].title}</p></li>
                                            <li><p>${loc}</p></li>
                                            <li><p>${phone}</p></li>
                                            </ul>`
                }
            }
        )
    }
})