import React from 'react';
import style from './styles.module.css';

interface IProps{
    width?: string | number;
    height?: string | number;
}
const Skeleton:React.FC<IProps> = ({width, height}) => {
  return (
    <div className={style.skeleton} style={{width , height}}></div>
  )
}

export { Skeleton };