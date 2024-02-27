import { View, Text, ScrollView, StyleSheet, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Country from './Country';

export default function Countries() {
  const [Countries, setCountries] = useState([]);
  const [searched, setSearched] = useState([]);
  useEffect((props) => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setSearched(data)
        setCountries(data)
      });
  }, [])

  const handleSearch = text => {
    const filtered = Countries.filter(country => country.name.common.includes(text));
    setSearched(filtered);
  }
  return (
    <View>
      <Text style={styles.header}>All Countries:{searched.length}</Text>
      <TextInput
        onChangeText={handleSearch}
        style={styles.input}>

      </TextInput>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <ScrollView>
        {
          searched.map(country => <Country

            country={country}
          ></Country>)
        }
      </ScrollView>
    </View>
  )
};
const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    color: 'blue',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

})