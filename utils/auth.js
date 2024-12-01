export function isUserLogeddIn() {
    const token = localStorage.getItem("jwt");

    return !!token
}