/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStocksfinal = /* GraphQL */ `
  query GetStocksfinal($id: ID!) {
    getStocksfinal(id: $id) {
      id
      timestamp
      totalvolume
      minprice
      maxprice
      openingprice
      closingprice
      createdAt
      updatedAt
    }
  }
`;
export const listStocksfinals = /* GraphQL */ `
  query ListStocksfinals(
    $filter: ModelstocksfinalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStocksfinals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        timestamp
        totalvolume
        minprice
        maxprice
        openingprice
        closingprice
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
