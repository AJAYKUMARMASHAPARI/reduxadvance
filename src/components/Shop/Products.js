import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const Dummy_Products = [{
    id: 'p1',
    title: 'my First book',
    price: 5,
    description: "This is my first product"
  },
  {
    id: 'p2',
    title: 'my Second book',
    price: 10,
    description: "This is my Second product"
  },
  {
    id: 'p3',
    title: 'my Third book',
    price: 8,
    description: "This is my third product"
  },
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          Dummy_Products.map(item => (<ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />)
          )
        }
      </ul>
    </section>
  );
};

export default Products;
