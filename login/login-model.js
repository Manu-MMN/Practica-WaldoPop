export async function loginUser(email, password) {
    const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        body: JSON.stringify({
            username: email,
            password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();

    if (!response.ok) {
        // Si el servidor devuelve un error, lo manejamos apropiadamente
        throw new Error(data.message || "Error en el proceso de login");
    }

    return data.accessToken;
}