import React, { useMemo, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Login/style';
import { TextInput } from 'react-native-gesture-handler';
import RadioGroup from 'react-native-radio-buttons-group';
const imageSource = require('../../assets/img/R.png');

function SignUP() {
  const [selectedId, setSelectedId] = useState(null);

  const radioButtons = useMemo(() => ([
    {
      id: '1', 
      label: 'Male ',
      value: 'option1',
      labelStyle: styles.radioLabel, // Custom label style
      containerStyle: styles.radioContainer // Custom container style
    },
    {
      id: '2',
      label: 'Female',
      value: 'option2',
      labelStyle: styles.radioLabel, // Custom label style
      containerStyle: styles.radioContainer // Custom container style
    }
  ]), []);

  return (
    <View style={styles.container}>
      <View style={styles.containerEnd}>
        <Text style={styles.titleStart}>REGISTER</Text>
      </View>

      <View style={styles.inputContainerItemALll}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="black"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Phone"
            placeholderTextColor="black"
          />
        </View>

        

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="black"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry={true}
          />
          <Image source={imageSource} style={styles.imageOne} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Birthday"
            placeholderTextColor="black"
          />
        </View>

        <RadioGroup
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
           layout='row'
           containerStyle={{ flexDirection: 'row', marginVertical: 5 }} // Apply container styles here
          labelStyle={{ fontSize: 16, color: 'black', marginLeft: 10 , fontWeight  : "bold" }} // Apply label styles here
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#E53935' }]}
          >
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerEnd}>
          <Text style={styles.titleEnd}>When you agree to terms and conditions</Text>
        </View>
      </View>
    </View>
  );
}

export default SignUP;
