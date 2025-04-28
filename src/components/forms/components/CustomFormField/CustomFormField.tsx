import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { Control } from "react-hook-form";

export enum FormFieldType {
  INPUT = "input",
  PASSWORD = "password",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

interface CustomFormFieldProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
  fieldDescription?: string;
  icon?: React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomFormFieldProps }) => {
  const { fieldType, placeholder, disabled } = props;
  const [showPassword, setShowPassword] = useState(false);

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <FormControl>
          <Input
            placeholder={placeholder}
            {...field}
            disabled={disabled}
            className={`shad-input ${props.icon && "pl-8"}`}
          />
        </FormControl>
      );
    case FormFieldType.PASSWORD:
      return (
        <div>
          <FormControl>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              {...field}
              disabled={disabled}
              className={`shad-input pr-10 ${props.icon && "pl-8"}`}
            />
          </FormControl>
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="text-muted-foreground absolute inset-y-0 right-2 flex cursor-pointer items-center"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      );
  }
};

const CustomFormField = (props: CustomFormFieldProps) => {
  const { control, fieldType, name, label, fieldDescription } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && <FormLabel>{label}</FormLabel>}
          <div className="relative">
            {props.icon && (
              <div className="text-muted-foreground pointer-events-none absolute inset-y-0 left-0 ml-2 flex items-center">
                {props.icon}
              </div>
            )}
            <RenderField field={field} props={props} />
          </div>
          <FormDescription>{fieldDescription}</FormDescription>
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
