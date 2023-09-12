declare module "*.svg" {
    export const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    const src: string;
    export default src;
}
