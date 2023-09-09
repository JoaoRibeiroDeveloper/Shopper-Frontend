import { forwardRef, InputHTMLAttributes } from 'react';

import * as Styled from './styles';

interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputFile = forwardRef<HTMLInputElement, InputFileProps>((props, ref) => {
  return <Styled.Input type="file" {...props} ref={ref} />;
});

InputFile.displayName = 'InputFile';

export default InputFile;
