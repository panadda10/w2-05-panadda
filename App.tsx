import{StatusBar}from'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Post from './components/Post';
import postData from './post-data.json'
export default function App() {
  return (
    <SafeAreaView>
<Text  style={{fontSize:50, fontWeight:"500",padding:5,marginLeft:15,marginTop:10}}>Intergram</Text>

  <FlatList
        data={postData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Post
            username={item.username}
            caption={item.caption}
            image={item.image}
            profile={item.profile}
          />
        }
        contentContainerStyle={{ gap : 20 }}
      />

   </SafeAreaView>
  );
}




