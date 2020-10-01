import React from "react";
import { ActivityIndicator } from "react-native";
import { SubmitButtonContainer, SubmitButton, ButtonText } from "./styles";

export const FormButton = ({
    text,
    onPress,
    loading,
    backgroundColor = "#000",
}) => {
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