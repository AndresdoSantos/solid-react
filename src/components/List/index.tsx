import { ListItem } from './components/ListItem';

interface IListProps {
  products: string[];
}

export function List({ products }: IListProps) {
  return (
    <ul>
      {products.map((product) => (
        <ListItem key={product} product={product} />
      ))}
    </ul>
  );
}
