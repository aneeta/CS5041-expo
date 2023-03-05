import { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";

export default function TextField(label) {
    const [text, setText] = useState("");

    return (
        <TextInput
        label={label}
        value={text}
        onChangeText={text => setText(text)}

        />
    )
}