/*
  UTTT
  Andrew Mainella
  22 September 2024
*/
import React from 'react';
import { View, Text, DimensionValue } from 'react-native';

export default function GlitchComponent({text, animated, fontSize, justifyText, width, height}:{text: string, animated: boolean, fontSize: number, justifyText?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined, width?:  DimensionValue | undefined, height?: DimensionValue | undefined}) {
  
  if (animated) {
    return (
      <View style={{alignItems: "center", justifyContent: justifyText, width: width, height: height}}>
        <Text selectable={false} style={{fontSize: fontSize, fontFamily: "BarlowCondensed", textTransform: "uppercase", fontWeight: "bold", position: "absolute", textAlign: "center"}}>{text}</Text>
        <Text selectable={false} style={{fontSize: fontSize, fontFamily: "BarlowCondensed", textTransform: "uppercase", fontWeight: "bold", position: "absolute",  color: "#00fffc", zIndex: -1, transform: [{translateX: -2}, {translateY: 2}], textAlign: "center"}}>{text}</Text>
        <Text selectable={false} style={{fontSize: fontSize, fontFamily: "BarlowCondensed", textTransform: "uppercase", fontWeight: "bold", position: "absolute",  color: "#fc00ff", zIndex: -2, transform: [{translateX: 2}, {translateY: -4}], textAlign: "center"}}>{text}</Text>
        <Text selectable={false} style={{fontSize: fontSize, fontFamily: "BarlowCondensed", textTransform: "uppercase", fontWeight: "bold", position: "absolute",  color: "#fffc00", zIndex: -3, transform: [{translateX: 2}, {translateY: 2}], textAlign: "center"}}>{text}</Text>
      </View>
    )
  }

  return (
    <View style={{alignItems: "center", justifyContent: justifyText, width: width, height: height}}>
      <Text selectable={false} style={{fontSize: fontSize, fontFamily: "BarlowCondensed", textTransform: "uppercase", fontWeight: "bold", position: "absolute", textAlign: "center"}}>{text}</Text>
      <Text selectable={false} style={{fontSize: fontSize, fontFamily: "BarlowCondensed", textTransform: "uppercase", fontWeight: "bold", position: "absolute",  color: "#00fffc", zIndex: -1, transform: [{translateX: -2}, {translateY: 2}], textAlign: "center"}}>{text}</Text>
      <Text selectable={false} style={{fontSize: fontSize, fontFamily: "BarlowCondensed", textTransform: "uppercase", fontWeight: "bold", position: "absolute",  color: "#fc00ff", zIndex: -2, transform: [{translateX: 2}, {translateY: -4}], textAlign: "center"}}>{text}</Text>
      <Text selectable={false} style={{fontSize: fontSize, fontFamily: "BarlowCondensed", textTransform: "uppercase", fontWeight: "bold", position: "absolute",  color: "#fffc00", zIndex: -3, transform: [{translateX: 2}, {translateY: 2}], textAlign: "center"}}>{text}</Text>
    </View>
  )
}