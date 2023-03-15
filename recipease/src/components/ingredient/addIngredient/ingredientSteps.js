import { useEffect, useState } from 'react';
import CustomStepper from "../../base/Stepper";
import InfoForm from "./forms/info";
import FormSummary from './forms/summary';

import { IngCtx } from '../../../../Context';


const IngSteps = () => {
    const [inputs, setInputs] = useState({});

    const steps = [
        {
            title: 'Info',
            content: <InfoForm />,
        },
        {
            title: 'Done',
            content: <FormSummary />,
        },
    ];

    useEffect(() => {
        console.log("form", inputs)
    }, [inputs])

    return (
        <IngCtx.Provider value={{ inputs, setInputs }}>
            <CustomStepper steps={steps} data={inputs} formName={"Ingredients"} clearFunc={setInputs} />
        </IngCtx.Provider>

    );
}

export default IngSteps;
