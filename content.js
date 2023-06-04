// const contentData = [
//   {
//     id: 1,
//     resep: "Tobit MacCambridge",
//     details:
//       "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
//     image: "https://robohash.org/aliaslaudantiumnisi.png?size=50x50&set=set1",
//   },
//   {
//     id: 2,
//     resep: "Harmonia Cuthbertson",
//     details:
//       "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
//     image: "https://robohash.org/temporaquioptio.png?size=50x50&set=set1",
//   },
//   {
//     id: 3,
//     resep: "Jerrold Turone",
//     details:
//       "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
//     image: "https://robohash.org/temporehicab.png?size=50x50&set=set1",
//   },
//   {
//     id: 4,
//     resep: "Phil Aymes",
//     details:
//       "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
//     image: "https://robohash.org/possimusveniamquod.png?size=50x50&set=set1",
//   },
//   {
//     id: 5,
//     resep: "Tildie Vassie",
//     details:
//       "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
//     image:
//       "https://robohash.org/animidelectusoccaecati.png?size=50x50&set=set1",
//   },
//   {
//     id: 6,
//     resep: "Lars Gullberg",
//     details:
//       "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
//     image: "https://robohash.org/odiomollitiaut.png?size=50x50&set=set1",
//   },
//   {
//     id: 7,
//     resep: "Tracy Borne",
//     details:
//       "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
//     image: "https://robohash.org/minusautet.png?size=50x50&set=set1",
//   },
//   {
//     id: 8,
//     resep: "Consolata Prinnett",
//     details:
//       "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
//     image: "https://robohash.org/utlaboriosamut.png?size=50x50&set=set1",
//   },
//   {
//     id: 9,
//     resep: "Kylen Mongan",
//     details:
//       "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
//     image: "https://robohash.org/cumquesimiliqueporro.png?size=50x50&set=set1",
//   },
//   {
//     id: 10,
//     resep: "Archibold Aimson",
//     details:
//       "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
//     image: "Foto/Search.png",
//   },
// ];

async function getData() {
  const data = await fetch("http://localhost:5500/data.json").then((res) =>
    res.json()
  );

  return data;
}

const run = async () => {
  const contentData = await getData();
  console.log(contentData);
  console.log("test B");

  const table = document.querySelector("section#content");

  // console.log(table);

  for (let i = 0; i < contentData.length; i++) {
    table.innerHTML += `
  <div class="card">
    <img src="${contentData[i].image}" />
    <span style="padding: 5px;">${contentData[i].resep}</span>
  </div>
  `;
  }

};

run();
