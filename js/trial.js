document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.getElementById("mapIframe");
    if (!iframe) {
        console.error("Iframe not found!");
        return;
    }

    iframe.addEventListener("load", () => {
        const iframeRect = iframe.getBoundingClientRect();

        // Create an invisible overlay
        const invisibleOverlay = document.createElement("div");
        invisibleOverlay.style.position = "absolute";
        invisibleOverlay.style.top = `${iframeRect.top + 10}px`; // Adjust Y-offset
        invisibleOverlay.style.left = `${iframeRect.left + iframeRect.width - 60}px`; // Adjust X-offset
        invisibleOverlay.style.width = "50px"; // Width of the button
        invisibleOverlay.style.height = "50px"; // Height of the button
        invisibleOverlay.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Fully transparent
        invisibleOverlay.style.cursor = "pointer";
        invisibleOverlay.style.zIndex = "1000";

        // Add click functionality
        invisibleOverlay.addEventListener("click", () => {
            alert("Button clicked!");
        });

        document.body.appendChild(invisibleOverlay);
    });
});
