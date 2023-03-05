import { Button, message, Steps, theme } from 'antd';
import { useState } from 'react';




function CustomStepper(props) {
    const { token } = theme.useToken();
    const contentStyle = {
        lineHeight: '500px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };

    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = props.steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    return (
        <>
            <Steps current={current} items={items} />
            <div style={contentStyle}>{props.steps[current].content}</div>
            <div
                style={{
                    marginTop: 24,
                    float: 'right'
                }}
            >
                {current > 0 && (
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => prev()}
                    >
                        Previous
                    </Button>
                )}
                {current < props.steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === props.steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
            </div>
        </>
    );
};
export default CustomStepper;
