import React from 'react';
import heartSvg from '../../../styles/assets/images/heart.svg';
import Translate from '../../../utils/translate';
import { Container, Image, Message } from './styles';

const About: React.FC = () => {
  return (
    <Container>
      <Image src={heartSvg} />
      <Message>{Translate('to fliper')}</Message>
    </Container>
  );
};

export default About;
