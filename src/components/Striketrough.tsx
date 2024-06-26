import React, { useState } from 'react'
import {Svg, Line} from "react-native-svg"
import {View} from "react-native"

/**
 * A React Functional Component 
 * @param gridState The 
 * @returns 
 */
export default function Striketrough({gridState, firstIndex, secondIndex}:{gridState: DimentionalType, firstIndex: number, secondIndex: number}) {
  const [length, setLength] = useState<number>(0)
  const xOne = gridState.inner[firstIndex][secondIndex].active!.xOne
  const xTwo = gridState.inner[firstIndex][secondIndex].active!.xTwo
  const yOne = gridState.inner[firstIndex][secondIndex].active!.yOne
  const yTwo = gridState.inner[firstIndex][secondIndex].active!.yTwo

  return (
    <View style={{width: "100%", height: "100%", position: 'absolute'}} onLayout={(e) => {setLength(e.nativeEvent.layout.height)}}>
      <Svg width={length} height={length}>
        <Line x1={xOne * length/3 + length/6} x2={xTwo  * length/3  + length/6} y1={yOne  * length/3 +  length/6} y2={yTwo  * length/3 + length/6} stroke={"#FED049"} strokeLinecap='round' strokeWidth={5}/>
      </Svg>
    </View>
  )
}
