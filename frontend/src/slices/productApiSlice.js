import { PRODUCTS_URL } from "../cosntants";
import { apiSlice } from "./apiSlices";


export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
            }),
            keepUnusedDataFor: 5,
        })
    }),
});

export const { useGetProductQuery } = productApiSlice;