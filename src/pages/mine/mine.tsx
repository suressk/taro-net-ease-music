import React, { memo } from 'react'
import { View, Text } from '@tarojs/components'
import {useRouter} from '@tarojs/taro'
import './mine.scss'

const Mine: React.FC = () => {
  const {params} = useRouter()

  return (
    <View className='mine'>
      <Text>Mine!</Text>
      <Text>Information:{params.username}, {params.age}</Text>
    </View>
  )
}

export default memo(Mine)
