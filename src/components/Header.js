import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="bz-w-full bz-h-14 bz-pt-3 bz-px-6 bz-flex">
        <div className="bz-flex bz-w-full bz-justify-center">
          <Image
            src="/images/buzcamp.png"
            height={100}
            width={100}
            alt="buzcamp-logo"
            style={{ width: "45px", height: "45px" }}
          />
        </div>
      </div>
    </>
  );
}
