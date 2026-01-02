'use client';

import { ReactNode } from 'react';
import ClickWaterEffect from './Realistic3DWaterEffect';
import FallingIconss from './FallingIconss';

interface CursorWrapperProps {
  children: ReactNode;
}

export default function CursorWrapper({ children }: CursorWrapperProps) {
  return (
    <>
      <ClickWaterEffect />
      <FallingIconss />
      {children}
    </>
  );
}