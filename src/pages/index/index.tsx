import React, { memo } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import Login from '@/components/Login/index'
import styles from './index.module.scss'

/**
 * 首页
 * */
const Index: React.FC = () => {

  console.log(styles)

  const handleClick = () => {
    Taro.navigateTo({
      url: '/pages/mine/mine?username=Saul&age=25'
    })
  }

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Login />
      <Button onClick={handleClick}>跳转页面</Button>
    </View>
  )
}

export default memo(Index)
