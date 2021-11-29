import { Props as ProductCardProps } from '../components/ProductCard';


export interface Product {
    id: string;
    title: string;
    img?: string;
}


export interface ProductContextProps {
    counter: number;
    increaseBy: ( value:number ) => void;
    product: Product
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps) : JSX.Element,
    
    Title: (props: {title?: string, className?:string}) => JSX.Element,
    Image: (props: {img?:string, className?: string}) => JSX.Element,
    Buttons: (props: {className?:string}) => JSX.Element

}