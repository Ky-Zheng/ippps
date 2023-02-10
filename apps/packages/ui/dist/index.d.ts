import * as React from 'react';

interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const AppShell: ({ children }: AppShellProps) => JSX.Element;

interface ICardProps {
    artist: string;
    title: string;
    date: string;
    price: string;
    dimensions_h: string;
    dimensions_l: string;
    imageurl: string;
}
declare const Card: ({ ...props }: ICardProps) => JSX.Element;

interface IProductCardProps {
    brand: string;
    description: string;
    price: string;
    salesprice: string;
    imageurl: string;
    path: string;
}
declare const ProductCard: ({ ...props }: IProductCardProps) => JSX.Element;

declare const Tabs: () => JSX.Element;

export { AppShell, Card, ProductCard, Tabs };
