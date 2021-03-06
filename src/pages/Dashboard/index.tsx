import React from 'react';
import { Text, View } from 'react-native';

import Profile from '../../components/Profile';

import image from '../../../assets/background.png';
import graph from '../../../assets/graph.png';

import {
  Background,
  CO2Quantity,
  CO2ResumeContainer,
  Container,
  Graph,
  InlineView,
  SmallText,
} from './styles';
import NavBar from '../../components/NavBar';

const Dashboard: React.FC = () => (
  <Container>
    <Background source={image}>
      <View>
        <Profile />
      </View>
      <CO2ResumeContainer>
        <Text>Toneladas de CO2</Text>
        <CO2Quantity>2.5</CO2Quantity>
        <Text>que você deixou de emitir</Text>
      </CO2ResumeContainer>
      <Text />
      <Text>Sua contribuição para o planeta</Text>
      <Text />
      <View>
        <Graph source={graph} />
      </View>
      <InlineView>
        <SmallText>Juntos, deixamos de emitir</SmallText>
        <Text> 72 </Text>
        <SmallText>toneladas de CO2 nos últimos 30 dias.</SmallText>
      </InlineView>
      <NavBar />
    </Background>
  </Container>
);

export default Dashboard;
