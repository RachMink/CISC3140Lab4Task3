setTimeout(function () {
    const myHeader = document.querySelector('h1');
    myHeader.textContent = 'Names';
}, 500);

const nameFetchResponsePromise = fetch("http://acc6.its.brooklyn.cuny.edu/~rminkowi/name.php")

nameFetchResponsePromise.then(function (response) {
    console.log(response);
    return response.text();
}).then(function (response2) {

    console.log(response2)

    const parsedData = JSON.parse(response2);

    console.log(parsedData);

    var myName = document.querySelector('p');
    var i = 0;

    if (parsedData.length != 0) {
        myName.textContent = parsedData[0].name;
        i++;
    }
    while (i < parsedData.length) {
        myName.textContent = myName.textContent + ' ' + parsedData[i].name;
        console.log(parsedData[i].name);
        i++;
    }
});
