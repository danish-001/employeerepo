import { Dimensions, View, TouchableOpacity } from 'react-native'
import { isIPhoneX } from '../../../../constants/helper'
import Colors from '../../../../constants/Color'
import styled from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons'

const { height } = Dimensions.get('window')

const Body = styled(View)`
  display: flex;
`

const AddButton = styled(TouchableOpacity)`
  width: 74;
  height: 74;
  border-radius: 74;
  position: absolute;
  top: ${isIPhoneX() ? height - 200 : height - 170};
  right: 30;
  background-color: ${Colors.gray};
  justify-content: center;
  align-items: center;
`

const PlusIcon = styled(MaterialIcons)`
  color: ${Colors.white};
`
export { Body, AddButton, PlusIcon }
