"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import CustomFormField, { FormFieldType } from "../components/CustomFormField/CustomFormField";
import Link from "next/link";
import { Lock, Mail } from "lucide-react";
import { LoginValidation } from "@/lib/validation";
import { useTranslations } from "next-intl";
import { Fragment, useState } from "react";
import PasskeyModal from "@/app/[locale]/(features)/login/components/passkey-modal/passkey-modal";

const LoginForm = () => {
  const t = useTranslations("LoginPage");

  const [showPasskey, setShowPasskey] = useState(false);

  const form = useForm<z.infer<typeof LoginValidation>>({
    resolver: zodResolver(LoginValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginValidation>) {
    const { email, password } = values;
    const isAdmin = email === "test.admin@test.com" && password === "123.admin";
    if (isAdmin) {
      setShowPasskey(true);
    }
  }

  return (
    <Fragment>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-2">
          <section className="mb-4">
            <h1 className="text-2xl">{t("hi_there")}</h1>
            <p className="text-muted-foreground text-sm">{t("enter_your_account")}</p>
          </section>
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label={t("email")}
            placeholder={t("enter_your_email")}
            icon={<Mail size={18} />}
          />
          <CustomFormField
            fieldType={FormFieldType.PASSWORD}
            control={form.control}
            name="password"
            label={t("password")}
            placeholder={t("enter_your_password")}
            icon={<Lock size={18} />}
          />
          <div className="flex items-center justify-end gap-2">
            <Link
              href=""
              className="text-muted-foreground hover:text-foreground cursor-pointer text-sm hover:underline"
            >
              {t("forgot_password")}
            </Link>
            <Button type="submit" className="w-[100px] cursor-pointer">
              {t("enter")}
            </Button>
          </div>
        </form>
      </Form>

      <Dialog open={showPasskey} onOpenChange={setShowPasskey}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Two-step verification</DialogTitle>
            <DialogDescription>
              Please enter the one-time password sent to your phone.
            </DialogDescription>
          </DialogHeader>
          <PasskeyModal />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default LoginForm;
