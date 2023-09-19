import { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import NumberContainter from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (min - max)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }   else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(
        1, 
        100, 
        userNumber
    );
    const [currentGuess, setCurrentGuess ] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) { 
        // direction => 'lower', 'higher'
        if (
        (direction === 'lower' && currentGuess < userNumber) || 
        (direction === 'higher' && currentGuess > userNumber)
        ){
         Alert.alert("Don't lie!", 'You know this is wrong...', [
            { text: 'Sorry!', style: 'cancel'},
         ]);
         return;             
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const  newRndNumber= generateRandomBetween(
            minBoundary, 
            maxBoundary, 
            currentGuess);
        setCurrentGuess(newRndNumber);        
    }

    return (
        <View style= {styles.screen}>
           <Title>Opponent's Guess</Title>
           <NumberContainter>{currentGuess}</NumberContainter>
            <Card>
                <InstructionText style= {styles.instructionText}>
                    Higher or Lower?
                </InstructionText>
           <View style= {styles.buttonsContainer}>
            <View style= {styles.buttonContainer}>
             <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                <Ionicons name="md-remove" size={24} color='white' />
             </PrimaryButton>
            </View>
            <View style= {styles.buttonContainer}>
             <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                <Ionicons name="md-add" size={24} color='white' />
             </PrimaryButton>
            </View>
           </View>           
        </Card>
       {/* <View>LOG ROUNDS</View> */}
    </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 44,
    },
    instructionText: {
        marginBottom: 12,
    },         
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
   
});