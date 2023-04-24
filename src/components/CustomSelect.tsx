import styled from 'styled-components';
import Select, { CSSObjectWithLabel, GroupBase, OptionProps } from 'react-select';

export default styled(Select).attrs({
  styles: {
    control: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radius)',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
    }),
    option: (
      baseStyles: CSSObjectWithLabel,
      props: OptionProps<unknown, false, GroupBase<unknown>>
    ) => ({
      ...baseStyles,
      cursor: 'pointer',
      color: 'var(--colors-text)',
      backgroundColor: props.isSelected ? 'var(--colors-background)' : 'var(--colors-ui-base)',
    }),
  },
})`
  width: 200px;
  border-radius: var(--radius);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: var(--colors-text) !important;
  }

  & > div[id] {
    background-color: var(--colors-ui-base);
  }
`;
