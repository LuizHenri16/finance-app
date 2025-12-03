import { TouchableOpacity } from "react-native"
import { Icon } from "react-native-elements"


interface IconButtonProps {
    icon: string,
    type?: string,
    color?: string
    navigation?: () => void
}

export const IconButton = ({icon, type, color, navigation, ...rest}: IconButtonProps) => {
    return (
        <TouchableOpacity onPress={navigation}>
            <Icon name={icon} color={color} type={type} size={32} />
        </TouchableOpacity>
    )
}