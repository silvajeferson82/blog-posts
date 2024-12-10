export const loadPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const photosresponse = await fetch('https://jsonplaceholder.typicode.com/photos');

  const [posts, photos] = await Promise.all([response, photosresponse]);

  const postJason = await posts.json();
  const photosJason = await photos.json();

  const postAndPhotos = postJason.map((post, index) => {
    return { ...post, cover: photosJason[index].url }
  });

  return postAndPhotos;
}