const cream = document.querySelector('.good-holder1');
const pomade = document.querySelector('.good-holder2');
const cream2 = document.querySelector('.good-holder3');
const cosmetics = document.querySelector('.good-holder4');
const razor = document.querySelector('.good-holder5');
const deodorant = document.querySelector('.good-holder6');
const wipes = document.querySelector('.good-holder7');

cream.addEventListener("input", (e) => {
    const request = new XMLHttpRequest();
    request.open = ("GET", "data.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);
        console.log(data);
    });
});

pomade.addEventListener("input", (e) => {
    const request = new XMLHttpRequest();
    request.open = ("GET", "data.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);
        console.log(data);
    });
});

cream2.addEventListener("input", (e) => {
    const request = new XMLHttpRequest();
    request.open = ("GET", "data.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);
        console.log(data);
    });
});

cosmetics.addEventListener("input", (e) => {
    const request = new XMLHttpRequest();
    request.open = ("GET", "data.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);
        console.log(data);
    });
});

razor.addEventListener("input", (e) => {
    const request = new XMLHttpRequest();
    request.open = ("GET", "data.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);
        console.log(data);
    });
});

deodorant.addEventListener("input", (e) => {
    const request = new XMLHttpRequest();
    request.open = ("GET", "data.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);
        console.log(data);
    });
});

wipes.addEventListener("input", (e) => {
    const request = new XMLHttpRequest();
    request.open = ("GET", "data.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);
        console.log(data);
    });
});