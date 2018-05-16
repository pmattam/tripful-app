export let addTrip = (trip, jwt) =>
    //fetch("http://localhost:3000/trips", {
    fetch("https://tripful.herokuapp.com/trips", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(trip),
        headers: new Headers({
            "Authorization": `Bearer ${jwt}`,
            "Content-Type": "application/json"
        })
    })

export let getAllTrips = (jwt) =>
    fetch("https://tripful.herokuapp.com/trips", {
        //fetch("http://localhost:3000/trips", {
        method: "GET",
        mode: "cors",
        headers: new Headers({
            "Authorization": `Bearer ${jwt}`
        })
    })

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