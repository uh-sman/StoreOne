"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Flag from "react-world-flags";
import { countries } from "@/constants/utils";

const FlagComponent = () => {
  const [country, setCountry] = useState({ name: "GBR", code: "826" });
  console.log("code", country.code);
  return (
    <div className="flex items-center h-[50px]">
      <Flag
        code={country.code}
        fallback={<span>🌐</span>}
        className="w-[32px] h-[32px] rounded-full overflow-hidden object-cover"
      />

      <Select
        onValueChange={(value) => {
          const selected = countries.find((c) => c.name === value);
          if (selected) {
            setCountry(selected);
          }
        }}
        value={country.name}
      >
        <SelectTrigger className="w-[30px] border-none shadow-none text-black outline-none">
          {/* <SelectValue placeholder="Select Country" /> */}
        </SelectTrigger>
        <SelectContent className="outline-none">
          {countries.map(({ name, code }) => (
            <SelectItem key={name} value={name}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FlagComponent;
