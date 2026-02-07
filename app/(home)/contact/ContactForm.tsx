"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Typography from "@components/shared/Typography";
import {sendContactEmailAction} from "@app/actions/sendContactEmailAction"
import { toast } from "sonner"; // Import powiadomień

export interface ContactFormProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  confirmEmail?: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormProps>();

  const onSubmit: SubmitHandler<ContactFormProps> = async (data) => {
    // Client-side Rate Limiting
    const lastSubmission = localStorage.getItem("last_submission");
    if (lastSubmission) {
      const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission, 10);
      if (timeSinceLastSubmission < 60000) {
        // 60 seconds
        toast.error("Please wait a moment", {
          description: "You are sending messages too quickly. Please wait a minute.",
        });
        return;
      }
    }

    // Wywołujemy Server Action
    const result = await sendContactEmailAction(data);

    if (result.success) {
      localStorage.setItem("last_submission", Date.now().toString());
      toast.success("Message sent successfully!", {
        description: "I will get back to you as soon as possible.",
      });
      reset(); // Czyścimy formularz tylko po sukcesie
    } else {
      toast.error("Sending failed", {
        description: result.error || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {/* NAME INPUT */}
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

      {/* EMAIL INPUT */}
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

      {/* MESSAGE TEXTAREA */}
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

      {/* SUBJECT / CONTACT TYPE INPUT */}
      <div className="md:pb-[28px]">
        <Label htmlFor="contact_type" className="flex flex-wrap gap-1">
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

      {/* HONEYPOT - Hidden field to trap bots */}
      <div className="absolute opacity-0 -z-50 select-none pointer-events-none">
        <label htmlFor="confirmEmail">Confirm Email</label>
        <input
          id="confirmEmail"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("confirmEmail")}
        />
      </div>

      {/* SUBMIT BUTTON */}
      <div className="flex w-full justify-end">
        <Button
          type="submit"
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