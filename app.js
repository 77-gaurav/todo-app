const input = document.getElementById("input");
const taskadd = document.getElementById("inputbtn");
const list = document.getElementById("inputlist");
const msgBox = document.getElementById('msg-box');

// 🔹 Only ONCE add event listener for delete
list.addEventListener('click', function (e) {
    if (e.target.closest('.delete-btn')) {
        const li = e.target.closest('li');
        li.remove();
    }
});

taskadd.addEventListener('click', function (e) {
    e.preventDefault();

    const task = input.value.trim();
    if (task === '') return;

    const li = document.createElement('li');
    li.classList.add('task-list');
    li.innerHTML = `
        <span>${task}</span>
        <button class='delete-btn'><i class="fa fa-trash"></i></button>
    `;

    list.appendChild(li);
    input.value = '';

    msgBox.textContent = "✅ Task added successfully!";
    msgBox.style.color = "green";

    setTimeout(() => {
        msgBox.textContent = "";
    }, 2000);
});
