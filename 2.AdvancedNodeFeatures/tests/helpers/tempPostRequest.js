// Temporary file to creat ea new blog post

//this is for sure include in the browser chromium
() => {
  return fetch('/api/blogs', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'My Title',
      content: 'My Content',
    }),
  });
};
() => {
  return fetch('/api/blogs', {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
