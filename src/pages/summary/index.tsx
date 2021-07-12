import React, { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { Container, Body } from './styles';
import { WEALTH_SUMMARY_AGGREGATE } from '../../services/queries';

const Summary: React.FC = () => {
  const { loading, error, data } = useQuery(WEALTH_SUMMARY_AGGREGATE);

  const payload = useMemo(() => {
    if (data) {
      const { avg, sum } = data.wealthSummary_aggregate.aggregate;
      return {
        cdi: avg.cdi,
        gain: sum.gain,
        profitability: avg.profitability,
        total: sum.total,
      };
    }
    return {};
  }, [data]);

  return (
    <Container>
      <Header />
      <Body>
        <Card loading={loading} data={payload} error={error} displayAbout />
      </Body>
    </Container>
  );
};

export default Summary;
