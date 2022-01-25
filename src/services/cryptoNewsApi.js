import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    "x-bingapis-sdk": "true",
	"x-rapidapi-key": process.env.REACT_APP_API_KEY_RAPIDAPI_BINGNEWS,
	"x-rapidapi-host": process.env.REACT_APP_API_HOST_RAPIDAPI_BINGNEWS,
	
}

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL_RAPIDAPI_BINGNEWS }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;