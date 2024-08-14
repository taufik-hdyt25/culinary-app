import { View } from "react-native"

type Props ={
    width?: number
    height?: number
}
const Gap: React.FC<Props> = ({height,width}):JSX.Element => {
    return (
        <View style={{
            height: height ?? 0,
            width: width ?? 0

        }} />
    )
}

export default Gap