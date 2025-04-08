const generateBtn = document.getElementById('generate-btn');
const userDataDiv = document.getElementById('user-data');

generateBtn.addEventListener('click', async () => {
    const response = await fetch('/generate-user-data');
    const userData = await response.json();
    userDataDiv.innerHTML = `
        <p>Name: ${userData.name}</p>
        <p>Email: ${userData.email}</p>
        <p>Password: ${userData.password}</p>
    `;
});
