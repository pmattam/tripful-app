export let loginUser = (userInfo) =>
    fetch("http://localhost:3000/login", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(userInfo),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    })

export let newUserSignUp = (userInfo) =>
    fetch("http://localhost:3000/register", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(userInfo),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    })