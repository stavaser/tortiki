import React, { useState } from 'react';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';

export function useScreenSpinner(
  Component = ScreenSpinner,
  props = { size: 'large' }
) {
  const screenSpinner = <Component {...props} />;
  const [spinner, setSpinner] = useState(screenSpinner);

  const showSpinner = () => setSpinner(screenSpinner);
  const hideSpinner = () => setSpinner(null);

  return [spinner, hideSpinner, showSpinner];
}
