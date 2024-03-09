const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const item4 = document.querySelector(".item4");

const itemsList = [item1, item2, item3, item4];

handleMergeLR = (number) => {
  itemsList.forEach((item, index) => {
    if (index === number - 1) {
      item.classList.add("merge-left-right", "top-index");
    } else {
      item.classList.remove("merge-left-right", "top-index");
    }
  });
};

handleMergeUD = (number) => {
  itemsList.forEach((item, index) => {
    if (index === number - 1) {
      item.classList.add("merge-up-down", "top-index");
    } else {
      item.classList.remove("merge-up-down", "top-index");
    }
  });
}

maximum = (number) => {
  itemsList.forEach((item, index) => {
    if (index === number - 1) {
      item.classList.add("maximum", "top-index");
    } else {
      item.classList.remove("maximum", "top-index");
    }
  });
}

split = () => {
  itemsList.forEach((item, index) => {
    item.classList.remove("merge-left-right", "merge-up-down", "maximum", "top-index");
  });
};
