import {CreateAxios} from '../../utils';
import {FETCH_PRODUCTS} from '../../constants/actions';

export const getAllProducts = data => dispatch => {
  dispatch({type: FETCH_PRODUCTS.REQUEST});
  return CreateAxios().then(axios =>
    axios
      .post('/product/all', {
        perPage: data.perPage,
        page: data.page,
        search: data.search,
      })
      .then(res => {
        if (res.data) {
          console.log('[SUCCESS]:[GET_ALL_PRODUCTS]');
          dispatch({
            type: FETCH_PRODUCTS.SUCCESS,
            payload: res.data.data.products,
          });
          return res.data.products;
        }
      })
      .catch(err => {
        console.log('[ERROR]:[FETCH_PRODUCTS]', err);
      }),
  );
};
