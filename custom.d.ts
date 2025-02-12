// Declare modules for CSS files
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
