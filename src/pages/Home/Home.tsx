import { ShopCard } from '@Components/ShopCard/ShopCard';
import { Layout } from '../../layout/Layout';
import style from './Home.module.scss';
import { InstanceMarket } from '../../http/Agent/Market.agent';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export const Home = () => {
  const [allMarket, setAllMarket] = useState<any>();

  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    try {
      const fetchMarket = async () => {
        const data = await InstanceMarket.getAllMarkets('rating', 12, itemOffset);
        setAllMarket(data);
      };
      fetchMarket();
    } catch (error) {
      console.log(error);
    }
  }, [itemOffset]);

  const handlePageClick = (event: any) => {
    console.log(event.selected);
    const newOffset = event.selected + 1;
    setItemOffset(newOffset);
  };
  return (
    <Layout>
      <main className={style.main}>
        <div className="container">
          <div className={style.wrapper}>
            <div className={style.wrapperMarkets}>
              {allMarket?.map((shop: any) => (
                <ShopCard key={shop.id} {...shop} />
              ))}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: 20,
                  boxSizing: 'border-box',
                  width: '100%',
                  height: '100%',
                }}
              >
                <ReactPaginate
                  activeClassName={style.item + ' ' + style.active}
                  breakClassName={style.item + ' ' + style.breakMe}
                  breakLabel={'...'}
                  containerClassName={style.pagination}
                  disabledClassName={style.disabledPage}
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageClassName={style.item + ' ' + style.paginationPage}
                  pageRangeDisplayed={5}
                  pageCount={10}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
