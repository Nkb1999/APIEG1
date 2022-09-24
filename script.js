const d = new Date();
const url = "https://jsonplaceholder.typicode.com/photos";
// const albumId = Number(prompt("Provide albumId:"));

const id = Number(prompt("Provide id to view image:"));

fetch(url)
  .then((response) => response.json())

  .then((data) => {
    //console.log(data);

    //display data of particulat albumId
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        //console.log(data[i]);
        //display thumbnailUrl of id entered
        console.log(data[i].thumbnailUrl);
        window.open(`${data[i].thumbnailUrl}`, "_blank");
        break;
      }
    }
  })
  .catch((error) => console.error(error));
