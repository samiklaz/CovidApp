import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import Chart from '../components/Chart';

import Icon from 'react-native-vector-icons/Ionicons';

import { RouteType } from '../routes/RouteType'

type Props = RouteType<'Detail'>

export default class Detail extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.page}>
                <View style={styles.headContainer}>
                    <TouchableOpacity style={styles.humContainer} onPress={() => this.props.navigation.navigate("Home")}>
                        <Icon 
                            name="arrow-back-outline"
                            size={26}
                        />
                    </TouchableOpacity>

                    <View style={styles.profileContainer}>
                        <Image 
                            source={require('../images/1.jpeg')}
                            style={styles.profile}
                        />
                    </View>
                </View>

                <View style={styles.optionCard}>
                    <View style={styles.optionCol}>
                        <Text style={styles.textLinear}>LINEAR</Text>
                    </View>
                    <Text style={styles.textLogarithmic}>LOGARITHMIC</Text>
                </View>

                <View style={styles.locationContainer}>
                    <Text style={styles.textGlobal}>GLOBAL</Text>
                    <Text style={styles.textRussia}>RUSSIA</Text>
                    <View style={styles.reloadContainer}>
                        <Icon 
                            name="md-refresh"
                            size={24}
                            color="red"
                        />
                    </View>
                </View>

                <Chart />

                <View style={styles.bottomCard}>
                    <View style={styles.bottomCol}>
                        <Text style={styles.textSymptoms}>SYMPTOMS</Text>
                        <View style={styles.infoContainer}>
                            <Text style={{ color: "#FFF"}}>i</Text>
                        </View>
                    </View>

                    <View style={styles.button}>
                        <Text style={styles.btnText}>See more graphs</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#FFF",
        flex: 1
    },
    headContainer: {
        marginHorizontal: 20,
        flexDirection: "row",
        marginTop: 40
    },
    humContainer: {
        width: "50%",
    },
    hum: {
        marginTop: -20,
        marginLeft: 5
    },
    profileContainer: {
        width: "50%",
        alignItems: "flex-end"
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    optionCard: {
        flexDirection: "row",
        alignItems: 'center',
        marginHorizontal: 110
    },
    optionCol: {
        backgroundColor: "#000",
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 2
    },
    textLinear: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "bold",
    },
    textLogarithmic: {
        color: "#b8b8aa",
        fontWeight: "bold",
        fontSize: 12,
        marginLeft: 15
    },
    locationContainer: {
        alignSelf: "center",
        flexDirection: "row",
        paddingHorizontal: 30,
        marginTop: 40,
        alignItems: "center"
    },
    textGlobal: {
        fontWeight: "bold",
        fontSize: 16,
        color: "red"
    },
    textRussia: {
        fontWeight: "bold",
        fontSize: 16,
        color: "A#6a706e",
        paddingHorizontal: 30
    },
    reloadContainer: {
        backgroundColor: "#FFF",
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 50, 
        elevation: 3
    },
    bottomCard: {
        backgroundColor: "#1c2732",
        height: 220,
        marginTop: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    bottomCol: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 20,

    },
    textSymptoms: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "bold"
    },
    infoContainer: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10
    },
    button:{
        borderRadius:15,
        borderColor:'red',
        borderWidth:1,
        marginHorizontal:30,
        paddingHorizontal:20,
        paddingVertical:15,
        alignItems:'center',
        marginTop:50,
        marginBottom:5
    },
    btnText:{
        color:"red",
        fontSize:16,
        fontWeight:'bold'
    }
})
