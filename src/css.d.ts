declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}
  
declare module '*.webp'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
  