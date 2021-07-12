import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { ApolloError } from '@apollo/client';
import {
  Container,
  Title,
  Header,
  TextSecondary,
  Body,
  TextPrimary,
  Table,
  Row,
  Footer,
  Button,
} from './styles';
import TextMask from '../../utils/textMask';
import Translate from '../../utils/translate';
import ErrorMessage from '../atoms/ErrorMessage';
import AboutSelector from '../atoms/AboutSelector';
import About from '../atoms/About';

interface CardProps {
  data: {
    cdi?: number;
    gain?: number;
    profitability?: number;
    total?: number;
  };
  hiddenButton?: boolean;
  title?: string;
  loading?: boolean;
  error?: ApolloError;
  displayAbout?: boolean;
}

const Card: React.FC<CardProps> = ({
  data,
  hiddenButton,
  title,
  loading,
  error,
  displayAbout,
}: CardProps) => {
  const { cdi, gain, profitability, total } = data;
  const [about, setAbout] = useState(false);

  const loadingEffect = (
    value: React.ReactElement | number,
    width?: number,
    height?: number,
  ) =>
    loading ? <Skeleton width={width || 100} height={height || 20} /> : value;

  const RenderData = (
    <>
      <Body>
        <TextSecondary>{Translate('amount invested')}</TextSecondary>
        {loadingEffect(<TextPrimary>{TextMask(total)}</TextPrimary>, 150, 28)}
      </Body>
      <Table>
        <Row>
          <TextSecondary>{Translate('profitability month')}</TextSecondary>
          {loadingEffect(
            <TextPrimary size={18}>
              {TextMask(profitability, 'percent')}
            </TextPrimary>,
          )}
        </Row>
        <Row>
          <TextSecondary>CDI</TextSecondary>
          {loadingEffect(
            <TextPrimary size={18}>{TextMask(cdi, 'percent')}</TextPrimary>,
          )}
        </Row>
        <Row>
          <TextSecondary>{Translate('earning month')}</TextSecondary>
          {loadingEffect(<TextPrimary size={18}>{TextMask(gain)}</TextPrimary>)}
        </Row>
      </Table>
    </>
  );

  return (
    <Container>
      {error ? (
        <ErrorMessage />
      ) : (
        <>
          <Header>
            <Title>{title || Translate('your summary')}</Title>
            {displayAbout && (
              <AboutSelector state={about} onSelect={() => setAbout(!about)} />
            )}
          </Header>

          {about ? <About /> : RenderData}

          {hiddenButton || (
            <Footer>
              <Link to="/details">
                <Button>{Translate('view more')}</Button>
              </Link>
            </Footer>
          )}
        </>
      )}
    </Container>
  );
};

Card.defaultProps = {
  hiddenButton: false,
  title: undefined,
  loading: false,
  error: undefined,
  displayAbout: false,
};

export default Card;
