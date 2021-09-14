import React, { memo } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useTranslation } from 'react-i18next'
import Login from '@/components/Login/index'
// import styles from './index.module.scss'

/**
 * 首页
 * */
const Index: React.FC = () => {

  const { t } = useTranslation()

  const handleClick = () => {
    Taro.navigateTo({
      url: '/pages/mine/mine?username=Saul&age=25'
    })
  }

  return (
    <View className='index'>
      <Text>{t('global.helloWorld')}</Text>
      <Login />
      <Button onClick={handleClick}>跳转页面</Button>
    </View>
  )
}

export default memo(Index)
