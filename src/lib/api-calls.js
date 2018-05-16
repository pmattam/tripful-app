export let loginUser = (userInfo) =>
    //fetch("http://localhost:3000/login", {
    fetch("https://tripful.herokuapp.com/login", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(userInfo),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    })

export let newUserSignUp = (userInfo) =>
    //fetch("http://localhost:3000/register", {
    fetch("https://tripful.herokuapp.com/register", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(userInfo),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    })