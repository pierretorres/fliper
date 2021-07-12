import React from 'react';
import errorSvg from '../../../styles/assets/images/error.svg';
import Translate from '../../../utils/translate';
import { Container, Image, Message } from './styles';

const ErrorMessage: React.FC = () => {
  return (
    <Container>
      <Image src={errorSvg} />
      <Message>{Translate('error message')}</Message>
    </Container>
  );
};

export default ErrorMessage;
