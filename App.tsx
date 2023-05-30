/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {Text, View, Image, ScrollView, TextInput, Button} from 'react-native';

type CarProps = {
  name: string;
  color: string;
};

const Car = (props: CarProps) => {
  const [isRunning, setIsRunning] = useState(false);

  return(
    <View>
      <Text>I am a car</Text>
      <Text>My name is {props.name}</Text>
      <Text>My color is {props.color}</Text>
      <Text>I am currently {isRunning ? 'running' : 'idle'}!</Text>
      <Button
        onPress={() => {
          setIsRunning(true);
        }}
        title={isRunning ? 'Runnniiiing' : 'press to start'}
      />
    </View>

    
  );
};

const YourApp = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <Car name='BMW' color='Blue'/>
    </ScrollView>
    
  );
};

export default YourApp;