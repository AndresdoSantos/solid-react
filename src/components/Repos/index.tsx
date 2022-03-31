import { useFetch } from '../../hooks/useFetch';

// This component should only care about rendering the data, not where it comes from.
export function Repos() {
  /** This is the content to explains dependency inversion principle */
  const data = useFetch('https://api.github.com/orgs/Rocketseat/repos');

  return (
    <>
      <h1>Repos</h1>
      <ul>
        {data.map((item: { id: number; full_name: string }) => (
          <li key={item.id}>{item.full_name}</li>
        ))}
      </ul>
    </>
  );
}
