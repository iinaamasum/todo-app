document.getElementById("add-work").addEventListener("click", function () {
  const inputVal = document.getElementById("input").value;
  const createTr = document.createElement("tr");
  createTr.innerHTML = `
  <td class="px-4 py-2 text-center">${inputVal}</td>
  <td class="completed" class="px-4 py-2 text-center">Complete</td>
  <td class="px-4 py-2 text-center">
    <button class="complete-work bg-green-500 text-white rounded-lg px-2 py-1">Complete</button>
    <button class="delete-work bg-red-600 text-white rounded-lg px-2 py-1">Delete</button>
  </td>
  `;
  document.getElementById("tbody").appendChild(createTr);
  document.getElementById("input").value = "";

  const deleteBtn = document.getElementsByClassName("delete-work");
  const completeBtn = document.getElementsByClassName("complete-work");

  for (const btn of deleteBtn) {
    btn.addEventListener("click", function (e) {
      e.target.parentNode.parentNode.style.display = "none";
    });
  }

  for (const btn of completeBtn) {
    btn.addEventListener("click", function (e) {
      e.target.parentNode.parentNode.style.color = "green";
      e.target.parentNode.parentNode.style.textDecoration = "line-through";
      btn.innerText = "Uncomplete";
      btn.addEventListener("click", function (e) {
        e.target.parentNode.parentNode.style.color = "purple";
        document.getElementById("completed").innerText = "In Progress";
        btn.innerText = "Complete";
      });
    });
  }
});
