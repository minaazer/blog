import React, {useContext, useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title,setTitle] = useState(initialValues.title);
    const [content,setContent] = useState(initialValues.content);
    const { addBlogPost } = useContext((Context));

    return <View marginLeft={10} marginRight={10} >
        <Text style={styles.label}>Enter Title</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}></TextInput>

        <Text style={styles.label}>Enter Content</Text>
        <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}></TextInput>

        <Button 
            title="Save Blog Post" 
            onPress={() => onSubmit(title,content)}
            />
    </View>
};

BlogPostForm.defaultProps = {
    initialValues: {
        title:'',
        content:''
    }
}

const styles = StyleSheet.create({
    input:{
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    }, 
    label:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 5
    }
});

export default BlogPostForm;