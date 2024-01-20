import { RotatingTriangles } from "react-loader-spinner";
import loaderCss from './Loader.module.css'

export const Loader = () => {
  return (
    <div className={loaderCss.wrapper}>
    <RotatingTriangles
        wrapperClass={loaderCss.loaderCss}
        // wrapperStyle={customWrapperStyle}
        colors={['#FFA600F5', '#343434', '#FFFFFF']}
        height={160}
        width={160}/>
  </div>)
}