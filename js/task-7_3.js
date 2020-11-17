const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery');
const img = images.map(picture => {
  const imgItem = document.createElement('li');
  imgItem.classList.add('li-item');

  const imgRef = document.createElement('img');
  imgRef.src = picture.url;
  imgRef.alt = picture.alt;
  imgRef.width = 200;

  imgItem.append(imgRef);
  return imgItem;
});

galleryRef.append(...img);
console.log(galleryRef);
