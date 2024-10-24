"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Typography from "@components/shared/Typography";
// import { sendContactEmailAction } from "@/lib/actions/sendContactEmail";

export interface ContactFormProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormProps>();

  const onSubmit: SubmitHandler<ContactFormProps> = (data) => {
    // sendContactEmailAction(data);
    reset();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="name">
          <Typography
            className="pb-2 text-black-300 dark:text-white-900"
            variant={"p-regular"}
          >
            What&apos;s your name?
          </Typography>
        </Label>
        <Input
          id="name"
          className="h-[80px] rounded-[20px]"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email">
          <Typography
            className="pb-2 text-black-300 dark:text-white-900"
            variant={"p-regular"}
          >
            What&apos;s your email?
          </Typography>
        </Label>
        <Input
          id="email"
          type="email"
          className="h-[80px] rounded-[20px]"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">
          <Typography
            className="pb-2 text-black-300 dark:text-white-900"
            variant={"p-regular"}
          >
            Write something about your project goals and timeframe
          </Typography>
        </Label>
        <Textarea
          id="message"
          className="min-h-[150px] rounded-[20px]"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>
      <div className="md:pb-[28px]">
        <Label htmlFor="contact_type" className="flex gap-1">
          <Typography
            className="pb-2 text-black-300 dark:text-white-900"
            variant={"p-regular"}
          >
            How to reach out to you back?
          </Typography>
          <Typography
            as="span"
            variant={"p-regular"}
            className="text-black-400"
          >
            eg. phone number or email
          </Typography>
        </Label>
        <Input
          id="contact_type"
          className="h-[80px] rounded-[20px]"
          {...register("subject", { required: "Subject is required" })}
        />
        {errors.subject && (
          <p className="mt-1.5 text-xs text-red-500">
            {errors.subject.message}
          </p>
        )}
      </div>
      <div className="flex w-full justify-end">
        <Button
          className="bottom-0 h-[47px] w-full rounded-full bg-primary-light px-2 py-[14px] hover:bg-primary-light/90 dark:bg-primary-dark dark:hover:bg-primary-dark/90 md:h-[69px] md:max-w-[186px] md:px-3 md:py-5"
          disabled={isSubmitting}
        >
          <Typography className="flex items-center gap-2.5 text-center text-[14px] font-semibold leading-[22px] text-white-900 md:text-[18px] md:leading-[29px]">
            {isSubmitting ? "Sending..." : "Send"}
          </Typography>
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
