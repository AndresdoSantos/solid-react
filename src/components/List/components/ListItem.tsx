interface IListItemProps {
  product: string;
}

export function ListItem({ product }: IListItemProps) {
  return <li>{product}</li>;
}
