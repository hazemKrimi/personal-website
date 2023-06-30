declare module '@mdx-js/react' {
  import * as React from 'react';

  export type Components = {
    [key]?: React.ComponentType<any>;
  };

  export interface MDXProviderProps {
    children: React.ReactNode;
    components?: Components;
  }

  export class MDXProvider extends React.Component<MDXProviderProps> {}
}
