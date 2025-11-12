import { KeyboardAvoidingView, Modal, ModalProps, Platform, StyleSheet, View } from "react-native";

type ModalFormReceitasProps = ModalProps & {
    isOpen: boolean;
    withInput?: boolean;
}

export const ModalFormReceita= ({ isOpen, withInput, children, ...rest }: ModalFormReceitasProps) => {

    const content = withInput ? (
        <KeyboardAvoidingView
            style={styles.KAV}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            {children}
        </KeyboardAvoidingView>
    ) : (
        <View style={styles.KAV}>
            {children}
        </View>
    )

    return (
            <Modal
                animationType="slide"
                style={styles.modal}
                visible={isOpen}
                {...rest}
            >
                {content}
            </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1
    },

    KAV: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: "#fffff",
    }
})