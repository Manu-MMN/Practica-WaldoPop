export function buildNotification(message, type) {
    return `<div class= "notification ${type}>
    <h2>${message}</>
    <div/>`
}