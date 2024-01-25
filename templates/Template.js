import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    text1: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 20,
        color: "#33aeb3",
    },
    text2: {
        fontSize: 32,
        textAlign: "left",
        marginBottom: 10,
        color: "#aa3eb1",
    },
});

// Create Document Component
const Template = ({ title, description, userData }) => {
    console.log({ title, description });
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.text1}>{title}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.text2}>{description}</Text>
                </View>
            </Page>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.text1}>{userData.name}</Text>
                    <Text style={styles.text2}>{userData.phone}</Text>
                </View>
            </Page>
        </Document>
    );
};

export default Template;
