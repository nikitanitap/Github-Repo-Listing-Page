const usernameInput = document.getElementById('username');
const searchButton = document.getElementById('search');
const repoList = document.getElementById('repo-list');

searchButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json())
            .then(data => {
                repoList.innerHTML = '';
                data.forEach(repo => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `<a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>`;
                    repoList.appendChild(listItem);
                });
            })
            .catch(error => {
                repoList.innerHTML = '<li>Error: Invalid GitHub username</li>';
            });
    } else {
        repoList.innerHTML = '<li>Please enter a GitHub username</li>';
    }
});
