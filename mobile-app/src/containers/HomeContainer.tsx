// import useState next to FunctionComponent
import React, { FunctionComponent, useState } from 'react';
import { Button, Text } from 'react-native';
import { ButtonPrimary } from '../components/Buttons/ButtonPrimary';

interface IHomeProps {
    user: null,
}

const HomeContainer: FunctionComponent<{ initial?: IHomeProps }> = ({ initial = null }) => {
    
  const [clicks, setClicks] = useState(0);

  return <>
    <ButtonPrimary action={() => setClicks(clicks + 1)} text={`just some text`} />
  </>
}

export default HomeContainer;