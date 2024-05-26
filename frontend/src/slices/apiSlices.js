import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BASE_URL } from '../cosntants';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
    tagTypes: ['Post'],
    endpoints: builder => ({
        // omit other endpoints

        getUsers: builder.query({
            query: () => '/users'
        })
    })
})

export const { useGetProductQuery } = apiSlice