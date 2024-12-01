export async function createItem(message) {
    const token = localStorage.getItem("jwt");

    const response = await fetch("http://localhost:8000/api/Items", {
        method: "POST",
        body: JSON.stringify({
            message
        }),
        headers: {
        "content-type": "aplication/json",
        "Authorization": `Bearer ${token} `
        }
    })

    if (!response.ok) {
        throw new Error("Something went wrong creating items!")
    }
}