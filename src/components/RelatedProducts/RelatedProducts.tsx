import './RelatedProducts.css';
import data from '../../Assets/data';
import Item from '../Item/Item';

const RelatedProducts = () => {
    return (
        <div className='RelatedProducts pb-16'>
            <h1 className='text-4xl py-5 text-center'>Telated Products</h1>
            <hr />
            <div className='RelatedProducts-item grid grid-cols-4  gap-5'>
                {
                    data.map((item, i) => {
                        return <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image.src}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default RelatedProducts
