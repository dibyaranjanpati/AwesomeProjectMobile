import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

const GetdatafromJsonApi = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    // const url = "http://10.0.2.2:3000/users";   its not surpoted
    const url = "http://192.168.1.42:3000/users";
    let result = await fetch(url);
    result = await result.json();
    // console.warn(result);
    setData(result);
  };
  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return (
    <View>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>
              <Text>{item.email}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

export default GetdatafromJsonApi;
