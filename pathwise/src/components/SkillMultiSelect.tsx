// Requires: npm install react-select @types/react-select
import Select, { MultiValue, Options, StylesConfig } from 'react-select';

interface SkillMultiSelectProps {
  options: string[];
  value: string[];
  onChange: (selected: string[]) => void;
}

interface OptionType {
  value: string;
  label: string;
}

export default function SkillMultiSelect({ options, value, onChange }: SkillMultiSelectProps) {
  const selectOptions: OptionType[] = options.map(skill => ({ value: skill, label: skill }));

  return (
    <Select<OptionType, true>
      isMulti
      options={selectOptions}
      value={selectOptions.filter((opt: OptionType) => value.includes(opt.value))}
      onChange={(selected: MultiValue<OptionType>) => onChange(selected ? selected.map(opt => opt.value) : [])}
      placeholder="Select roles"
      className="text-gray-700"
      classNamePrefix="react-select"
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      styles={
        {
          control: (base: React.CSSProperties) => ({ ...base, minHeight: '44px', borderColor: '#cbd5e1', boxShadow: 'none' }),
          multiValue: (base: React.CSSProperties) => ({ ...base, backgroundColor: '#e0f2fe', color: '#0369a1' }),
          multiValueLabel: (base: React.CSSProperties) => ({ ...base, color: '#0369a1' }),
          multiValueRemove: (base: React.CSSProperties) => ({ ...base, color: '#0369a1', ':hover': { backgroundColor: '#bae6fd', color: '#0ea5e9' } }),
          option: (base: React.CSSProperties, state: { isSelected: boolean; isFocused: boolean }) => ({
            ...base,
            backgroundColor: state.isSelected ? '#e0f2fe' : state.isFocused ? '#f1f5f9' : 'white',
            color: state.isSelected ? '#0369a1' : '#334155',
            fontWeight: state.isSelected ? 600 : 400,
          }),
        } as StylesConfig<OptionType, true>
      }
    />
  );
} 