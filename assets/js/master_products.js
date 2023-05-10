// Get all the product containers
const productContainers = document.querySelectorAll('.product-section .row');

// Sort the product containers alphabetically by name
Array.from(productContainers)
  .sort((a, b) => {
    const nameA = a.querySelector('h3').textContent.trim().toLowerCase();
    const nameB = b.querySelector('h3').textContent.trim().toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
  .forEach(container => {
    // Append the sorted product containers to the parent element
    document.querySelector('.product-section .row').appendChild(container);
  });