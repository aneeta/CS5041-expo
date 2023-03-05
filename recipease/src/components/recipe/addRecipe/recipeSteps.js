import { Button, message, Steps, theme } from 'antd';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';

import InfoForm from './forms/info';
import IngredientForm from './old_forms/ingredient';
import MethodForm from './old_forms/method';
import CustomStepper from '../../base/Stepper';

const steps = [
    {
        title: 'Info',
        content: <InfoForm />,
        // icon: <SolutionOutlined />,
    },
    {
        title: 'Ingredients',
        // content: IngredientForm(),
        // icon: <SolutionOutlined />,
    },
    {
        title: 'Method',
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