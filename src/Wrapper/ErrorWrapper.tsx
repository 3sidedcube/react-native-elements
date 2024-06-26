import React, { useEffect, useState } from 'react'
import { StyleProp, View, ViewStyle, TextStyle } from 'react-native'
import { color, t } from 'react-native-tailwindcss'
import { CombinedError } from 'urql'

import RoundedButton from '../Button/Rounded'
import Icon from '../Icon'
import Txt from '../Txt'
import OptionalWrapper from './OptionalWrapper'

export type ErrorWrapperProps = {
  /** Error name */
  title: string
  /** URQL Error */
  error?: CombinedError
  /** The rest of the page elements */
  children: React.ReactNode
  /** Action to be take on closing the error */
  onClose?: () => void
  /** Container style */
  style?: StyleProp<ViewStyle>
  /** Text style */
  textStyle?: StyleProp<TextStyle>
  /** If false, the component will not be displayed */
  show?: boolean
}

const styles = {
  title: {
    container: [
      t.flex,
      t.flexRow,
      t.itemsCenter,
      t.itemsCenter,
      t.justifyStart,
      t.mB2,
    ],
    text: [t.mL2, t.mY4, t.textXl, t.fontSans, t.textBlack, t.selfStart],
  },
  messages: {
    container: [t.mB2],
    text: [t.textBlack, t.selfStart],
  },
}

const ErrorWrapper = ({
  title,
  error,
  children,
  onClose,
  style = [t.p4],
  textStyle,
  show,
}: ErrorWrapperProps) => {
  const [messages, setMessages] = useState<string[]>([])
  const [showError, setShowError] = useState<boolean>(false)

  useEffect(() => {
    if (show !== undefined) setShowError(show)
  }, [show])

  useEffect(() => {
    if (error) console.warn(error)

    const messages = new Set<string>()
    if (error?.graphQLErrors)
      error.graphQLErrors.forEach(({ message, extensions }) => {
        switch (extensions?.code) {
          case 'INTERNAL_SERVER_ERROR':
            messages.add(
              'Looks like something went wrong, please try again later.'
            )
            break
          case 'UNAUTHENTICATED':
            break
          default:
            messages.add(extensions?.message ?? message)
        }
      })
    else if (error?.networkError?.message)
      messages.add(error.networkError.message)
    else if (error?.message) messages.add(error.message)

    setShowError(messages.size > 0)
    setMessages([...messages.values()])
  }, [error])

  if (!showError) return <>{children}</>
  return (
    <View style={style}>
      {/* TODO: Wrap this with a card */}
      <View style={styles.title.container}>
        <Icon
          type='font'
          fontName='Ionicons'
          name='warning-outline'
          color={color.red500}
          size={35}
        />

        <Txt style={[styles.title.text, textStyle]}>{title}</Txt>
      </View>
      <View style={styles.messages.container}>
        {messages.map((message) => (
          <Txt key={message} style={[styles.messages.text, textStyle]}>
            {message}
          </Txt>
        ))}
      </View>
      <OptionalWrapper data={onClose}>
        <RoundedButton onPress={onClose} style={[t.mT4]}>
          Close
        </RoundedButton>
      </OptionalWrapper>
    </View>
  )
}

export default ErrorWrapper
