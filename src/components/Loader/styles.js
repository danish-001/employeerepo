import Colors from '../../constants/Color'
import styled from 'styled-components'

const ModalBackground = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-color: #00000040;
`

const ActivityIndicatorHolder = styled.View`
  background-color: ${Colors.white};
  height: 100px;
  width: 100px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export { ModalBackground, ActivityIndicatorHolder }
