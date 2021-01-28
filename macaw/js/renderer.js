
const myNotification = new Notification("Macaw", {
    body: "Macaw has been fired up! (From Renderer Process)"
})

myNotification.onclick = () => {
    console.log("Notification Clicked")
}