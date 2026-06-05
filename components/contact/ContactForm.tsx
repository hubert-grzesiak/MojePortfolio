"use client";

import { sendContactEmailAction } from "@app/actions/sendContactEmailAction";
import { cn } from "@lib/utils";
import { Send } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export interface ContactFormProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  confirmEmail?: string;
}

interface ContactFormComponentProps {
  className?: string;
  fieldClassName?: string;
  labelClassName?: string;
  submitClassName?: string;
  submitLabel?: string;
  onSuccess?: () => void;
}

const ContactForm = ({
  className,
  fieldClassName,
  labelClassName,
  submitClassName,
  submitLabel = "Send message",
  onSuccess,
}: ContactFormComponentProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormProps>();

  const onSubmit: SubmitHandler<ContactFormProps> = async (data) => {
    const lastSubmission = localStorage.getItem("last_submission");

    if (lastSubmission) {
      const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission, 10);

      if (timeSinceLastSubmission < 60000) {
        toast.error("Please wait a moment", {
          description:
            "You are sending messages too quickly. Please wait a minute.",
        });
        return;
      }
    }

    const result = await sendContactEmailAction(data);

    if (result.success) {
      localStorage.setItem("last_submission", Date.now().toString());
      toast.success("Message sent successfully!", {
        description: "I will get back to you as soon as possible.",
      });
      reset();
      onSuccess?.();
      return;
    }

    toast.error("Sending failed", {
      description: result.error || "Something went wrong. Please try again.",
    });
  };

  const inputClassName = cn(
    "h-14 w-full rounded-[18px] border border-white/15 bg-white/[0.04] px-4 text-[15px] text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/35 focus:bg-white/[0.07]",
    fieldClassName,
  );
  const textAreaClassName = cn(inputClassName, "min-h-[132px] resize-y py-4");
  const textLabelClassName = cn(
    "mb-2 block text-[13px] font-medium leading-5 text-white/70",
    labelClassName,
  );

  return (
    <form
      className={cn("space-y-4", className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label className={textLabelClassName} htmlFor="contact-name">
          What&apos;s your name?
        </label>
        <input
          id="contact-name"
          className={inputClassName}
          autoComplete="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-300">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className={textLabelClassName} htmlFor="contact-email">
          What&apos;s your email?
        </label>
        <input
          id="contact-email"
          type="email"
          className={inputClassName}
          autoComplete="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-300">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className={textLabelClassName} htmlFor="contact-message">
          Write something about your project goals and timeframe
        </label>
        <textarea
          id="contact-message"
          className={textAreaClassName}
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-300">
            {errors.message.message}
          </p>
        )}
      </div>

      <div>
        <label className={textLabelClassName} htmlFor="contact-subject">
          How should I reach you back?
        </label>
        <input
          id="contact-subject"
          className={inputClassName}
          placeholder="Phone number, email, LinkedIn..."
          {...register("subject", {
            required: "Preferred contact is required",
          })}
        />
        {errors.subject && (
          <p className="mt-1.5 text-xs text-red-300">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div className="pointer-events-none absolute -z-50 opacity-0">
        <label htmlFor="confirmEmail">Confirm Email</label>
        <input
          id="confirmEmail"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("confirmEmail")}
        />
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className={cn(
            "inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-[14px] font-semibold text-black transition-transform hover:translate-x-0.5 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto",
            submitClassName,
          )}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : submitLabel}
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
