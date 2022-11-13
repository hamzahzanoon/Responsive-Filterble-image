const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = () => {
    filterItem.onclick = (selectedItem) => {
      if(selectedItem.target.classList.contains("item")) {
        filterItem.querySelector(".active").classList.remove("active");
        selectedItem.target.classList.add("active");
        let filterName = selectedItem.target.getAttribute("data-name");
        filterImg.forEach((image) => {
          let filterImages = image.getAttribute("data-name");
          if((filterImages === filterName) || filterName === "All") {
            image.classList.remove("hide");
            image.classList.add("show");
          }else {
            image.classList.add("hide");
            image.classList.remove("show");
          }
        });
      }
    }
    for (let i = 0; i < filterImg.length; i++) {
         filterImg[i].setAttribute("onclick", "preview(this)");
    }
}


//selecting all required elements
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const categoryName = document.querySelector(".title p");
const closeIcon = previewBox.querySelector(".fa-times");
const shadow = document.querySelector(".shadow");


function preview(elemnt) {
   document.querySelector("body").style.overflow = "hidden";

    let selectedPrevewImg = elemnt.querySelector("img").src;
    let selectedItemCategory = elemnt.getAttribute("data-name");
    categoryName.textContent = selectedItemCategory;
    previewImg.src = selectedPrevewImg;
   
    previewBox.classList.add("show");
    shadow.classList.add("show");
    closeIcon.onclick = () => {
        previewBox.classList.remove("show");
        shadow.classList.remove("show");
        document.querySelector("body").style.overflow = "scroll";
    }   
}