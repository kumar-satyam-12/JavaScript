// now we'll see how we use this in actually calling an API

fetch("https://api.github.com/users/hiteshchoudhary")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

    

/*
In traditional XMLHttpRequest we use JSON.parse(this.responsetext) here we are converting the response we got from the server in JSON string format
to Javascript object so as to run methods on it

Whereas in this modern method to call API:
fetch sends an HTTP request to Github and fetch returns a Promise
When the github successfully returns, the Promise is resolved into Response Object
The first .then receives this Response Object
there .then((response)=> response.json()) reads the response body and converts the Json string to JavaScript object.
But it doesn't immediately return the object, it returns another promise because response body has many data and has to read the data, decode and parse the Json
So Javascript returns another Promise

Now the second .then waits for the promise and once the promise is resolved successfully, it gets the data and prints
.then((data)=> console.log(data))


And if anything like response.json or fetch() fails the catch runs, and what message has to be displayed is decided by the browser
Because here we aren't generating the Promise, its the browser which is generating 



*/
