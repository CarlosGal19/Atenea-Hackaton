import { StatusBar } from "expo-status-bar";
import { ScrollView, View, StyleSheet, Button, Alert } from "react-native";
import Header from "../../components/Home/Header";
import Categories from "../../components/Home/Categories";
import Report from "../../components/Home/Report";
import Logo from "../../components/Home/Logo";

import React from "react";

export default function IndexScreen() {

  return (
    <ScrollView
      style={{
        paddingTop: 20,
      }}
    >
      <StatusBar style="auto" />
      <Header />
      <View style={styles.container}>
        <Categories />
        <Logo />
        <Report />
        <Report />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 20
  },
});
