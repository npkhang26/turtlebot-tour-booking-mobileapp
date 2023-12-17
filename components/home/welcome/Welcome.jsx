import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Image  } from 'react-native'
import {useRouter} from 'expo-router';
import styles from './welcome.style'
import { COLORS, FONT, SIZES, icons } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];
const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hi Khang</Text>
        <Text style={styles.welcomeMessage}>Find your destination </Text>
      </View> 
      <View styles={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput} 
            value=""
            onChange={() => {}}
            placeholder='What you are looking for ?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image 
            source={icons.search} 
            resizeMode='contain'
            style={styles.searchBtnImage} 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data = {jobTypes}
          renderItem={(item) => {
            <TouchableOpacity style={styles.tab(activeJobType, item)}>
              <Text>{item}</Text>
            </TouchableOpacity>
          }}
        />
      </View>
    </View>
  )
}

export default Welcome