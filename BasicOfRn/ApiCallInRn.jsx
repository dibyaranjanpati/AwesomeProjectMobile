import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

const ApiCallInRn = () => {
  const [data, setData] = useState([]);
  const apiCalled = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    // console.warn(result);
    setData(result);
  };
  useEffect(() => {
    apiCalled();
  }, []);

  return (
    // <View>
    //   {data ? (
    //     <View>
    //       <Text>{data.id}</Text>
    //       <Text>{data.title}</Text>
    //       <Text>{data.body}</Text>
    //     </View>
    //   ) : null}
    // </View>

    // fetch multiple data using flatlist

    <View>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

export default ApiCallInRn;
