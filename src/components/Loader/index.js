import React from 'react'
import { Modal, ActivityIndicator } from 'react-native'
import { ModalBackground, ActivityIndicatorHolder } from './styles'

type IProps = {
  isLoading: Boolean
}
export const SmartLoader = (props: IProps) => {
    const { isLoading, ...attributes } = props;

    return (
        <Modal
            transparent
            animationType={"none"}
            visible={isLoading}
            onRequestClose={() => {
                console.log("Noop");
            }}
        >
            <ModalBackground>
                <ActivityIndicatorHolder>
                    <ActivityIndicator animating={isLoading} size="large" />
                </ActivityIndicatorHolder>
            </ModalBackground>
        </Modal>
    );
};
