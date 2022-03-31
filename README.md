# SOLID

**1. Single responsability principle.**

Um componente deve ter apenas uma única responsabilidade.

**2. Open-closed principle.**

Componentes devem ser abertos para extensão, mas fechadas para modificação.

COMPOSIÇÃO: Um componente mais específico renderiza um mais genérico.

**3. Liskov**

Os objetos em um programa devem ser substituídos por instâncias de seus subtipos sem alterar a exatidão desse programa.

A vantagem aqui é usar o TS pois você pode trocar facilmente os componentes se eles compartilharem o mesmo contrato.

**4. Interface segregation principle**

Muitas interfaces específicas do cliente são melhores do que uma interface de uso geral.

As interfaces devem ter apenas propriedades específicas delas.

**5. Dependency inversion principle**

Deve-se “depender de abstrações, NÃO concreções”.

Evitar depender de uma função que está sendo repetida, por exemplo, ao invés de chamar o axios
a toda request você deve criar uma função que retorna o mesmo valor que o axios retornaria.
