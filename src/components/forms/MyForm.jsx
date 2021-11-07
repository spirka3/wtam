import React, { useEffect } from "react";
import { BsExclamationTriangle } from "react-icons/bs";
import { useForm } from "react-hook-form";
import {
  Button,
  Form as F,
  FormControl,
  FormGroup,
  FormLabel,
  InputGroup,
} from "react-bootstrap";

import { useYupResolver } from "../../hooks/useYupResolver";
import * as Yup from "yup";
import { upperFirst } from "../../utils/functions";

export const Error = ({ error }) => {
  if (!error) return null;
  return (
    <p style={{ color: "red" }}>
      <BsExclamationTriangle /> {error}
    </p>
  );
};

// src: https://react-hook-form.com/advanced-usage/#SmartFormComponent
export function Form({
  defaultValues,
  children,
  onSubmit,
  handleChange,
  validationSchema,
  activeModule,
  origin,
  setOrigin,
  isRestored,
  ...rest
}) {
  const resolver = useYupResolver(validationSchema || Yup.object({}));
  const methods = useForm({
    resolver,
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  useEffect(() => {
    if (!origin || !activeModule) return;
    if (origin._id !== activeModule._id || isRestored) {
      reset(defaultValues);
      setOrigin(activeModule);
    }
  }, [activeModule]);

  const renderChild = (child) => {
    if (!child) return null;

    const childName = child.props?.name;
    const onChange = child.props?.onChange || handleChange;
    return (
      <>
        {childName
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                onChange: onChange,
                register: methods.register,
                key: child.props.name,
              },
            })
          : child}
        {errors[childName] && <Error error={errors[childName].message} />}
      </>
    );
  };

  return (
    <F onSubmit={handleSubmit(onSubmit)} {...rest}>
      {Array.isArray(children) ? children.map(renderChild) : children}
    </F>
  );
}

export function Input({
  register,
  label,
  placeholder,
  type = "text",
  prepend,
  ...rest
}) {
  label = label || rest.name;
  placeholder = placeholder ? placeholder : `Enter ${label}`;

  return (
    <FormGroup style={{ marginBottom: "1.5rem" }}>
      <FormLabel>{upperFirst(label)}</FormLabel>
      {prepend ? (
        <InputGroup className="mb-2">
          <InputGroup.Prepend>
            <InputGroup.Text>{prepend}</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type={type}
            placeholder={placeholder}
            ref={register}
            {...rest}
          />
        </InputGroup>
      ) : (
        <FormControl
          type={type}
          placeholder={placeholder}
          ref={register}
          {...rest}
        />
      )}
    </FormGroup>
  );
}

export function Select({ register, options, label, ...rest }) {
  label = label || rest.name;

  const selectOptions = () => {
    return (
      <>
        <option hidden value="">
          Vyber moznost
        </option>
        {options.map((value, i) => (
          <option key={`${value}_${i}`} value={value}>
            {value}
          </option>
        ))}
      </>
    );
  };

  return (
    <FormGroup style={{ marginBottom: "1.5rem" }}>
      <FormLabel>{upperFirst(label)}</FormLabel>
      <FormControl as="select" label={label} ref={register} {...rest}>
        {selectOptions()}
      </FormControl>
    </FormGroup>
  );
}

export function Submit({ register, variant = "dark", ...rest }) {
  return (
    <Button type="submit" className="btn-block" variant={variant} {...rest} />
  );
}
