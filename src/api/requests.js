import { url } from "./constants";

export const createUser = data => {
  console.log(data);

  return fetch(url.SIGN_UP, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      name: data.name
    })
  })
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(e => {
      console.log(e);
    });
};

export const loginUser = data => {
  return fetch(url.SIGN_IN, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password
    })
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(e => {
      console.log(e);
    });
};

export const fetchBlogCat = () => {
  return fetch(url.BLOG_CAT)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(e => {
      console.log(e);
    });
};

export const fetchBlogList = () => {
  return fetch(url.BLOG_LIST)
    .then(response => response.json())
    .then(resp => {
      return resp;
    })
    .catch(e => {
      console.log(e);
    });
};

export const fetchProducts = () => {
  return fetch(url.PRODUCTS_LIST)
    .then(response => response.json())
    .then(resp => {
      return resp;
    })
    .catch(e => {
      console.log(e);
    });
};

export const searchProducts = sQuery => {
  const data = JSON.stringify({
    where: { name: { like: `${sQuery}`, options: "i" } }
  });
  const encodedValue = encodeURIComponent(data);
  return fetch(`${url.PRODUCTS_LIST}?filter=${encodedValue}`)
    .then(response => response.json())
    .then(resp => {
      return resp;
    })
    .catch(e => {
      console.log(e);
    });
};

export const fetchVariants = () => {
  const data = JSON.stringify({
    where: { featured_home: true }
  });
  const encodedValue = encodeURIComponent(data);

  return fetch(`${url.VARIANTS_LIST}?filter=${encodedValue}`)
    .then(response => response.json())
    .then(resp => {
      return resp;
    })
    .catch(e => {
      console.log(e);
    });
};

export const fetchLatest = () => {
  const data = JSON.stringify({ where: { tags: { inq: ["latest"] } } });
  const encodedValue = encodeURIComponent(data);
  return fetch(`${url.BLOG_LIST}?filter=${encodedValue}`)
    .then(response => response.json())
    .then(resp => {
      return resp;
    })
    .catch(e => {
      console.log(e);
    });
};

export const fetchUser = userId => {
  return fetch(`${url.SIGN_UP}/${userId}`)
    .then(response => response.json())
    .then(resp => {
      return resp;
    })
    .catch(e => {
      console.log(e);
    });
};

export const fetchNearby = (API_KEY,long,lat) => {
  //const data = JSON.stringify({ where: { tags: { inq: ["latest"] } } });
  //const encodedValue = encodeURIComponent(data);
  let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=` + API_KEY + `&type=liquor_store&location=` + lat + `,` + long + `&radius=10000`;
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .then(resp => {
      return resp;
    })
    .catch(e => {
      console.log(e);
    });
};