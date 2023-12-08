import Head from 'next/head';
import List from '../molecules/List';

const Home = () => {
  return (
    <>
      <Head>
        <link href='style.css' rel='stylesheet' />
      </Head>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptatum commodi eos consectetur corrupti officiis delectus numquam debitis fuga ducimus! Quas quasi impedit inventore, facilis delectus molestiae commodi sapiente ipsum?</p>
      <div className='container'>
        <div className='limit'>
          <List />
        </div>
      </div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptatum commodi eos consectetur corrupti officiis delectus numquam debitis fuga ducimus! Quas quasi impedit inventore, facilis delectus molestiae commodi sapiente ipsum?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptatum commodi eos consectetur corrupti officiis delectus numquam debitis fuga ducimus! Quas quasi impedit inventore, facilis delectus molestiae commodi sapiente ipsum?</p>
    </>
  );
};

export default Home;