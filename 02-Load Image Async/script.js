
const imgContainer = document.querySelector(".images");

let currentImg;
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
    const img = document.createElement("img");
    img.src = imgPath;
    currentImg = img;
    imgContainer.append(img);
    img.addEventListener("load", function () {
      resolve(img); // u can send anything to use later in .then
      //resolve(console.log('Image found'));
      //resolve('Image found in resolve');
    });
    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
      //reject('Image not found in reject');
      //reject(console.log('Image not found')); //works but do not use in promise
    });
  }, 2000);
  });
};

const waitFor = function (second) {
  return new Promise(function (resolve) {
    console.log("wait for 2 seconds");
    setTimeout(resolve, second * 1000);
  });
};
const loadNPause = async function(){
 
  try {
    const img1 = await createImage('images/img-1.jpg');
    console.log('image loaded');
    await waitFor(2);
    img1.style.display = "none";

    const img2 = await createImage('images/img-2.jpg');
    await waitFor(4);
    img2.style.display = "none";

    const img3 = await createImage('images/img-3.jpg');
    await waitFor(6);
    img3.style.display = "none";
  } catch (err) {
    console.log(err);
  }
}
loadNPause();


async function loadAllProm() {
  try {
    const allOfThem = await Promise.all([createImage('images/img-1.jpg'),createImage('images/img-2.jpg'),createImage('images/img-3.jpg')]);
    console.log(allOfThem);
  } catch (err) {
    console.log(err)
  }
}
loadAllProm()