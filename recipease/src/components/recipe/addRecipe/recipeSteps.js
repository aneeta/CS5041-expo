import { useEffect, useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';

import InfoForm from './forms/info';
import MethodForm from './forms/method';
import FormSummary from './forms/summary';

import CustomStepper from '../../base/Stepper';
import IngForm from './forms/ingredient';
import { RecipeCtx } from '../../../../Context';


const RecipeSteps = () => {

    const steps = [
        {
            title: 'Info',
            content: <InfoForm />
            // content: <InfoForm onChange={handleChange} />,
            // icon: <SolutionOutlined />,
        },
        {
            title: 'Ingredients',
            content: <IngForm />
            // content: <IngForm onChange={handleChange} />,
            // icon: <SolutionOutlined />,
        },
        {
            title: 'Method',
            content: <MethodForm />
            // content: <MethodForm onChange={handleChange} />,
            // content: MethodForm(),
            // icon: <SolutionOutlined />,
        },
        {
            title: 'Done',
            content: <FormSummary />
            // icon: <SmileOutlined />,
        },
    ];

    const [inputs, setInputs] = useState({})

    useEffect(() => {
        console.log("form", inputs)
    }, [inputs])


    return (
        <RecipeCtx.Provider value={{ inputs, setInputs }}>
            <CustomStepper steps={steps} data={inputs} formName={"Recipe"} clearFunc={setInputs} />
        </RecipeCtx.Provider>

    );
};

export default RecipeSteps;
