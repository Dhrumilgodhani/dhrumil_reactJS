fetch('http://localhost:3000/comments')
.then(Response => Response.json())
.then(data => console.log(data))

fetch('http://localhost:3000/posts')
.then(Response => Response.json())
.then(data => console.log(data))

fetch('http://localhost:3000/profile')
.then(Response => Response.json())
.then(data => console.log(data))