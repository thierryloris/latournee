import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://la-tournee-web-dev.osc-fr1.scalingo.io/web/stores/1657031023080x131691197342183490',
});

export async function fetchLanding() {
  const { data } = await api.get('/categories/landing');
  return data;
}

export async function fetchCategories() {
  const { data } = await api.get('/categories');
  return data;
}

export async function fetchCategoryByID(id: number) {
  const { data } = await api.get('/categories/' + id);
  return data;
}

export async function fetchProductByID(id: number) {
  const { data } = await api.get('/products/' + id);
  return data;
}
