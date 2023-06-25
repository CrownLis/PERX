import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

import type { Goods, GoodsParams } from './types';

export const goodsApi = createApi({
  reducerPath: 'goods',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL_API }),
  endpoints: builder => ({
    getGoods: builder.query<Goods[], GoodsParams>({
      query: ({ dealers = [] }) => {
        if (!dealers.length) {
          return 'goods';
        }

        const searchParams = new URLSearchParams();
        searchParams.append('dealers', dealers.join(','));

        return `goods/?${searchParams.toString()}`;
      },
    }),
  }),
});

const goodsReducer = goodsApi.reducer;

export const { useGetGoodsQuery } = goodsApi;

export default goodsReducer;
