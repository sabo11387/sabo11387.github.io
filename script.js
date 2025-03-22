const scriptURL = "YOUR_DEPLOYED_SCRIPT_URL"; 

function saveData() {
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let date = document.getElementById("date").value;
    let timeStamp = new Date().toLocaleString();

    if (name && number && date) {
        let data = { name, number, date, timeStamp };

        fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        })
        .then(response => response.text())
        .then(() => {
            alert("Entry saved!");
            document.getElementById("dataForm").reset();
            loadData();
        })
        .catch(error => console.error("Error:", error));
    } else {
        alert("Please fill in all fields.");
    }
}

function loadData() {
    fetch(scriptURL)
    .then(response => response.json())
    .then(data => {
        let ledger = document.getElementById("ledgerEntries");
        ledger.innerHTML = "";
        let lastEntries = data.slice(-10).reverse(); // Get last 10 entries
        
        lastEntries.forEach(entry => {
            let div = document.createElement("div");
            div.className = "ledger-entry";
            div.innerHTML = `
                <div class="entry-title">${entry[0]}</div>
                <div class="entry-details">Number: ${entry[1]}</div>
                <div class="entry-details">Date: ${entry[2]}</div>
                <div class="entry-details">Saved on: ${entry[3]}</div>
            `;
            ledger.appendChild(div);
        });
    });
}

document.addEventListener("DOMContentLoaded", loadData);
