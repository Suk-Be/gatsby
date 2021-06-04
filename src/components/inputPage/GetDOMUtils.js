// submit
const productsContainer = [];

const createProductsContainer = domSelector => {
  for (let i = 0; i < domSelector.length; i++) {
    const categoryElements = {};
    categoryElements.products = domSelector[i].querySelectorAll('.product');
    productsContainer.push(categoryElements);
  }
  return productsContainer;
};

const pushProductsIds = (selectorContainer, dataContainer) => {
  for (let i = 0; i < selectorContainer.length; i++) {
    dataContainer[i] = [];
    for (let j = 0; j < selectorContainer[i].products.length; j++) {
      const value = parseInt(
        selectorContainer[i].products[j].dataset.productId,
        10
      );
      dataContainer[i].push(value);
    }
  }
  return dataContainer;
};
const pushProductsNames = (selectorContainer, dataContainer) => {
  for (let i = 0; i < selectorContainer.length; i++) {
    dataContainer[i] = [];
    for (let j = 0; j < selectorContainer[i].products.length; j++) {
      const value = selectorContainer[i].products[j].dataset.productName;
      dataContainer[i].push(value);
    }
  }
  return dataContainer;
};
const pushProductsAmounts = (selectorContainer, dataContainer) => {
  for (let i = 0; i < selectorContainer.length; i++) {
    dataContainer[i] = [];
    for (let j = 0; j < selectorContainer[i].products.length; j++) {
      const value = parseInt(selectorContainer[i].products[j].value, 10);
      dataContainer[i].push(value);
    }
  }
  return dataContainer;
};

const assembleProductGroups = (prodIds, prodNames, prodAmounts) =>
  prodIds.map((idsPerCategory, indexCategory) => {
    return idsPerCategory.map((id, indexProduct) => {
      return {
        id,
        name: prodNames[indexCategory][indexProduct],
        totalAmount: prodAmounts[indexCategory][indexProduct],
      };
    });
  });

const assembleCategoryData = (dataContainer, domSelector, productGroups) => {
  domSelector.forEach((current, i) => {
    dataContainer.push({
      id: parseInt(current.dataset.categoryId, 10),
      name: current.dataset.categoryName,
      products: productGroups[i],
    });
  });
  return dataContainer;
};

export {
  createProductsContainer,
  pushProductsIds,
  pushProductsNames,
  pushProductsAmounts,
  assembleProductGroups,
  assembleCategoryData,
};
