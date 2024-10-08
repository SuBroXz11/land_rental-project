import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Navbar, Loading } from '../components';
import Footer from '../components/Footer';
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className=''>
          <Outlet />
        </section>
      )}
      <Footer/>
    </>
  );
};
export default HomeLayout;
