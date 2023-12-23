import React from "react";
import { SectionList, Text, View } from "react-native";

const SecListOfRn = () => {
  const user = [
    { name: "Dibya", Id: 1, data: ["js", "react", "redux", "next"] },
    { name: "subham", Id: 2, data: ["java", "springboot", "redux", "next"] },
    { name: "papun", Id: 3, data: ["c++", "cotlin", "python", "swift"] },
  ];
  return (
    <View>
      <Text>section lis of rn </Text>
      <SectionList
        sections={user}
        // keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={{ color: "green", fontSize: 20 }}>{item}</Text>
        )}
        renderSectionHeader={({ section: { name } }) => (
          <Text style={{ color: "red", fontSize: 30 }}>{name}</Text>
        )}
      />
    </View>
  );
};

export default SecListOfRn;
