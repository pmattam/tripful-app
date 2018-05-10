export let loginUser = (userInfo) =>
    fetch("http://localhost:3000/login", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(userInfo),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    })

// export let login "192.168.2.4/login"

// export let loginUser = (userInfo) =>
//     fetch("http://localhost:3000/login", {
//         method: "POST",
//         mode: "cors",
//         body: JSON.stringify(userInfo),
//         headers: new Headers({
//             "Content-Type": "application/json"
//         })
//     })