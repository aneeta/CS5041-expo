import CustomStepper from "../../base/Stepper";

const steps = [
    {
        title: 'Info',
        content: 'TODO',
    },
    {
        title: 'Done',
        content: 'TODO done form',
    },
];

const IngSteps = () => {
    return (
        <CustomStepper steps={steps} />
    );
}

export default IngSteps;
