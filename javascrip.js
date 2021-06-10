const headers = new Headers();
headers.append('Content-type', 'application/json');
const options1 = {
    method: 'POST',
    body: JSON.stringify({
        idBook: 190,
        firstName: "Francesco",
        lastName: "Garbo"
    }),
    headers
};
fetch(`https://fakerestapi.azurewebsites.net/api/v1/Authors`, options1).then(response => { return response.json() }).then(result => { console.log(result) });

// get 
fetch(`https://fakerestapi.azurewebsites.net/api/v1/Authors`).then(response.JSON()).then(result => console.log)
//put
const options2 = {
    method: 'PUT',
    body: JSON.stringify({
        idBook: 0,
        firstName: "string",
        lastName: "string"
    })
}
fetch(`https://fakerestapi.azurewebsites.net/api/v1/Authors/12`, options2).then(response.JSON()).then(result => console.log)
// Delete
const options3 = {
    method: 'DELETE',
    headers,
}

fetch(`https://fakerestapi.azurewebsites.net/api/v1/Authors/12o`, options3).then(response.status()

    const options4 = {
    method: "PATCH",
    body: JSON.stringify({

    })
}
PATCH(`https://fakerestapi.azurewebsites.net/api/v1/Authors/12`, options4).then(response.JSON()).then(result => console.log)

// get books
Fetch(`https://fakerestapi.azurewebsites.net/api/v1/Books`).then(response.JSON()).then(result => console.log)

// PUT books
const options5 = {
    method: 'PUT',
    body: JSON.stringify({
        "title": "string",
        "description": "string",
        "pageCount": 0,
        "excerpt": "string",
        "publishDate": "2021-06-10T14:01:20.941Z"

    })
}
Fetch(`https://fakerestapi.azurewebsites.net/api/v1/Books/32`, options5).then(response.JSON()).then(result => console.log)

// post books
const options6 = {
    method: 'POST'
            body: JSON.stringify({
        "title": "string",
        "description": "string",
        "pageCount": 0,
        "excerpt": "string",
        "publishDate": "2021-06-10T14:24:11.627Z"
    }),
    headers

};

Fetch(`https://fakerestapi.azurewebsites.net/api/v1/Books`, options6).then(response => { return response.json() }).then(result => { console.log(result) });

// Delete
const options7 = {
    method: 'Delete',
    headers,
}
Fetch(`https://fakerestapi.azurewebsites.net/api/v1/Books/22`, options7).then(response.status()

)

