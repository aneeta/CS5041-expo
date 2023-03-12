import { Button, message, Steps, theme } from 'antd';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';

import InfoForm from './forms/info';
import IngredientForm from './old_forms/ingredient';
import MethodForm from './forms/method';
import CustomStepper from '../../base/Stepper';
import IngForm from './forms/ingredient';

const steps = [
    {
        title: 'Info',
        content: <InfoForm />,
        // icon: <SolutionOutlined />,
    },
    {
        title: 'Ingredients',
        content: <IngForm />,
        // icon: <SolutionOutlined />,
    },
    {
        title: 'Method',
        content: <MethodForm />,
        // content: MethodForm(),
        icon: <SolutionOutlined />,
    },
    {
        title: 'Done',
        content: 'TODO done form',
        // icon: <SmileOutlined />,
    },
];

const RecipeSteps = () => {
    return (
        <CustomStepper steps={steps} />
    );
};

export default RecipeSteps;



// import { Steps } from 'antd';

// const Stepper = (props) => (
//   <Steps
//     items={[
//       {
//         title: 'Info',
//         status: props.status,
//         icon: <UserOutlined />,
//       },
//       {
//         title: 'Ingredients',
//         status: 'props.status,
//         icon: <SolutionOutlined />,
//       },
//       {
//         title: 'Method',
//         status: props.status,
//         icon: <LoadingOutlined />,
//       },
//       {
//         title: 'Done',
//         status: props.status,
//         icon: <SmileOutlined />,
//       },
//     ]}
//   />
// );

// export default Stepper;