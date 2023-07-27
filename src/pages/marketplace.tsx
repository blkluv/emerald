import { MarketplaceComponent } from "@/layouts/marketplace/marketplace"

export default function Marketplace() {
    return (
      <>
      <div className={'flex flex-col h-full justify-evenly mt-20'}>
        <div className={'text-center flex flex-col justify-center font-larger text-black tracking-widest h-20 text-4xl mt-10 '}>
            <h1>Emerald Luxury</h1>
        </div>
        <MarketplaceComponent/>
      </div>
      </>
    )
  }