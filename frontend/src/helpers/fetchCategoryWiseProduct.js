const { default: SummaryApi } = require("../common")

const fetchCategoryWiseProduct = async (category) => {
    try {
      console.log("Category being sent:", category); // Debugging
      const response = await fetch(SummaryApi.categoryWiseProduct.url, {
        method: SummaryApi.categoryWiseProduct.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ category: category }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const dataResponse = await response.json();
      return dataResponse;
    } catch (error) {
      console.error("Failed to fetch category-wise product:", error);
      return null;
    }
  };
  
export default fetchCategoryWiseProduct