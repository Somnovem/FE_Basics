const Image = () => {
  const [images, setImages] = React.useState([
    {
      id: 1,
      src: "https://portalhistoryua.com/wp-content/uploads/2024/05/majdan-nezalezhnosti-v-kyyevi-glib-albovskyj-unsplash.jpg",
      alt: "Київ",
      scale: 1
    }
  ]);

  const addImage = () => {
    const newImage = {
      id: images.length + 1,
      src: "https://portalhistoryua.com/wp-content/uploads/2024/05/majdan-nezalezhnosti-v-kyyevi-glib-albovskyj-unsplash.jpg",
      alt: "Київ",
      scale: 1
    };
    setImages([...images, newImage]);
  };

  const enlargeImage = () => {
    if (images.length > 0) {
      const updatedImages = [...images];
      const lastImage = updatedImages[updatedImages.length - 1];
      lastImage.scale = Math.min(lastImage.scale * 1.1, 2);
      setImages(updatedImages);
    }
  };

  const shrinkImage = () => {
    if (images.length > 0) {
      const updatedImages = [...images];
      const lastImage = updatedImages[updatedImages.length - 1];
      lastImage.scale = Math.max(lastImage.scale / 1.1, 0.1);
      setImages(updatedImages);
    }
  };

  const deleteImage = () => {
    if (images.length > 0) {
      const updatedImages = images.slice(0, -1);
      setImages(updatedImages);
    }
  };

  return React.createElement('div', null,
    React.createElement('div', { id: 'images' },
      images.map((image) =>
        React.createElement('img', {
          key: image.id,
          src: image.src,
          alt: image.alt,
          width: "500",
          height: "300",
          style: {
            transform: `scale(${image.scale})`,
            transition: 'transform 0.3s ease',
            margin: '10px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }
        })
      )
    ),
    React.createElement('div', { id: 'image-buttons' },
      React.createElement('button', { id: 'btn-image-add', onClick: addImage }, 'Додати'),
      React.createElement('button', { id: 'btn-image-enlarge', onClick: enlargeImage }, 'Збільшити'),
      React.createElement('button', { id: 'btn-image-shrink', onClick: shrinkImage }, 'Зменшити'),
      React.createElement('button', { id: 'btn-image-delete', onClick: deleteImage }, 'Видалити зображення')
    ),
    React.createElement('div', null,
      React.createElement('a', { href: 'https://mkrada.gov.ua' }, 'Офіційний сайт Миколаївської міської ради')
    )
  );
};
