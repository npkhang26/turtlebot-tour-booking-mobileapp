import { useState } from 'react';
import {View, ScrollView, SafeAreaView, Text} from 'react-native';
import {Stack, useRouter} from 'expo-router';
import {icons, COLORS, FONT, SIZES, images } from '../constants';
import {ScreenHeaderBtn, Welcome, Nearbyjobs, Popularjobs} from '../components';

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options = {{
                    headerStyle : {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible : true,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="60%" />
                    ),
                    headerTitle : "",
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View 
                    style={{
                        // flex:1, 
                        padding: SIZES.medium
                    }}
                >
                    <Welcome />
                    <Nearbyjobs />
                    <Popularjobs />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
};

export default Home;     