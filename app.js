const div = document.querySelector("#app-container");

let currentIndex = 0;
let users = [];

// Fetching users from the API
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        users = data; // Store the fetched users
        displayUser(currentIndex); // Show the first user
    })
    .catch((err) => {
        console.error("Error fetching users:", err);
    });

// Display the user at the current index using div.innerHTML
function displayUser(index) {
    if (index < users.length && index >= 0) {
        const user = users[index];
        div.innerHTML = `
            <div id="user-card">
                <h1>ID: ${user.id}</h1>
                <h2>Name: ${user.name}</h2>
                <h3>Username: ${user.username}</h3>
            </div>
            <div class="button-group" style="justify-content: ${index === 0 || index === users.length - 1 ? 'center' : 'space-between'};">
              
                <button id="nxt-btn" class="nxt-btn" style="display: ${index === users.length - 1 ? 'none' : 'inline-block'};">Next</button>
            </div>
        `;

        // Re-attach event listeners after updating the innerHTML
        document.querySelector("#nxt-btn")?.addEventListener("click", () => {
            currentIndex++;
            displayUser(currentIndex);
        });

        // document.querySelector("#prev-btn")?.addEventListener("click", () => {
        //     currentIndex--;
        //     displayUser(currentIndex);
        // });
    }
}
