export async function getCurrentUserInfo() {

    const token = localStorage.getItem("jwt");

    try {
        const response = await fetch(`http://localhost:8000/auth/me`, {    // el "/me" lo creó edu para acceder al usuario
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token} `  
            }
        });  
        const user = await response.json();

        if (!response.ok) {
            throw new Error("User doesn't exist");
        }
        
        return user;
        
    } catch (error) {
        
        throw new Error(error.message)  
    }

}