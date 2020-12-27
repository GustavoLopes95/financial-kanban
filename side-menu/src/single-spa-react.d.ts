declare module 'single-spa-react/parcel' {
    import { Lifecycles } from 'single-spa-react';
  
    interface ParcelProps {
      // define here what props you need
      config: (() => Promise<Lifecycles>) | Lifecycles;
      wrapWith: string;
    }
  
    export default class Parcel extends React.Component<ParcelProps> {}
  }