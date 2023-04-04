fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const img = document.createElement('img')
      img.src = item.url
      document.body.appendChild(img)
    })
  })
  .catch(error => console.error(error))

