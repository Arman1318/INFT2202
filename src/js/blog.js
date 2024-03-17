document.addEventListener('DOMContentLoaded', initializeApp);


function fetchData(container) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postCard = makeCard(post);
                container.appendChild(postCard);
            });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
}