import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



interface SelectProps{
  mapOption:Array<{name:string, value:string}>
  selectLabel:string
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name: string, optioinSelected: string[], theme: Theme) {
  return {
    fontWeight:
      optioinSelected.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

 const SelectComponent:React.FC<SelectProps> =({
mapOption,
selectLabel
 }) => {
  const theme = useTheme();
  const [optioinSelected, setOptioinSelected] = React.useState<string[]>([mapOption[0].value]);

  const handleChange = (event: SelectChangeEvent<typeof optioinSelected>) => {
    const {
      target: { value },
    } = event;
    
    setOptioinSelected(
      typeof value === 'string' ? [value] : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel id="selector-option-name-label">{selectLabel}</InputLabel>
        <Select
          labelId="selector-option-name-label"
          id="selector-option-name"
          value={optioinSelected}
          onChange={handleChange}
          input={<OutlinedInput label={selectLabel} />}
          MenuProps={MenuProps}
        >
          {mapOption.map(({name,value}) => (
            <MenuItem
              key={name}
              value={value}
              style={getStyles(name, optioinSelected, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectComponent