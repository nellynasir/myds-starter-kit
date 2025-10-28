import HeroLight from "./assets/heroLight";
import FooterMyds from "./FooterMyds";
import MastHeadMyds from "./MastHeadMyds";
import NavbarMyds from "./NavbarMyds";
import SearchBarMyds from "./SearchBarMyds";


function App() {
  return (
    <div className="">
      <MastHeadMyds />
      <NavbarMyds />
      <div>
        <div className="w-full h-[514px] [&>svg]:w-full [&>svg]:h-auto absolute" >
          <HeroLight />
        </div>
      </div>
      <BodyApp>
        <div className="h-[514px] w-full items-center justify-center flex flex-col">
          <div className="z-10 font-heading font-semibold text-heading-md">Selamat Datang Ke PortalMy</div>
          <SearchBarMyds />
        </div>

      </BodyApp>
      <FooterMyds />
    </div>
  );
}

export default App;

function BodyApp({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex-1 px-[18px] sm:px-[18px] md:px-[24px] lg:px-[24px] xl:px-[24px] max-w-[1328px] p-8 flex w-full">
      {children}
    </div>
  );
}