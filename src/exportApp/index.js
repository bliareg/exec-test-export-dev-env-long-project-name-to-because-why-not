import * as React from 'react';
import { onExport } from './onExport';

function ExportApp() {
  return (
    <button onClick={onExport}>
      Binary file export
    </button>
  );
}

export { ExportApp };
