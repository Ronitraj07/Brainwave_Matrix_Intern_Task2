async function checkPassword() {
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://127.0.0.1:5000/check-password/", { 
            method: "POST",  
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ password: password }),  // Send JSON data
        });

        if (!response.ok) {
            throw new Error(`Server responded with an error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response:", data); // Debugging: See what the backend returns
        document.getElementById("result").innerText = `Strength: ${data.strength}`;
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to fetch. Check backend status and CORS policy.");
    }
}
