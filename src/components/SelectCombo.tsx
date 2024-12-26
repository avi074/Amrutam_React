import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import React from "react"

interface SelectComboProps {
  trigger?: React.ReactNode
  label: string
  options: Array<{ name: string; value: string }>
}

const SelectCombo: React.FC<SelectComboProps> = ({
  trigger,
  label,
  options,
}) => {
  return (
    <div className="min-w-40">
      <Select>
        <SelectTrigger className='w-full border border-primary bg-white'>
          {trigger}
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {trigger && <SelectLabel>{label}</SelectLabel>}
            {options.map((val, idx) => (
              <SelectItem key={label + "-opt-" + idx} value={val.value}>
                {val.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectCombo
