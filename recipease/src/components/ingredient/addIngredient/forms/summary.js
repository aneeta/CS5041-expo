import { Divider, List, Typography } from 'antd';
import { Descriptions } from 'antd';
import { useContext } from 'react';
import { IngCtx } from '../../../../../Context';

export default function FormSummary(props) {
    const { inputs, setInputs } = useContext(IngCtx);

    return (
        // <Divider orientation="left">Ingredient Info</Divider>
        <Descriptions title="Ingredient Info">
            {Object.entries(inputs).map(
                ([k, v], i) => <Descriptions.Item label={k.toUpperCase()} key={k}>{v}</Descriptions.Item>)}
        </Descriptions>
    )
}
