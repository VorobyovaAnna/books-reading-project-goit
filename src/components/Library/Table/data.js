export const tableData = [
  {
    title:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto labore natus magnam quam tenetur, impedit molestias ea nostrum at ratione adipisci similique rem, delectus atque pariatur. Quibusdam perferendis voluptatum minus tenetur dignissimos ea. Consequatur, enim natus vero delectus qui, vel dolores earum, aliquam magni nobis fugit necessitatibus tenetur veritatis sit!',
    author: 'Lorem, ipsum.',
    publication: randomInteger(1, 2022),
    pages: Math.ceil(Math.random() * 10000),
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    author: 'Lorem, ipsum.',
    publication: randomInteger(1, 2022),
    pages: Math.ceil(Math.random() * 10000),
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    author: 'Lorem, ipsum.',
    publication: randomInteger(1, 2022),
    pages: Math.ceil(Math.random() * 10000),
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    author: 'Lorem, ipsum.',
    publication: randomInteger(1, 2022),
    pages: Math.ceil(Math.random() * 10000),
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    author: 'Lorem, ipsum.',
    publication: randomInteger(1, 2022),
    pages: Math.ceil(Math.random() * 10000),
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    author: 'Lorem, ipsum.',
    publication: randomInteger(1, 2022),
    pages: Math.ceil(Math.random() * 10000),
  },
];

export const tableData2 = [
  {
    title:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto labore natus magnam quam tenetur, impedit molestias ea nostrum at ratione adipisci similique rem, delectus atque pariatur. Quibusdam perferendis voluptatum minus tenetur dignissimos ea. Consequatur, enim natus vero delectus qui, vel dolores earum, aliquam magni nobis fugit necessitatibus tenetur veritatis sit!',
    author: 'Lorem, ipsum.',
    publication: randomInteger(1, 2022),
    pages: Math.ceil(Math.random() * 10000),
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    author: 'Lorem, ipsum.',
    publication: randomInteger(1, 2022),
    pages: Math.ceil(Math.random() * 10000),
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    author: 'Lorem, ipsum.',
    publication: randomInteger(1, 2022),
    pages: Math.ceil(Math.random() * 10000),
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    author: 'Lorem, ipsum.',
    publication: randomInteger(1, 2022),
    pages: Math.ceil(Math.random() * 10000),
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    author: 'Lorem, ipsum.',
    publication: randomInteger(1, 2022),
    pages: Math.ceil(Math.random() * 10000),
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    author: 'Lorem, ipsum.',
    publication: randomInteger(1, 2022),
    pages: Math.ceil(Math.random() * 10000),
  },
];

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
