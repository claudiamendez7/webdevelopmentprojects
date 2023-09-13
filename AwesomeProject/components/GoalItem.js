import { StyleSheet, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <Pressable 
            android_ripple={{color: '#ED0DD9'}} 
            onPress={props.onDeleteItem.bind(this, props.id)}
            style= {({pressed}) => pressed && styles.pressedItem}
        > 
            <Text style={styles.goalItem}> 
                {props.text}
            </Text>
        </Pressable>
    );
};

export default GoalItem;

const styles= StyleSheet.create({
      goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
      },
      pressedItem: {
        opacity: 0.5
      }
    });