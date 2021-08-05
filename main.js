//this setTimeout function calls an asynchronous function that replaces the header in the DOM once 500 miliseconds passes
setTimeout(function () {
    const myHeader = document.querySelector('h1');
    myHeader.textContent = 'Names';
}, 500);

//fetch the data from the previously set up api server
const nameFetchResponsePromise = fetch("http://acc6.its.brooklyn.cuny.edu/~rminkowi/name.php")

//if we follow along in the console we can see the switch from Promise to response and 
//in the response we can the switch from JSON to webpage understood
nameFetchResponsePromise.then(function (response) {
    console.log(response);
    return response.text(); //returns the response from the fetch as a JSON text
}).then(function (response2) { //use what was returned from the first .then() as the parameter for the function that 
                                //is called in the second .then()
    console.log(response2)
    const parsedData = JSON.parse(response2); //parse the JSON response into an array
    console.log(parsedData);
    var myName = document.querySelector('p'); //replace whatever is in <p> tag in HTML with myName
    var i = 0;
    if (parsedData.length != 0) {
        myName.textContent = parsedData[0].name; //places the first feild of data on the webpage
        i++;
    }
    while (i < parsedData.length) {
        myName.textContent = myName.textContent + ' ' + parsedData[i].name; //adds the remaining feilds into webpage
        console.log(parsedData[i].name);
        i++;
    }
});
