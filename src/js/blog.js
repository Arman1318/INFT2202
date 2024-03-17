document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.querySelector('.blog-column');
    fetchAndDisplayPosts();
    function fetchAndDisplayPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                // Create blog cards for each post
                posts.forEach(post => {
                    const postCard = createPostCard(post);
                    blogContainer.appendChild(postCard);
                });
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }
  
    function createPostCard(post) {
      const card = document.createElement('div');
      card.classList.add('card', 'mb-3');
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
  
      const title = document.createElement('h2');
      title.classList.add('card-title');
      title.textContent = post.title;
  
      const body = document.createElement('p');
      body.classList.add('card-text');
      body.textContent = post.body;
  
      cardBody.appendChild(title);
      cardBody.appendChild(body);
  
      card.appendChild(cardBody);
  
      return card;
    }
  });


  function fetchAndDisplayPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postCard = createPostCard(post);
                blogContainer.appendChild(postCard);
            });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
}
  