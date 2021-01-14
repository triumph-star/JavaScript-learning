getData();

async function getData() {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const root = document.querySelector("#root");
  const ul = document.createElement("ul");

  posts.forEach(post => {
    const li = document.createElement("li");
    const anchor = document.createElement("a");

    anchor.appendChild(document.createTextNode(post.title));
    anchor.setAttribute(
      "href",
      `http://jsonplaceholder.typicode.com/posts/${post.id}`
    );

    li.appendChild(anchor);

    ul.appendChild(li);
  });

  root.appendChild(ul);
}

