import React, { useState } from "react";
import { TextInput } from "react-native";
import { styles, TextInputContainer, ErrorText } from "./styles";

export const InputField = (props) => {
    const {
        placeholder,
        meta,
        input,
        multiline,
        height,
        keyboardType,
        onSubmitEditing,
        refLink,
        autoFocus,
    } = props;

    const [focus, setFocus] = useState(false);

    return (
        <TextInputContainer>
            <TextInput
                style={[styles.input, focus && styles.focusedInput]}
                placeholder={placeholder}
                onChange={input.onChange}
                defaultValue={input.value}
                multiline={multiline}
                height={height}
                keyboardType={keyboardType}
                onSubmitEditing={onSubmitEditing}
                ref={refLink}
                autoFocus={autoFocus}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
            {meta.error && meta.submitFailed && (
                <ErrorText>{meta.error}</ErrorText>
            )}
        </TextInputContainer>
    );
};
