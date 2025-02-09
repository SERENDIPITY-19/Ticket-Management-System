document.addEventListener('DOMContentLoaded', () => {
    // Navigation collapse
    const toggleBtn = document.querySelector('.toggle-btn');
    const navigation = document.querySelector('.navigation');

    if (toggleBtn && navigation) {
        toggleBtn.addEventListener('click', () => {
            navigation.classList.toggle('collapsed');
            toggleBtn.classList.toggle('collapsed');
        });
    }

    // Ticket Actions
    const ticketActions = document.getElementById("ticketActions");
    const checkboxes = document.querySelectorAll(".ticket-checkbox");
    const selectAll = document.getElementById("selectAll");
    const cancelButton = document.querySelector(".ticket-cancel-btn");

    if (ticketActions) {
        ticketActions.style.display = "none";

        function updateTicketActions() {
            const checkedBoxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
            ticketActions.style.display = checkedBoxes.length > 0 ? "flex" : "none";
        }

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change", updateTicketActions);
        });

        if (selectAll) {
            selectAll.addEventListener("change", () => {
                checkboxes.forEach(checkbox => { checkbox.checked = selectAll.checked });
                updateTicketActions();
            });
        }

        if (cancelButton) {
            cancelButton.addEventListener('click', () => {
                checkboxes.forEach(checkbox => { checkbox.checked = false });
                ticketActions.style.display = "none";
                if (selectAll) selectAll.checked = false;
            });
        }
    }

    // Update ticket status
    document.querySelectorAll('#statusList li').forEach(item => {
        item.addEventListener('click', function () {
            const iconElement = this.querySelector('i');
            if (iconElement) {
                const iconClass = iconElement.className;
                const buttonIcon = document.querySelector('#StatusDropdown i');
                if (buttonIcon) buttonIcon.className = iconClass;
            }
        });
    });

    // Users Table Search
    const userSearch = document.querySelector(".search-users");
    if (userSearch) {
        userSearch.addEventListener('keyup', function () {
            const searchTerm = this.value.toLowerCase();
            const rows = document.querySelectorAll('.users-table-body tr');

            rows.forEach(row => {
                const name = row.querySelector('td:nth-child(2) a')?.textContent.toLowerCase() || "";
                const email = row.querySelector('td:nth-child(3)')?.textContent.toLowerCase() || "";
                const phone = row.querySelector('td:nth-child(4)')?.textContent.toLowerCase() || "";
                const source = row.querySelector('td:nth-child(5)')?.textContent.toLowerCase() || "";
                const userType = row.querySelector('td:nth-child(6)')?.textContent.toLowerCase() || "";

                if (name.includes(searchTerm) || email.includes(searchTerm) || phone.includes(searchTerm) ||
                    source.includes(searchTerm) || userType.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }

    // Update selected options in requester dropdown
    const dropdownItems = document.querySelectorAll('.requester-dropdown-item');
    const selectedOption = document.getElementById("selectedOption");

    dropdownItems.forEach(item => {
        item.addEventListener('click', function () {
            const value = this.getAttribute("data-value");
            const iconImg = this.querySelector('img');
            if (iconImg && selectedOption) {
                selectedOption.innerHTML = `${iconImg.outerHTML} ${value}`;
            }
        });
    });

    // Select All Users Checkbox
    const selectAllCheckbox = document.getElementById("selectAllUsers");
    const userCheckboxes = document.querySelectorAll(".user-checkbox");

    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener("change", function () {
            userCheckboxes.forEach(checkbox => {
                checkbox.checked = selectAllCheckbox.checked;
            });
        });

        userCheckboxes.forEach(checkbox => {
            checkbox.addEventListener("change", function () {
                const allChecked = Array.from(userCheckboxes).every(cb => cb.checked);
                const someChecked = Array.from(userCheckboxes).some(cb => cb.checked);

                selectAllCheckbox.checked = allChecked;
                selectAllCheckbox.indeterminate = someChecked && !allChecked;
            });
        });
    }

    // Collapse description overflow
    const collapseElement = document.getElementById('collapseText');
    const icon = document.querySelector('.expand-btn i');

    if (collapseElement && icon) {
        collapseElement.addEventListener('show.bs.collapse', function () {
            icon.classList.remove('fa-up-right-and-down-left-from-center');
            icon.classList.add('fa-down-left-and-up-right-to-center');
        });

        collapseElement.addEventListener('hide.bs.collapse', function () {
            icon.classList.remove('fa-down-left-and-up-right-to-center');
            icon.classList.add('fa-up-right-and-down-left-from-center');
        });
    }

    // Update assignee function
    const assigneeDropdown = document.getElementById('assigneeDropdown');
    if (assigneeDropdown) {
        const dropdownMenu = assigneeDropdown.nextElementSibling;

        dropdownMenu.addEventListener('click', (event) => {
            const dropdownItem = event.target.closest('.dropdown-item');
            if (dropdownItem && !dropdownItem.hasAttribute('data-bs-toggle')) {
                const selectedText = dropdownItem.textContent.trim();
                const selectedTextElement = document.querySelector('.selected-text');
                if (selectedTextElement) {
                    selectedTextElement.textContent = selectedText;
                }
            }
        });
    }

    // Severity and priority options
    document.querySelectorAll('.severity-option, .priority-option').forEach(item => {
        item.addEventListener('click', (e) => {
            const type = e.target.classList.contains('severity-option') ? 'severity' : 'priority';
            const value = e.target.dataset[type];
            const dropdownButton = e.target.closest(`.${type}-dropdown`)?.querySelector(`.${type}-badge`);

            if (dropdownButton) {
                dropdownButton.classList.remove(
                    `${type}-minor`, `${type}-moderate`, `${type}-major`, `${type}-critical`,
                    `${type}-low`, `${type}-medium`, `${type}-high`
                );
                dropdownButton.classList.add(`${type}-${value}`);
                dropdownButton.textContent = e.target.textContent;
            }
        });
    });

    // Recipient Tag
    const toggleLinks = document.querySelectorAll(".toggle-recipient");
    const recipientTag = document.querySelector(".recipient-tag");

    if (recipientTag) {
        toggleLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                recipientTag.classList.toggle("d-none");
            });
        });
    }

    // Email reply and add note cards
    const emailReplyCard = document.querySelector('.email-reply');
    const addNoteCard = document.querySelector('.add-note');

    if (emailReplyCard && addNoteCard) {
        addNoteCard.style.display = 'none';

        const dropdownMenus = document.querySelectorAll('.reply-note-dropdown-menu');
        dropdownMenus.forEach(menu => {
            menu.addEventListener('click', (event) => {
                const clickedButton = event.target.closest('.reply-note-dropdown-item');
                if (!clickedButton) return;

                const isNoteOption = clickedButton.querySelector('.reply-note-title')?.textContent.trim() === 'Note';
                emailReplyCard.style.display = isNoteOption ? 'none' : 'block';
                addNoteCard.style.display = isNoteOption ? 'block' : 'none';
            });
        });
    }
});