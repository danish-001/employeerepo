import { isIPhoneX } from '../../constants/helper'
import Colors from '../../constants/Color'

import styled from 'styled-components'

const SubmitButtonContainer = styled.TouchableOpacity`
  padding-horizontal: 30;
`

const SubmitButton = styled.View`
  border-radius: 8;
  margin-top: 20;
  padding-horizontal: 14;
  padding-vertical: 12;
  background-color: ${Colors.Black};
`

const ButtonText = styled.Text`
  color: ${Colors.white};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${isIPhoneX() ? 20 : 17};
  text-align: center;
`

export { SubmitButtonContainer, SubmitButton, ButtonText }
