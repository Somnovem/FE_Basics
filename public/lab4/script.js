(() => {

    var element9 = document.getElementById("element-9")
    element9.style.backgroundColor = "blue"
    element9.style.color = "yellow"

    var elementAfter9 = document.getElementById("element-after-9")
    elementAfter9.style.backgroundColor = "green"
    elementAfter9.style.color = "white"

    let imageScale = 1;
    let addedImages = [];

    document.getElementById("btn-image-add").addEventListener("click", function () {
        const imagesDiv = document.getElementById("images");
        const newImage = document.createElement("img");
        newImage.src = "https://portalhistoryua.com/wp-content/uploads/2024/05/majdan-nezalezhnosti-v-kyyevi-glib-albovskyj-unsplash.jpg";
        newImage.alt = "Київ";
        newImage.width = 500;
        newImage.height = 300;
        newImage.style.margin = "10px";
        newImage.style.transition = "transform 0.3s ease";
        newImage.style.transform = `scale(${imageScale})`;

        imagesDiv.appendChild(newImage);
        addedImages.push(newImage);
    });

    document.getElementById("btn-image-enlarge").addEventListener("click", function () {
        const imagesDiv = document.getElementById("images");
        const images = imagesDiv.querySelectorAll("img");

        if (images.length > 0) {
            const lastImage = images[images.length - 1];
            imageScale = Math.min(imageScale * 1.1, 2);
            lastImage.style.transform = `scale(${imageScale})`;
        }
    });

    document.getElementById("btn-image-shrink").addEventListener("click", function () {
        const imagesDiv = document.getElementById("images");
        const images = imagesDiv.querySelectorAll("img");

        if (images.length > 0) {
            const lastImage = images[images.length - 1];
            imageScale = Math.max(imageScale / 1.1, 0.1);
            lastImage.style.transform = `scale(${imageScale})`;
        }
    });

    document.getElementById("btn-image-delete").addEventListener("click", function () {
        const imagesDiv = document.getElementById("images");
        const images = imagesDiv.querySelectorAll("img");

        if (images.length > 0) {
            const lastImage = images[images.length - 1];
            lastImage.remove();

            const index = addedImages.indexOf(lastImage);
            if (index > -1) {
                addedImages.splice(index, 1);
            }

            imageScale = 1;
        }
    });
})();