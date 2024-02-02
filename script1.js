// script.js
const services = [
    { name: "Heart", status: "up" },
    { name: "BP", status: "down" },
    { name: "Vitamin", status: "down" },
    { name: "Calcium", status: "up" },
    // Add more services as needed
];

const servicesList = document.getElementById("servicesList");
const selectService = document.getElementById("selectService");
const selectedServiceStatus = document.getElementById("selectedServiceStatus");
const searchInput = document.getElementById("searchInput");
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");
const notificationElement = document.getElementById("notification");
const upCountElement = document.getElementById("upCount");
const downCountElement = document.getElementById("downCount");

// Populate service status and options
services.forEach(service => {
    const serviceWidget = document.createElement("div");
    serviceWidget.innerHTML = `<span class="${service.status}">${service.name}: ${service.status}</span>`;
    servicesList.appendChild(serviceWidget);

    const option = document.createElement("option");
    option.value = service.name;
    option.textContent = service.name;
    selectService.appendChild(option);
});

// Monitor selected service
function monitorSelectedService() {
    const selectedServiceName = selectService.value;
    const selectedService = services.find(service => service.name === selectedServiceName);

    if (selectedService) {
        const statusMessage = document.createElement("p");
        statusMessage.textContent = `Status of ${selectedService.name}: ${selectedService.status}`;
        selectedServiceStatus.innerHTML = "";
        selectedServiceStatus.appendChild(statusMessage);
    } else {
        selectedServiceStatus.innerHTML = "";
    }
}

// Update service counts
function updateServiceCounts() {
    const upCount = services.filter(service => service.status === "up").length;
    const downCount = services.filter(service => service.status === "down").length;

    upCountElement.textContent = `Services Up: ${upCount}`;
    downCountElement.textContent = `Services Down: ${downCount}`;
}

// Search functionality
function searchServices() {
    const searchText = searchInput.value.toLowerCase();
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;

    // Implement search logic based on the criteria
    // ...

    // Display search results or update the dashboard accordingly
    // ...

    // Update service counts
    updateServiceCounts();

    // Show notification
    showNotification("Search results updated.");
}

// Notification functions
function showNotification(message) {
    notificationElement.textContent = message;

    // Web Notification
    if (Notification.permission === "granted") {
        new Notification(message);
    }

    // Email Notification (simulated, replace with actual implementation)
    sendEmailNotification(message);
}

function sendEmailNotification(message) {
    // Simulated email sending using console.log
    console.log(`Email sent: ${message}`);
}

// Update service counts on page load
updateServiceCounts();

// Request permission for Web Notifications
Notification.requestPermission();

// Update the searchServices function in your script.js file

function searchServices() {
    const searchText = searchInput.value.toLowerCase();
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;

    // Validate that both startDate and endDate are selected
    if (!startDate || !endDate) {
        showNotification("Please select both start and end dates for the search.");
        return;
    }

    // Implement search logic based on the criteria
    // ...

    // Display search results or update the dashboard accordingly
    // ...

    // Update service counts
    updateServiceCounts();

    // Show notification
    showNotification("Search results updated.");
}

// Update the searchServices function in your script.js file

function searchServices() {
    const searchText = searchInput.value.toLowerCase();
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;

    // Validate that a service name is entered
    if (!searchText) {
        showNotification("Please enter the service name for the search.");
        return;
    }

    // Validate that both startDate and endDate are selected
    if (!startDate || !endDate) {
        showNotification("Please select both start and end dates for the search.");
        return;
    }

    // Implement search logic based on the criteria
    // ...

    // Display search results or update the dashboard accordingly
    // ...

    // Update service counts
    updateServiceCounts();

    // Show notification
    showNotification("Search results updated.");
}
