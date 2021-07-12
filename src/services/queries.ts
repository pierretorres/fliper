import { gql } from '@apollo/client';

export const WEALTH_SUMMARY_AGGREGATE = gql`
  query {
    wealthSummary_aggregate {
      aggregate {
        avg {
          id
          cdi
          gain
          profitability
          total
        }
        sum {
          cdi
          gain
          id
          profitability
          total
        }
      }
    }
  }
`;

export const WEALTH_SUMMARY = gql`
  query {
    wealthSummary {
      id
      cdi
      gain
      hasHistory
      profitability
      total
    }
  }
`;
