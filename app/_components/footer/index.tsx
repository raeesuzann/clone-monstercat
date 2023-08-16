import SocialLinks from "../social-links";

function Footer() {
  return (
    <div className="footer px-80 ">
      <div className="flex justify-between items-center border-solid border-t-2 py-10">
        <p className="flex-1">2011 - 2023 © Monstercat, All Rights Reserved</p>
        <SocialLinks horizontal />
      </div>

      <div className="text-xs py-10 px-72 text-center">
        <p className="mb-4">
          We acknowledge with gratitude the traditional, ancestral and unceded
          land of the Coast Salish peoples, including the territories of the
          Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh
          (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which
          Monstercat&apos;s Vancouver HQ stands.
        </p>
        <p>
          We acknowledge the unceded and ancestral territories of the
          Gabrielino/Tongva peoples on which our LA team live and work.
        </p>
      </div>
    </div>
  );
}

export default Footer;
