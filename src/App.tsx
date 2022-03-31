import { Input } from './components/Input';
import { List } from './components/List';
import { ModalHolder } from './components/ModalHolder';
import { Repos } from './components/Repos';
import { UserAdmin } from './components/User/Admin';
import { SuperUserAdmin } from './components/User/SuperUserAdmin';

function App() {
  /** This is the content to explains single-principle responsibility */
  const products = ['Nike', 'Samsung', 'Notebook'];

  /** This is the content to explains open-closed principle */
  const user: { type: 'admin' | 'superAdmin' } = { type: 'admin' };

  const userByTypes = {
    admin: <UserAdmin />,
    superAdmin: <SuperUserAdmin />,
  };

  /** This is the content to explains Liskov principle */
  const content = <div>Andres</div>;

  return (
    <>
      {/** This explains the single-principle responsibility */}
      <List products={products} />

      {/** This explains the open-closed principle */}
      {userByTypes[`${user.type}`]}

      {/** This explains the Liskov principle */}
      <ModalHolder content={content} />

      {/** This explains the interface segregation principle */}
      <Input
        type="text"
        style={{ border: '1px solid black', display: 'flex', marginTop: 20 }}
        placeholder="Digite seu texto"
      />

      {/** This explains the dependency inversion principle */}
      <Repos />
    </>
  );
}

export default App;
