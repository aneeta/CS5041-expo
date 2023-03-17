import { useEffect, useState } from 'react';

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
        },
        {
            title: 'Ingredients',
            content: <IngForm />
        },
        {
            title: 'Method',
            content: <MethodForm />
        },
        {
            title: 'Done',
            content: <FormSummary />
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
