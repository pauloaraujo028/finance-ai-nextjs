import { Input } from "@/components/ui/input";
import React, { forwardRef } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

export const MoneyInput = forwardRef(
  (props: NumericFormatProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <NumericFormat
        {...props}
        customInput={Input}
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        allowNegative={false}
        getInputRef={ref}
      />
    );
  },
);

MoneyInput.displayName = "MoneyInput";
