fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// both do the same thing

try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
} catch (err) {
    console.log(err);
}    