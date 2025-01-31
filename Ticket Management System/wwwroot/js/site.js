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

////Update ticket status
document.querySelectorAll('#statusList li').forEach(item => {
    item.addEventListener('click', function () {
        const iconElement = this.querySelector('i');
        const iconClass = iconElement.className;

        const buttonIcon = document.querySelector('#StatusDropdown i');
        buttonIcon.className = iconClass;
    });
});

//Collapse description overflow
const collapseElement = document.getElementById('collapseText');
const icon = document.querySelector('.expand-btn i');

collapseElement.addEventListener('show.bs.collapse', function () {
    icon.classList.remove('fa-up-right-and-down-left-from-center');
    icon.classList.add('fa-down-left-and-up-right-to-center');
});

collapseElement.addEventListener('hide.bs.collapse', function () {
    icon.classList.remove('fa-down-left-and-up-right-to-center');
    icon.classList.add('fa-up-right-and-down-left-from-center');
});

//Update selected options in dropdown just like <select>
const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(item => {
    item.addEventListener('click', function () {
        const value = this.getAttribute("data-value");
        const iconHTML = this.querySelector('img').outerHTML;
        selectedOption.innerHTML = `${iconHTML} ${value}`;
    });
});

//Update assignee from selected option
function updateAssignee(element) {
    const selectedText = element.textContent;
    document.querySelector('.selected-text').textContent = selectedText;
}

//Update Severity and priority option
document.querySelectorAll('.severity-option, .priority-option').forEach(item => {
    item.addEventListener('click', (e) => {
        const type = e.target.classList.contains('severity-option') ? 'severity' : 'priority';
        const value = e.target.dataset[type];
        const dropdownButton = e.target.closest(`.${type}-dropdown`).querySelector(`.${type}-badge`);

        dropdownButton.classList.remove(
            `${type}-minor`, `${type}-moderate`, `${type}-major`, `${type}-critical`,
            `${type}-low`, `${type}-medium`, `${type}-high`
        );

        dropdownButton.classList.add(`${type}-${value}`);
        dropdownButton.textContent = e.target.textContent;
    });
});
