import React from 'react';
import { useQuery } from '@apollo/client';
import { IconButton, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Skeleton from 'react-loading-skeleton';
import Card from '../../components/Card';
import { Container, Body } from './styles';
import Header from '../../components/Header';
import { WEALTH_SUMMARY } from '../../services/queries';
import colors from '../../styles/colors';
import ErrorMessage from '../../components/atoms/ErrorMessage';
import Translate from '../../utils/translate';

interface ISummary {
  cdi: number;
  gain: number;
  profitability: number;
  total: number;
  id: number;
}
interface DetailsProps {
  theme: 'light' | 'dark';
}
const Details: React.FC<DetailsProps> = ({ theme }: DetailsProps) => {
  const { loading, error, data } = useQuery(WEALTH_SUMMARY);
  const investment = Translate('investment');

  const useStyles = makeStyles({
    root: {
      color: colors[theme].titleText,
    },
  });

  let body;
  if (loading)
    body = (
      <>
        <Skeleton width={344} height={325} style={{ borderRadius: 23 }} />
        <Skeleton width={344} height={325} style={{ borderRadius: 23 }} />
      </>
    );
  if (error) body = <ErrorMessage />;

  return (
    <Container>
      <Header />
      <Body>
        <Link to="/">
          <IconButton>
            <ArrowBackIcon classes={{ root: useStyles().root }} />
          </IconButton>
        </Link>
        {body ||
          data?.wealthSummary.map((value: ISummary) => (
            <Card
              key={value.id}
              data={value}
              title={`${investment} ${value.id}`}
              hiddenButton
            />
          ))}
      </Body>
    </Container>
  );
};

export default Details;
