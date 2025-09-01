import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
// import { FormFieldType } from "./forms/PatientForm";
import Image from "next/image";
import "react-phone-number-input/style.css";
// import DatePicker from "react-datepicker";
import Calender from "../public/assets/icons/calendar.svg";
// import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/core";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
// import { Textarea } from "./ui/textarea";
// import { Checkbox } from "./ui/checkbox";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
  showPassword?: boolean;
  setShowPassword?: (value: boolean) => void;
  className?: string;
}

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const {
    iconSrc,
    fieldType,
    iconAlt,
    placeholder,
    showTimeSelect,
    dateFormat,
    renderSkeleton,
    className,
    showPassword,
    setShowPassword,
  } = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      const isPasswordField = props.name === "password";

      return (
        <div className="flex input-phone items-center flex-row-reverse">
          {props.name === "password" ? (
            <>
              {iconSrc && isPasswordField && (
                <Image
                  src={iconSrc}
                  height={24}
                  width={24}
                  alt={iconAlt || "icon"}
                  className="ml-2 cursor-pointer"
                  onClick={() =>
                    setShowPassword && setShowPassword(!showPassword)
                  }
                />
              )}
              <FormControl>
                <Input
                  placeholder={placeholder}
                  {...field}
                  className="shad-input"
                  type={isPasswordField && showPassword ? "text" : "password"}
                />
              </FormControl>
            </>
          ) : (
            <FormControl>
              <Input
                placeholder={placeholder}
                {...field}
                className="shad-input"
              />
            </FormControl>
          )}
        </div>
      );

    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="US"
            placeholder={placeholder}
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            onChange={(value) => field.onChange(value)} // ✅ Correct manual binding
            className="input-phone"
          />
        </FormControl>
      );

    default:
      break;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
