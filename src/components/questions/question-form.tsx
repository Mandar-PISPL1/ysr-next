import { useTranslation } from 'next-i18next';
import * as yup from 'yup';
import Button from '@/components/ui/button';
import { useModalState } from '@/components/ui/modal/modal.context';
import { Form } from '@/components/ui/forms/form';
import TextArea from '@/components/ui/forms/text-area';
import { useCreateQuestion } from '@/framework/product';
import { CreateQuestionInput } from '@/types';
import Label from '../ui/forms/label';
import Input from '../ui/forms/input';

const questionFormSchema = yup.object().shape({
  question: yup.string().required('error-description-required'),
});

export default function QuestionForm() {
  const { t } = useTranslation('common');
  const { data } = useModalState();
  const { createQuestion, isLoading } = useCreateQuestion();
  const onSubmit = (values: Pick<CreateQuestionInput, 'question'>) => {
    createQuestion({
      product_id: data.product_id,
      shop_id: data.shop_id,
      question: values.question,
    });
  };
  return (
    <div className="flex h-full min-h-screen w-screen flex-col bg-light p-7 md:h-auto md:min-h-0 md:max-w-[590px] md:justify-center md:rounded-xl">
      <h3 className="mb-6 text-center text-lg font-semibold text-heading">
        {t('text-ask-question')}
      </h3>
      <Form<Pick<CreateQuestionInput, 'question'>>
        onSubmit={onSubmit}
        validationSchema={questionFormSchema}
      >
        {({ register, formState: { errors } }) => (
          <>
            <div className="mb-5">
              <Label className="mb-2">Name</Label>
              <div className="w-auto">
                <Input name="Name" placeholder="Enter Your Name" />
              </div>
            </div>
            <div className="mb-5">
              <Label className="mb-2">Email</Label>
              <div className="w-auto">
                <Input name="Email" placeholder="Enter Your Email" />
              </div>
            </div>
            <TextArea
              {...register('question')}
              variant="outline"
              className="mb-5"
              error={t(errors.question?.message!)}
            />

            <div className="flex items-center justify-between">
              {/* <span className="text-xs font-semibold leading-relaxed text-gray-500 ltr:pr-5 rtl:pl-5">
                {t('text-question-additional-info')}
              </span> */}
              <Button
                className="h-11 w-auto sm:h-12"
                loading={isLoading}
                disabled={isLoading}
              >
                Submit Question
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}
