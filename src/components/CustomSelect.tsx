import styled from 'styled-components';
import Select, { CSSObjectWithLabel, ControlProps, GroupBase } from 'react-select';

// export default function CustomSelect() {
//   return (
//     <Select
//       styles={{
//         control: (baseStyles, state) => ({
//           ...baseStyles,
//           borderColor: state.isFocused ? 'grey' : 'red',
//         }),
//       }}
//     />
//   );
// }

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var (--radius)',
      padding: '0.25rem',
      border: 'none',
      boxshadow: 'var (--shadow)',
      height: '50px',
    }),
    option: (
      baseStyles: CSSObjectWithLabel,
      state: ControlProps<unknown, false, GroupBase<unknown>>
    ) => ({}),
  },
})``;
