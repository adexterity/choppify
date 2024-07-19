export const getProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
/*     console.log(data, "products: utils");
 */    return data;
  } catch (e) {
    console.log("failed to fetch data:", e);
    if (e.message === "Request timed out") {
      console.error("network timedout: ", e);
    }
  }
};
export const getAllCategory = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
/*     console.log(data, "allCategory: utils");
 */    return data;
  } catch (e) {
    console.log("failed to fetch data:", e);
    if (e.message === "Request timed out") {
      console.error("network timedout: ", e);
    }
  }
};


export const getJewelery = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/category/jewelery", {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
/*     console.log(data, "products: utils");
 */    return data;
  } catch (e) {
    console.log("failed to fetch data:", e);
    if (e.message === "Request timed out") {
      console.error("network timedout: ", e);
    }
  }
};
export const getElectronics = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/category/electronics", {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
/*     console.log(data, "products: utils");
 */    return data;
  } catch (e) {
    console.log("failed to fetch data:", e);
    if (e.message === "Request timed out") {
      console.error("network timedout: ", e);
    }
  }
};
export const getMensClothing = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/category/men's clothing", {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
/*     console.log(data, "products: utils");
 */    return data;
  } catch (e) {
    console.log("failed to fetch data:", e);
    if (e.message === "Request timed out") {
      console.error("network timedout: ", e);
    }
  }
};
export const getWomensClothing = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/category/women's clothing", {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
/*     console.log(data, "products: utils");
 */    return data;
  } catch (e) {
    console.log("failed to fetch data:", e);
    if (e.message === "Request timed out") {
      console.error("network timedout: ", e);
    }
  }
};

// currency formatter
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
})

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number)
}

