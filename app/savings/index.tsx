import { StyleSheet, Text, View } from "react-native"

export default function Savings (){
    return(
       <View style={styles.savingsCon}>
        <Text>My Savings</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    savingsCon:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})