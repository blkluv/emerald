import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { NextPageWithLayout } from '@/types';
import emeraldLogo from "@/assets/images/emeraldlogo-mini.png";
import luxuryBag from "@/assets/images/grid/luxurybag.png";
import luxuryDiamonds from "@/assets/images/grid/luxurydiamonds.png";
import luxuryGold from "@/assets/images/grid/luxurygold.jpg";
import luxuryJewerelly from "@/assets/images/grid/luxuryjewerelly.png";
import luxuryRing from "@/assets/images/grid/luxuryring.png";
import luxuryWatch from "@/assets/images/grid/luxurywatch.png";
import OptionGrid from '@/components/option-grid';


export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const HomePage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
    return <>
      <div className={'flex flex-col h-full justify-evenly mt-20'}>
        <div className={'text-center flex flex-col justify-center font-larger text-black tracking-widest h-20 text-4xl mt-10 '}>
            <h1>Emerald Luxury</h1>
        </div>
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-20'}>
          <OptionGrid src={luxuryBag} title={'Handbags'}/>
          <OptionGrid src={luxuryJewerelly} title={'Jewellery'}/>
          <OptionGrid src={luxuryGold} title={'Gold'}/>
          <OptionGrid src={luxuryWatch} title={'Watches'}/>
          <OptionGrid src={luxuryDiamonds} title={'Diamonds'}/>
          <OptionGrid src={luxuryRing} title={'Rings'}/>
        </div>
      </div>
    </>
}


export default HomePage;