import FormEditor from './FormEditor';

export default {
  title: 'FormEditor',
  component: FormEditor
};

export const Default = () => <FormEditor questions={[{ label: 'Name', type: 'text' }]} onUpdate={() => {}} />;