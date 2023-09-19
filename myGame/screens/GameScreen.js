import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import NumberContainter from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import GuessLogItem from "../components/game/GuessLogItem";


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min + 1)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }   else {
        return rndNum;
    }
}

function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

const [minBoundary, setMinBoundary] = useState(1);
const [maxBoundary, setMaxBoundary] = useState(100);

    // useEffect(() => {
    //     minBoundary = 1;
    //     maxBoundary = 100;
    // }, []);

    function nextGuessHandler(direction) { 
        // direction => 'lower', 'greater'
        if (
        (direction === 'lower' && currentGuess < userNumber) || 
        (direction === 'greater' && currentGuess > userNumber)
        ){
         Alert.alert("Don't lie!", 'You know this is wrong...', [
            { text: 'Sorry!', style: 'cancel'},
         ]);
         return;             
        }

        if (direction === 'lower') {
            setMaxBoundary(currentGuess);
        } else {
            setMinBoundary(currentGuess + 1);
        }

        const  newRndNumber= generateRandomBetween(
            minBoundary, 
            maxBoundary, 
            currentGuess
        );
        setCurrentGuess(newRndNumber);
        setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);        
    }

    const guessRoundsListLength = guessRounds.length;

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
                   <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                      <Ionicons name="md-add" size={24} color='white' />
                   </PrimaryButton>
               </View>
           </View>           
        </Card>
       <View style= {styles.listContainer}>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList 
          data= {guessRounds} 
          renderItem={(itemData) => (
            <GuessLogItem 
              roundNumber={guessRoundsListLength - itemData.index} 
              guess={itemData.item} 
              />
            )}
            keyExtractor={(item, index) => index.toString()}  
          />
       </View>
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
    listContainer: {
        flex: 1,
        padding: 16,
    },   
});