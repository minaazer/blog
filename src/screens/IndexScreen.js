import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import {Feather } from '@expo/vector-icons';

const IndexScreen = ( { navigation } ) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);
    console.log(state);

    return <View>
        <FlatList 
            data={state}
            keyExtractor={blogPost => blogPost.title}
            renderItem={({ item }) => {
                return <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                    <View style={styles.row}> 
                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}> 
                            <Feather style={styles.icon} name="trash" />
                        </TouchableOpacity>
                        
                    </View>
                </TouchableOpacity>
        }}
        />
        
    </View>
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: <TouchableOpacity style={styles.add} onPress={() => navigation.navigate('Create')}>
            <Feather size={30} name="plus" />
        </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'

    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 20
    },
    add: {
        marginRight: 10
    }


});

export default IndexScreen;