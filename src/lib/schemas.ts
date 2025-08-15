import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  interest: z.string().min(1, {
    message: "Please select an interest.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

// Email form schema - currently only contact form
export const emailFormSchema = contactFormSchema;

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type EmailFormValues = z.infer<typeof emailFormSchema>;
