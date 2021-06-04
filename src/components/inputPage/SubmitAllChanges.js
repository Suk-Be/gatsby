import {
  createProductsContainer,
  pushProductsIds,
  pushProductsNames,
  pushProductsAmounts,
  assembleProductGroups,
  assembleCategoryData,
} from './GetDOMUtils';
import { getValue as getDOMnodes } from '../../utils/js/getValue';

export const SubmitAllChanges = e => {
  const form = document.getElementById('input');
  const categories = form.querySelectorAll('.category');

  e.preventDefault();

  const createDataForServer = () => {
    let categoryData = [];
    let productGroups = [];
    const productIds = [];
    const productNames = [];
    const productsAmount = [];
    const assembleCategory = [];
    const selectFromContainer = createProductsContainer(categories);
    pushProductsIds(selectFromContainer, productIds);
    pushProductsNames(selectFromContainer, productNames);
    pushProductsAmounts(selectFromContainer, productsAmount);
    productGroups = assembleProductGroups(
      productIds,
      productNames,
      productsAmount
    );
    categoryData = assembleCategoryData(
      assembleCategory,
      categories,
      productGroups
    );
    // eslint-disable-next-line no-console
    console.log('categories =', categoryData);
  };

  const lineUpOperations = async () => {
    await getDOMnodes(categories);
    await createDataForServer();
  };
  lineUpOperations();
};
