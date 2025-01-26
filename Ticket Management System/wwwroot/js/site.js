//Navigation collapse
const toggleBtn = document.querySelector('.toggle-btn');
const navigation = document.querySelector('.navigation');

toggleBtn.addEventListener('click', () => {
    navigation.classList.toggle('collapsed');
    toggleBtn.classList.toggle('collapsed');
});


//Ticket Actions
document.addEventListener('DOMContentLoaded', () => {
    const ticketActions = document.getElementById("ticketActions");
    const checkboxes = document.querySelectorAll(".ticket-checkbox");
    const selectAll = document.getElementById("selectAll");
    const cancelButton = document.querySelector(".ticket-cancel-btn");

    ticketActions.style.display = "none";

    function updateTicketActions() {
        const checkedBoxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
        ticketActions.style.display = checkedBoxes.length > 0 ? "flex" : "none";
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateTicketActions);
    });

    selectAll.addEventListener("change", () => {
        checkboxes.forEach(checkbox => { checkbox.checked = selectAll.checked });
        updateTicketActions();
    });

    cancelButton.addEventListener('click', () => {
        checkboxes.forEach(checkbox => { checkbox.checked = false });
        ticketActions.style.display = "none";
        selectAll.checked = false;
    });
});