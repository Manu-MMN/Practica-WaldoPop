

export async function getItems() {
    try {
        const response = await fetch("http://localhost:8000/api/items?_expand=user");
        
        const items = await response.json()

        if(!response.ok) {

            throw new Error("Resource doesn't exit!")

        }
        return items
        
    } catch (error) {
        throw new Error(error.message)
        
    }
}


