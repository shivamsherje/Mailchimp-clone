import axios from "axios";

export const getProducts = (params = {}) => {
  return axios.get(` http://localhost:8080/users`, {
    params: {
      _page: params.page,
      _limit: params.limit,
      _sort: params.sort,
      _order: params.order,
    },
  });
};

export const addProduct = (data = {}) => {
  return axios.post(` http://localhost:8080/users`, {
    title: data.title,
    category: data.category,
    pricing: data.pricing,
    desc: data.desc,
    image: data.image,
  });
};

export const deleteProduct = (id) => {
  return axios({
    method: "DELETE",
    baseURL: " http://localhost:8080",
    url: `/users/${id}`,
  });
};
