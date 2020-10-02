import React from "react";
import { ActivityIndicator } from "react-native";
import { SubmitButtonContainer, SubmitButton, ButtonText } from "./styles";
import Colors from '../../constants/Color'

type IProps = {
    text: String,
    onPress: Function,
    loading: Boolean,
    backgroundColor: String
}
export const FormButton = ({
    text,
    onPress,
    loading,
    backgroundColor = Colors.Black,
}: IProps) => {
    return (
        <SubmitButtonContainer onPress={onPress}>
            <SubmitButton backgroundColor={backgroundColor}>
                {!loading ? (
                    <ButtonText>{text}</ButtonText>
                ) : (
                    <ActivityIndicator size="small" />
                )}
            </SubmitButton>
        </SubmitButtonContainer>
    );
};
